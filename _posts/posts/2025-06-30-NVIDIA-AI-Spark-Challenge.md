---
layout:   post
title:    "AI Accelerated Spark Challenge 2025 — 80++ Multi-Modal GPU Tutor"
subtitle: "10-day deep dive into GPU acceleration, LLMs, and AI-powered education at ASU"
category: studylog
tags:     nvidia spark gpu llm rag education
---

<div class="iframe-container">
  <!-- Replace VIDEO_ID if needed -->
  <iframe src="https://www.youtube.com/embed/TofwOV7kyKU"
          title="AI-Accelerated Tutor Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>

Last month, I had the incredible opportunity to participate in the **AI Accelerated Spark Challenge 2025**, hosted by **NVIDIA**, **AZNext**, and **Technology at Arizona State University** — a 10-day deep dive into **GPU acceleration**, **LLMs**, and **AI-powered education systems**.

The experience began with hands-on training from NVIDIA and ASU experts, where we explored:

- **CuPy** for GPU-accelerated numerical computing  
- **RAPIDS**: cuDF for data manipulation and **cuML** for ML workflows  
- **Warp** for differentiable spatial computing  
- **JIT** kernel compilation and GPU workflow optimization  
- Enhancing **LLMs** via prompt engineering, **RAG**, and fine-tuning  
- Accessing and optimizing workflows on **ASU’s SOL Supercomputer**

These learnings laid the foundation for our solution: **80++**, an **AI-powered tutor** designed to accelerate GPU-based data science education. From document comprehension to hands-on benchmarking, our five-mode intelligent agent delivers personalized, interactive learning to help students transition from theory to performance-driven practice.

**Modes**
- 🎥 **Video Tutor** — Auto-fetches and summarizes GPU tutorial content  
- 🧠 **Socratic Tutor** — Engages learners through guided reasoning  
- 💬 **General Assistant** — Concise, code-ready ML/DS responses  
- ⚡ **GPU Accelerator** — Converts CPU-bound code (NumPy, Pandas) to **CuPy/cuDF** with **live benchmarking**  
- 📝 **Quiz Mode** — Time-bound quizzes with feedback and upskilling paths

**Links**  
- Learn more: <https://lnkd.in/dRS2Wzhv>  
- Demo video: <https://lnkd.in/dPhiMNfr>

<!--more-->

* this unordered seed list will be replaced by the toc
{:toc}

## What We Built

**80++** is a multi-modal tutor that ingests **PDFs and videos**, performs **RAG-based Q&A**, and can **auto-convert CPU code to GPU** with runtime benchmarks. The system runs on **A100 GPUs** (SOL supercomputer) and supports mixed workflows spanning **CuPy/cuDF**, **PyTorch**, and **Spark on GPU**.

**Highlights**
- Unified **document/video** ingestion with embeddings for cross-modal retrieval  
- **Grounded** responses with citations and follow-ups  
- **CPU→GPU** rewrite for common DS patterns (NumPy→CuPy, Pandas→cuDF)  
- **Live benchmarks** (CPU vs GPU) to teach performance thinking

## Tech Stack

- UI: **Gradio**  
- Orchestration: **LangGraph**  
- Retrieval: **FAISS/Chroma** with hybrid search + rerank  
- Speech/Text: **Whisper** for transcripts  
- Acceleration: **CUDA**, **RAPIDS (cuDF, cuML)**, **CuPy**, **Spark on GPU**  
- Infra: **ASU SOL** (A100 GPUs)

## Acknowledgments

Deep gratitude to mentors and the organizing team — **Raghu Santanam**, **Rob Buelow**, **Gil Speyer**, **Jeania Kimbrough**, **Zoe Ryan**, **Juan Jose Garcia Mesa**, **Amanda Butler**, **Mansi Patel**, and the evaluators from **NVIDIA**, **TIAA**, and **W. P. Carey School of Business – ASU**.  
Special thanks to our host **Olivia Herneddo, MFA** for her support throughout the challenge.

**Shoutout to my teammates** — **Ben Stewart**, **Teja Vishnu Vardhan Boddu**, **Neha Kashyap**, **Anannya Reddy Gade** — for the collaboration, creativity, and relentless drive.

## Looking Ahead

- Expand the accelerator ruleset to cover more **NumPy/Pandas → CuPy/cuDF** patterns  
- Add **fine-tuned rerankers** for multi-domain corpora  
- Introduce **project-based assessments** that auto-grade performance targets

