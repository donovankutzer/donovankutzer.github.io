'use client';

import { useState } from 'react';

type WorkloadType = 'routing' | 'crypto' | 'sse';

const BENCHMARKS = {
  routing: {
    title: "Next.js Static Routing",
    sub: "Processes a complex nested endpoint router with custom JSON payload returns.",
    data: [
      { name: "DataVec compiled C", val: "0.08ms", pct: 100, tag: "dv" },
      { name: "Deno Deploy", val: "0.95ms", pct: 12, tag: "de" },
      { name: "Cloudflare Workers", val: "1.15ms", pct: 8, tag: "cf" },
      { name: "Vercel Edge", val: "12.40ms", pct: 2, tag: "ve" },
      { name: "AWS Lambda (Node.js)", val: "45.20ms", pct: 0.5, tag: "aw" }
    ],
    winner: "Compiling JavaScript AST to C stateful coroutines yields direct machine execution speed."
  },
  crypto: {
    title: "JWT Token Verification",
    sub: "Decodes, parses, and cryptographically signs high-volume OAuth signatures.",
    data: [
      { name: "DataVec compiled C", val: "0.12ms", pct: 100, tag: "dv" },
      { name: "Deno Deploy", val: "1.48ms", pct: 11, tag: "de" },
      { name: "Cloudflare Workers", val: "1.84ms", pct: 8, tag: "cf" },
      { name: "Vercel Edge", val: "18.20ms", pct: 1.5, tag: "ve" },
      { name: "AWS Lambda (Node.js)", val: "62.10ms", pct: 0.5, tag: "aw" }
    ],
    winner: "Native C crypto APIs execute inside isolated micro-heaps with zero lock overhead."
  },
  sse: {
    title: "SSE AI Streaming Payload",
    sub: "Maintains concurrent chunked transfer streams optimized for generative outputs.",
    data: [
      { name: "DataVec compiled C", val: "4.80ms", pct: 100, tag: "dv" },
      { name: "Deno Deploy", val: "24.20ms", pct: 20, tag: "de" },
      { name: "Cloudflare Workers", val: "28.50ms", pct: 17, tag: "cf" },
      { name: "Vercel Edge", val: "128.40ms", pct: 4, tag: "ve" },
      { name: "AWS Lambda (Node.js)", val: "340.50ms", pct: 1.4, tag: "aw" }
    ],
    winner: "Stackless coroutines coordinate I/O stream buffers without memory GC pauses."
  }
};

export default function Hero() {
  const [activeWorkload, setActiveWorkload] = useState<WorkloadType>('routing');
  const current = BENCHMARKS[activeWorkload];

  return (
    <section className="hero z" style={{ padding: '60px 0 100px' }}>
      <div className="wrap">
        <div className="hero-grid">
          {/* Left copy */}
          <div>
            <div className="eyebrow">
              <span className="eyebrow-badge">DataVec</span>
              <span className="eyebrow-sep"></span>
              <span className="eyebrow-text">Compiled Runtime · M:N Scheduling · Flat Rate</span>
            </div>
            <h1 style={{ marginBottom: '24px' }}>
              <span className="c1">JavaScript that runs like </span>
              <span className="c2">C</span>
            </h1>
            <p className="hero-sub">
              A high-performance server alternative for teams currently on Cloudflare Workers, Vercel Edge, or Deno. No garbage collector, zero cold starts, and one transparent flat monthly rate.
            </p>

            <div className="migrate-note" style={{ background: 'rgba(99, 102, 241, 0.04)', borderColor: 'var(--border)' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>
                Drop-in compatible with standard Web Workers, Next.js, and static site APIs. Built on native coroutine scheduling for massive vertical scaling.
              </span>
            </div>

            <div className="btn-group">
              <a href="#pricing" className="btn-primary">Start for $19/month</a>
              <a href="#calc" className="btn-ghost">Compare server savings</a>
            </div>

            <p className="hero-fine">
              We never charge for requests or metered CPU time. Flat rates locked forever.
            </p>
          </div>

          {/* Right interactive benchmarks */}
          <div>
            <div className="benchmark-panel" style={{ marginBottom: 0, boxShadow: 'var(--shadow-md)' }}>
              <div className="benchmark-header">
                <div className="benchmark-title-wrap">
                  <h3 style={{ fontSize: '16px' }}>{current.title}</h3>
                  <p style={{ fontSize: '11.5px', marginTop: '4px' }}>{current.sub}</p>
                </div>
                <div className="benchmark-selectors">
                  <button
                    className={`benchmark-btn ${activeWorkload === 'routing' ? 'active' : ''}`}
                    onClick={() => setActiveWorkload('routing')}
                  >
                    Router
                  </button>
                  <button
                    className={`benchmark-btn ${activeWorkload === 'crypto' ? 'active' : ''}`}
                    onClick={() => setActiveWorkload('crypto')}
                  >
                    Crypto
                  </button>
                  <button
                    className={`benchmark-btn ${activeWorkload === 'sse' ? 'active' : ''}`}
                    onClick={() => setActiveWorkload('sse')}
                  >
                    Streaming
                  </button>
                </div>
              </div>

              <div className="benchmark-graph" style={{ padding: '24px 20px' }}>
                {current.data.map((row) => {
                  const isWinner = row.tag === 'dv';
                  return (
                    <div key={row.name} className={`benchmark-row ${isWinner ? 'active-winner' : ''}`} style={{ gridTemplateColumns: '150px 1fr 70px', gap: '14px' }}>
                      <span className="benchmark-name" style={{ fontSize: '12px' }}>
                        <span className={`benchmark-dot-tag ${row.tag}`} />
                        {row.name}
                      </span>
                      <div className="benchmark-bar-container" style={{ height: '20px' }}>
                        <div
                          className={`benchmark-bar ${row.tag}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      <span className="benchmark-val" style={{ fontSize: '11px' }}>{row.val}</span>
                    </div>
                  );
                })}
              </div>

              <div className="benchmark-footer" style={{ fontSize: '11px', padding: '12px 16px' }}>
                <span>{current.winner}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
