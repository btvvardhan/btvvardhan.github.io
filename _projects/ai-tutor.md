---
layout: post
title: AI‑Accelerated Multi‑Modal Tutor
description: LLM+RAG tutor with PDFs/videos, CPU→GPU conversion, and benchmarks on NVIDIA A100.
image: /assets/projects/ai-tutor/cover.jpg   # shown on the cards grid
tags: [llm, rag, education, benchmarking]
links:
  - title: GitHub
    url: https://github.com/btvvardhan
  - title: Demo Video
    url: https://www.youtube.com/watch?v=XXXXXXXXXXX
---

## Overview
Built a multimodal tutor that ingests PDFs/videos, runs RAG QA, and auto‑converts CPU→GPU code with runtime benchmarking.

**Stack:** Gradio, LangGraph, Chroma/FAISS, Whisper, PyTorch/CuPy.

## Gallery
![Pipeline](/assets/projects/ai-tutor/pipeline.png)
![UI](/assets/projects/ai-tutor/ui.png)

## Video
<div class="video-wrap">
  <iframe src="https://www.youtube.com/embed/XXXXXXXXXXX" title="Demo" frameborder="0" allowfullscreen></iframe>
</div>

## Details
- Document & video ingestion with retrieval‑augmented Q&A  
- GPU job scheduling on cluster  
- Benchmarks and reports
