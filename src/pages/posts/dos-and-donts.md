---
title: "Dos and Don’ts"
pubDate: "August 29, 2025"
description: "Prioritize distribution over overbuilding; Python threading vs multiprocessing with a real-world pipeline."
author: "Shah"
layout: "../../layouts/BaseLayout.astro"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["python", "threads", "multiprocessing", "redis", "socket.io", "architecture"]
---

<br>

**Dos and Don’ts**

I recently soft launched my SaaS and got the best feedback for it. **“You’re too concerned about the Product than its Distribution and Sales. You’re overbuilding things for no audience because you haven’t launched it yet.”** This hit me like Thanos pulls down a whole planet onto the Avengers in Endgame. Therefore, I’ll be focusing on **one feature that sells**, make it near perfect and **launch asap**.

<br>

Apart from that, I’ve learnt a lot more about programming languages and what’s the difference between multithreaded ones and the single threaded ones; for example:

<br>

“What’s Multithreaded and Single Threaded languages again?” **Multithreaded languages** are designed to run multiple threads in parallel without artificial locks like **Python’s GIL**<sup id="ref-1"><a href="#fn-1" aria-label="Footnote 1">1</a></sup>. Some of them are Java, C++, C#, Go, Rust. Whereas a **single-threaded language** means your code runs one step at a time, in one sequence, on a single thread. **No “true” parallelism** by default.

> • **JavaScript** is the most famous example. It runs on a **single thread** but uses something called an **event loop**<sup id="ref-2"><a href="#fn-2" aria-label="Footnote 2">2</a></sup> and **async callbacks/promises** to handle multiple tasks efficiently (**without blocking the main thread**).
>
> • **Python** (kind of a middle case): it supports multithreading but because of **GIL (Global Interpreter Lock)** it often behaves like a **single-threaded language** for CPU tasks.

<br>

Look at the diagram below:

<div class="text-center my-8">
  <img src="/threading-problem.png" alt="Threading problem due to GIL bottleneck" style="border-radius: 30px;" class="mx-auto w-full max-w-4xl h-auto" />
  <p class="text-center mt-4 text-gray-700 font-medium">Threading with GIL: bottleneck blocks other tasks</p>
</div>

Even if you give Python multiple tasks, the **GIL** acts like a traffic police, it lets **only one thread** run, while the others just sit waiting. So, Task 1 runs, Task 2 and Task 3 are waiting, and the rest of the CPU cores are literally **sleeping**. That’s the bottleneck.

My task was to make this Python program work parallelly for I/O bound tasks like File Handling Operations (file copy, delete, move, etc.) while also communicating with the Serial ports on a Microprocessor, while the frontend in JS updates via the events sent from Python. And I thought Python being multithreaded (as they say it is on their website) would handle this. I wrote the whole code in “multithreading” with **Gevent**<sup id="ref-3"><a href="#fn-3" aria-label="Footnote 3">3</a></sup> (it’s a library that helps in writing “multithreaded code”) only to realize that GIL locks a thread during **I/O bound tasks**.
 

**Locking a thread** means that the “program executor” is busy executing Task 1 and other tasks are queued. From the user’s standpoint, the **software looks frozen**, the frontend doesn’t get updates until the Python task finishes.

Okay so how did I solve that? We use something called **multi-processing**<sup id="ref-4"><a href="#fn-4" aria-label="Footnote 4">4</a></sup>. In multiprocessing, we spin up different processes for different tasks, which have their **own memory spaces** and **own GILs**.

<br>

"Okay so how did you solve this issue?" With something called Multiprocessing

<br>

Look at the diagram below:

<div class="text-center my-8">
  <img src="/multiprocessing-solution.png" alt="Multiprocessing uses multiple cores with no bottleneck" style="border-radius: 30px;" class="mx-auto w-full max-w-4xl h-auto" />
  <p class="text-center mt-4 text-gray-700 font-medium">Multiprocessing: each process runs independently using full CPU power</p>
</div>

Now Task 1, Task 2, Task 3, Task 4, they all run in **parallel** across **different CPU cores**. No more “sleepy cores.” Each process has its own interpreter and memory space, so they don’t block each other.

But here’s the tricky part: if each process is working independently, how do we send updates back to the front end without getting stuck again?

Here’s how I did it:

> • **Each child process** finishes a chunk of work (say copying a file or talking to the microprocessor).
>
> • It immediately sends **progress updates** to the main process.
>
> • The main process then pushes those updates to **Redis**<sup id="ref-5"><a href="#fn-5" aria-label="Footnote 5">5</a></sup>.
>
> • Redis broadcasts through **Socket.IO**<sup id="ref-6"><a href="#fn-6" aria-label="Footnote 6">6</a></sup> events → straight to the frontend.

The result? My frontend in JavaScript **keeps updating live**, file copy progress bars move, device mount/unmount updates show up in **real-time**, all without blocking.

So instead of the UI “freezing” until Python wakes up, now the backend and frontend are in constant sync. **Multiprocessing + Redis + Socket.IO** made the pipeline smooth, efficient, and parallel.
 
<div class="mt-12 pt-8 border-t border-neutral-200">
  <h2 class="text-lg font-semibold mb-6 text-neutral-900">References</h2>
  <div class="space-y-4">
    <div id="fn-1" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">1</span>
      <div class="inline">
        <span class="text-neutral-700">
          GIL (Global Interpreter Lock) is a mutex in CPython that allows only one thread to execute Python bytecode at a time.
        </span>
        <a href="#ref-1" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
    <div id="fn-2" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">2</span>
      <div class="inline">
        <span class="text-neutral-700">
          The event loop is a runtime construct that queues and dispatches asynchronous operations without blocking the single JavaScript thread.
        </span>
        <a href="#ref-2" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
    <div id="fn-3" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">3</span>
      <div class="inline">
        <span class="text-neutral-700">
          Gevent is a Python networking library that uses greenlets to provide cooperative concurrency for I/O-bound workloads.
        </span>
        <a href="#ref-3" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
    <div id="fn-4" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">4</span>
      <div class="inline">
        <span class="text-neutral-700">
          Multiprocessing creates separate OS processes that run in parallel across CPU cores, each with its own interpreter and memory space.
        </span>
        <a href="#ref-4" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
    <div id="fn-5" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">5</span>
      <div class="inline">
        <span class="text-neutral-700">
          Redis is an in-memory data store often used as a pub/sub broker for real-time messaging between processes and services.
        </span>
        <a href="#ref-5" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
    <div id="fn-6" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">6</span>
      <div class="inline">
        <span class="text-neutral-700">
          Socket.IO is a library for real-time, bidirectional communication between clients and servers over WebSockets with fallbacks.
        </span>
        <a href="#ref-6" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
  </div>
</div>


