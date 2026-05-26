'use client';

import { Accordion } from '@mantine/core';

const FAQ_DATA = [
  {
    question: "Does my Cloudflare Workers code run on DataVec without modifications?",
    answer: (
      <>
        Yes, as long as your application targets standard Web Workers specification APIs such as fetch, Request, Response, URL, and Web Crypto. Popular routing frameworks like Hono, Elysia, and itty-router are completely runtime-agnostic by default. Migrating Hono or Elysia codebases usually requires zero code changes: you simply substitute your wrangler deploy command with our compiled deploy CLI tool.
        <div className="faq-code" aria-label="Code block detailing migration commands">
          # Before (Cloudflare)<br />
          $ wrangler deploy<br /><br />
          # After (DataVec Compiled C)<br />
          $ datavec deploy<br /><br />
          # Application codebase: 100% unchanged.
        </div>
      </>
    )
  },
  {
    question: "What exactly is the Web Workers API standard?",
    answer: "The Web Workers standard (maintained by standard organizations including TC55) specifies a standard, uniform JavaScript API surface across browsers, server runtimes, and edge environments. It establishes baseline APIs like fetch, Request, Response, URL, URLSearchParams, Headers, TextEncoder, and Streams. Since platforms like Deno Deploy, Vercel Edge, and Cloudflare Workers adhere to these standard specs, applications targetting them compile flawlessly onto DataVec native edge process containers."
  },
  {
    question: "What resource limits are included in standard flat-rate plans?",
    answer: "Our standard pricing tiers cover all compute allocations, edge routing resources, automatic TLS provisioning, global HTTP/2 pipelines, and developer telemetry charts. We do not count requests, count CPU milliseconds, or throttle egress bandwidth under standard usage limits. If your application starts approaching the upper boundaries of your tier, we reach out to discuss transition options rather than locking your execution or charging sudden multipliers."
  },
  {
    question: "How are cold starts physically reduced to absolute 0ms?",
    answer: "Traditional serverless platforms spin up a new virtual machine, initialize a V8 JavaScript runtime isolate, and execute a JIT compilation warm-up loop for incoming requests. This introduces cold-start latency. DataVec compiles JavaScript source code directly into a static C-based standalone machine binary before deployment. When an incoming request reaches your edge node, the kernel loads the binary instantly. It executes native machine code without any virtualized start-up overhead."
  },
  {
    question: "Is DataVec optimized for high-volume AI workloads?",
    answer: "Absolutely. Our native runtime is highly optimized for AI pipelines, offering full native support for server-sent events (SSE), chunked JSON streams, cryptographic verification handshakes, and upstream API gateways. Libraries like OpenAI and Anthropic SDKs deploy natively without alterations. Furthermore, because flat rate plans eliminate duration-based metering, you can run active generative streaming connections for minutes at a time without accumulating expensive microsecond-based computing bills."
  },
  {
    question: "Can I benchmark my codebase before migrating?",
    answer: "Yes. You can contact hello@datavec.com to request an ephemeral developer sandbox deployment of your active codebase. Setting up a temporary sandbox typically takes less than twenty minutes, enabling your team to run performance benchmarks on actual edge nodes and verify latency margins before committing."
  }
];

export default function FAQ() {
  return (
    <section className="faq z" id="faq">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">Developer FAQ</span>
          <h2>Frequently asked questions about technology and pricing</h2>
        </div>

        <Accordion 
          variant="separated" 
          radius="lg" 
          defaultValue={null}
          styles={{
            root: { maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' },
            item: { background: 'var(--surface)', border: '1px solid var(--border)', transition: 'var(--transition)' },
            control: { padding: '12px 24px', outline: 'none' },
            label: { color: 'var(--text)', fontSize: '15.5px', fontWeight: 700, fontFamily: 'var(--font-sans)', textAlign: 'left' },
            chevron: { color: 'var(--accent-mint)', fontSize: '18px' },
            panel: { background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)' },
            content: { padding: '24px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }
          }}
        >
          {FAQ_DATA.map((item, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="faq-item">
              <Accordion.Control className="faq-q">{item.question}</Accordion.Control>
              <Accordion.Panel className="faq-a">
                {item.answer}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

