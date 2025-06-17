---
title: "SaaS Essentials"
pubDate: "June 17, 2025"
description: "Key learnings from developing a complete SaaS application - from backend gotchas to frontend optimizations and general startup wisdom."
author: "Shah"
layout: "../../layouts/BaseLayout.astro"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["saas", "backend", "frontend", "startup", "seo"]
---

<!-- <a href="https://mdshahzeb.kit.com/" title="shah.dispatch - Your friendly neighborhood tinkerer's newsletter about tech, mentality, business and everything interesting" target="_blank" rel="noopener noreferrer">**shah.dispatch**</a> by [shah.build](https://shah.build) -->

<br>

Now the backend is complete and and I am getting started with the frontend and I need to ship things faster. Here's the things I learnt while developing the backend :

<br>

• Most of the times, **Caching** was the problem. Always remember to frequently **clear your browser cache** (or reopen your app in incognito) and test your web app.

• If you're hosting on a private server like the yellow cloud company (Cloudflare), **Do not set CORS<sup id="ref-1"><a href="#fn-1" aria-label="Footnote 1">1</a></sup> rules in your private cloud**, instead do it in your backend files or in use a proxy manager like **nginx or caddy<sup id="ref-2"><a href="#fn-2" aria-label="Footnote 2">2</a></sup>**.

• If you code using AI editors like cursor or windsurf, add rules to **disallow the IDE not to edit the environment variable files (.env files)** and also add a rule to **never hard code API keys** into the app.

<br>

Coming to the frontend part, these are the things I found useful:

<br>

• Use **Preact Signals<sup id="ref-3"><a href="#fn-3" aria-label="Footnote 3">3</a></sup>** if you have a use case for building a chatbot app instead of using traditional React Redux. Why you ask? **Redux updates everything in a component or a sub-tree, while Signals only updates the specific, affected parts**.

• If you're using a WordPress website for the marketing of your app, make sure to **setup the SEO first**. You can use plugins like Yoast SEO, SiteSEO, RankMath SEO and so on.

• In a **VITE<sup id="ref-4"><a href="#fn-4" aria-label="Footnote 4">4</a></sup> application**, use **chunking (code splitting)<sup id="ref-5"><a href="#fn-5" aria-label="Footnote 5">5</a></sup>** for faster initial loads. Also, **minify your code** and **optimize assets** like images and fonts.

<br>

Some Tips on general for a SaaS

<br>

• **Always do the SEO before Product Development** - Make sure to analyze your competitors with SEO analyzers like Screpy. Find keywords in Semrush. Add these keywords into your marketing site and saas app and you're good to go.

• **Prioritize user onboarding** - make sure the onboarding is **smooth as butter reducing churn<sup id="ref-6"><a href="#fn-6" aria-label="Footnote 6">6</a></sup>**. Use tools like Intercom or Userflow to create interactive guides, welcome emails, and in-app messages to quickly get users to their **"aha!" moment<sup id="ref-7"><a href="#fn-7" aria-label="Footnote 7">7</a></sup>**.

• **Focus on a niche first** - Don't try to be everything to everyone. Target a specific problem for a specific audience. This keeps you focused to build a highly tailored solution, gain early traction, and **dominate that niche before expanding** your horizons.

<br>

Making your SEO better gets you this :

<br>

<div class="text-center my-8">
  <img src="/seo-clicks.jpg" alt="Google Search Traction Notification" style="border-radius: 30px;" class="mx-auto w-full max-w-2xl h-auto" />
  <p class="text-center mt-4 text-gray-700 font-medium">Traction without even launching the SaaS officially</p>
</div>



<div class="mt-12 pt-8 border-t border-neutral-200">
  <h2 class="text-lg font-semibold mb-6 text-neutral-900">References</h2>
  <div class="space-y-4">
    <div id="fn-1" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">1</span>
      <div class="inline">
        <span class="text-neutral-700">
          CORS (Cross-Origin Resource Sharing) are security rules that control which websites can access your server's resources. Setting them wrong can block your own app from working properly.
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
          Nginx and Caddy are reverse proxy servers that sit between your users and your backend, handling requests, load balancing, and security configurations.
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
          Preact Signals is a reactive state management system that only re-renders the specific parts of your UI that actually changed, making it much faster than traditional React state management.
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
          Vite is a modern build tool for frontend development that provides extremely fast hot module replacement and optimized production builds.
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
          Code splitting (chunking) breaks your application into smaller pieces that load only when needed, dramatically reducing initial page load times.
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
          Churn refers to the rate at which users stop using your product. Lower churn means more users stick around, which is crucial for SaaS profitability.
        </span>
        <a href="#ref-6" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
    <div id="fn-7" class="text-sm leading-relaxed">
      <span class="inline-flex items-center justify-center w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">7</span>
      <div class="inline">
        <span class="text-neutral-700">
          The "aha!" moment is when a user first realizes the real value of your product - the moment they understand how it solves their problem and want to keep using it.
        </span>
        <a href="#ref-7" class="ml-2 text-sky-600 hover:text-sky-800 text-xs font-medium transition-colors" aria-label="Back to content">
          ↩ Back
        </a>
      </div>
    </div>
  </div>
</div>
