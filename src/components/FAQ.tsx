'use client';

import { useState } from 'react';

const FAQ_DATA = [
  {
    question: "Does my Cloudflare Workers code run here without changes?",
    answer: (
      <>
        Yes, provided that your codebase relies on standard Web Workers APIs such as fetch, Request, Response,
        and URL. Frameworks like Hono, itty-router, and Elysia are designed to be runtime-agnostic by default,
        meaning you can migrate them directly to our infrastructure. A typical migration requires no code
        changes whatsoever: you simply swap out your wrangler commands for our deploy CLI tools. Please note
        that Node.js-specific APIs or legacy WebSockets are not supported at this stage.
        <div className="faq-code" aria-label="Code block detailing migration commands">
          # Before<br />
          wrangler deploy<br /><br />
          # After<br />
          datavec deploy<br /><br />
          # Code: unchanged.
        </div>
        If your code uses Node.js-specific APIs (fs, net, child_process) or WebSockets, those aren't supported
        yet. We say so upfront on the compatibility page.
      </>
    )
  },
  {
    question: "What is the Web Workers standard?",
    answer: "The Web Workers standard is an Ecma International specification (TC55) establishing a uniform JavaScript API surface across browsers, edge nodes, and servers. This baseline covers standard functions like fetch, Request, Response, URL, TextEncoder, and Streams. Because major modern platforms like Cloudflare Workers, Deno Deploy, Vercel Edge, and Fastly Compute conform to this standard, any application targeting these APIs will run identically on DataVec without manual modifications."
  },
  {
    question: "What exactly does the flat rate include?",
    answer: "Our standard plans cover all compute resources, bandwidth transit, automatic HTTPS provisioning, edge routing, HTTP/1.1 and HTTP/2 support, and full developer dashboard access. We do not count requests, cap network bandwidth, meter CPU cycles, or charge seat fees, so your monthly invoice remains completely static regardless of traffic spikes."
  },
  {
    question: "How are cold starts actually 0ms?",
    answer: "Cold start latency is eliminated because our native compiler translates your source JavaScript files directly into high-performance native C binaries before deployment. When an incoming request reaches your endpoint, our purpose-built native runtime loads the binary directly, avoiding the need to spin up a JavaScript interpreter, initialize a V8 engine instance, or warm up a JIT compiler. While standard platforms suffer cold starts by initializing fresh virtualized runtimes, DataVec executes native machine code instantly."
  },
  {
    question: "What if I go over the limits on Pro or Business?",
    answer: "If your application consistently exceeds the high-level recommendations of your tier, we will reach out directly to discuss your resource needs instead of automatically throttling your traffic or billing you for overage. We prefer to work with you to transition your project to a more suitable plan or customized flat rate, ensuring your billing remains entirely transparent and free of surprise charges."
  },
  {
    question: "Does this work for AI workloads?",
    answer: "Yes, our infrastructure is optimized for AI integrations, with full native support for streaming HTTP responses, Server-Sent Events (SSE), chunked transfer encoding, and secure upstream proxy configurations. Standard tools like the OpenAI and Anthropic SDKs conform to Web Workers standards and deploy without adjustments. This environment is highly advantageous for AI streaming workflows, as long-running connection durations do not incur the microsecond-based execution surcharges common on traditional serverless platforms."
  },
  {
    question: "Can I test it before committing?",
    answer: "Yes, you can email hello@datavec.com to request a temporary test deployment of your actual codebase. Setting up a sandbox deployment typically takes about twenty minutes, allowing you to run performance benchmarks on your own endpoints and review real resource consumption metrics before making any long-term decisions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq z" id="faq">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">FAQ</span>
          <h2>Frequently asked questions about our technology and billing</h2>
        </div>

        <div className="faq-list" id="faqList">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen ? 'true' : 'false'}
                >
                  {item.question}
                  <span className="faq-arrow" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-a-container">
                  <div className="faq-a">
                    <div className="faq-a-inner">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
