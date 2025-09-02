// assets/js/chat.js
window.Chat = (function () {
  const ENDPOINT = "https://rag-netlify.netlify.app/.netlify/functions/chatbot";

  // Session id
  function sid() {
    const k = "chatbot_session_id";
    let s = localStorage.getItem(k);
    if (!s) { s = (crypto.randomUUID?.() || String(Date.now())); localStorage.setItem(k, s); }
    return s;
  }

  // Robust fetch with detailed errors + CORS fallback
  async function askBackend(message, msTimeout = 20000) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort("timeout"), msTimeout);
    try {
      let res, raw, data;

      // --- Attempt 1: JSON POST (typical)
      try {
        res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, sessionId: sid() }),
          signal: ctrl.signal
        });
        console.debug("[chat] status(JSON)", res.status, res.statusText);
        raw = await res.text();
        try { data = raw ? JSON.parse(raw) : null; } catch {}
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText} — ${raw?.slice(0, 200)}`);
        }
      } catch (e1) {
        // If preflight/CORS or other fetch error, try form-encoded without Content-Type header
        console.warn("[chat] JSON fetch failed, retrying as form-encoded:", e1);
        const form = new URLSearchParams();
        form.set("message", message);
        form.set("sessionId", sid());
        res = await fetch(ENDPOINT, { method: "POST", body: form, signal: ctrl.signal });
        console.debug("[chat] status(FORM)", res.status, res.statusText);
        raw = await res.text();
        try { data = raw ? JSON.parse(raw) : null; } catch {}
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText} — ${raw?.slice(0, 200)}`);
        }
      }

      const reply =
        (data && (data.reply ?? data.text ?? data.answer ?? data.message)) ??
        (typeof raw === "string" && raw.trim() ? raw : null);

      if (typeof reply !== "string") {
        throw new Error("Malformed response (missing reply/text/answer/message). Raw: " + (raw?.slice(0, 200) ?? "<empty>"));
      }
      return reply;
    } finally {
      clearTimeout(t);
    }
  }

  // DOM helpers
  let log, input, send, chips;

  function addMsg(text, who = "bot", cls = "") {
    const wrap = document.createElement("div");
    wrap.className = `msg ${who}`;
    const bubble = document.createElement("div");
    bubble.className = `bubble ${cls}`;
    bubble.textContent = text; // safe default (no HTML injection)
    wrap.appendChild(bubble);
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
    return bubble;
  }

  function renderReply(bubble, text) {
    // lightweight code fence support
    if (text.includes("```")) {
      const parts = text.split(/```/);
      bubble.textContent = "";
      parts.forEach((chunk, i) => {
        if (i % 2 === 1) {
          const pre = document.createElement("pre");
          // strip language label if present on first line
          pre.textContent = chunk.replace(/^[a-zA-Z0-9+\-_.# ]*\n?/, "");
          bubble.appendChild(pre);
        } else if (chunk.trim()) {
          const p = document.createElement("div");
          p.textContent = chunk;
          bubble.appendChild(p);
        }
      });
    } else {
      bubble.textContent = text;
    }
  }

  async function sendMsg(q) {
    if (!q) return;
    addMsg(q, "user");
    input.value = "";
    const hold = addMsg("…thinking…", "bot", "thinking");
    try {
      const a = await askBackend(q);
      hold.classList.remove("thinking");
      renderReply(hold, a);
    } catch (e) {
      hold.classList.remove("thinking");
      hold.classList.add("error");
      hold.textContent = "Error: " + (e?.message || e);
      console.error("[chat] fetch error:", e);
    }
  }

  function bindEvents() {
    if (!send || !input) {
      console.error("[chat] missing #chat-send or #chat-input");
      return;
    }
    send.onclick = () => sendMsg(input.value.trim());
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMsg(input.value.trim());
      }
    });
    chips?.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      sendMsg(b.textContent.trim());
    });
  }

  function start() {
    console.log("[chat] start");
    const mount = document.getElementById("chat-app");
    if (!mount || mount.dataset.ready) return; // prevent double init on PJAX
    mount.dataset.ready = "1";

    log   = document.getElementById("chat-log");
    input = document.getElementById("chat-input");
    send  = document.getElementById("chat-send");
    chips = document.getElementById("chat-chips");

    bindEvents();
    addMsg("Hi! I’m your site assistant. Ask about Teja’s projects, resume, or research. Try the chips below.");
  }

  return { start };
})();

// --- Boot: init on full load AND after Hydejack's PJAX navigation ---
(function boot() {
  function init() {
    try { window.Chat.start(); } catch (e) { console.error("[chat] init failed:", e); }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  document.addEventListener("hy-push-state-after", init);
})();
