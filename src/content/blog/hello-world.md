---
title: 'Hello World — Welcome to My Blog'
description: 'A brief introduction to this blog and what you can expect to find here — AI, software engineering, and systems design.'
pubDate: 'May 15 2026'
tags: ['ai', 'software-engineering', 'systems']
---

Welcome! I'm **V Surya Kumar**, a Software Development Associate at Goldman Sachs. This blog is where I write about the things I find most interesting in tech — artificial intelligence, software engineering, and systems design.

## What to Expect

I'll be writing about:

- **AI & LLMs** — inference internals, building agents, training pipelines, and practical applications of large language models
- **Software Engineering** — architecture patterns, code quality, developer tools, and lessons from building production systems
- **Systems Design** — distributed systems, infrastructure, performance optimization, and understanding how things work under the hood

## Why Write?

Writing helps me think more clearly. If I can explain something in a blog post, I truly understand it. And if someone else finds it useful — even better.

## Code Examples

Posts will frequently include real code. Here's a quick example of what that looks like:

```python
def build_agent(model, tools):
    """A simple agent loop."""
    messages = []
    while True:
        response = model.generate(messages)
        if response.tool_calls:
            for call in response.tool_calls:
                result = tools[call.name](**call.args)
                messages.append(tool_result(call, result))
        else:
            return response.content
```

Stay tuned for more. You can follow me on [X](https://x.com/v_surya_kumar) or subscribe to the [RSS feed](/rss.xml) to get notified when new posts go live.
