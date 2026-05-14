---
title: 'Understanding LLM Inference Internals'
description: 'Tracing the path from prompt to token — tokenization, embedding, attention, KV caching, and sampling explained.'
pubDate: 'May 13 2026'
tags: ['ai', 'llm', 'deep-learning', 'systems']
---

<!-- 
  ╔═══════════════════════════════════════════════════════════╗
  ║  TEMPLATE POST — Replace this content with your own!     ║
  ║                                                          ║
  ║  Keep the frontmatter above (title, description, etc.)   ║
  ║  and write your content below in Markdown.               ║
  ╚═══════════════════════════════════════════════════════════╝
-->

## Introduction

What makes LLM inference fast (or slow)? This post breaks down the full pipeline.

## The Inference Pipeline

### 1. Tokenization

How text becomes tokens.

### 2. Embedding Lookup

How tokens become vectors.

### 3. Transformer Layers

Attention, FFN, and residual connections.

### 4. Sampling

Temperature, top-k, top-p — how the next token is chosen.

## Code Walkthrough

```cpp
// Example from llama.cpp or similar
```

## Conclusion

Key takeaways about inference performance.

---

*Have thoughts or questions? Reach out on [X](https://x.com/v_surya_kumar).*
