'use client';

import { useState } from 'react';

type SymbolId = 'header' | 'db' | 'json' | null;

const SYMBOLS = {
  header: {
    js: "req.headers.get('Authorization')",
    c: "get_header(req, \"Authorization\")",
    desc: "Translates standard dynamic JavaScript request contexts directly into static pointer-indexed header lookups in C, bypassing V8 scope mapping by leveraging isolated micro-heaps."
  },
  db: {
    js: "env.DB_BINDING.query(...)",
    c: "db_query(get_env_db(\"DB_BINDING\"))",
    desc: "Bridges asynchronous JS environment bindings directly to static, lockless SQLite client structures using a structured memory layout with `struct iovec` ring buffers for auto-aggregating I/O operations."
  },
  json: {
    js: "Response.json(data, { status: 200 })",
    c: "return create_response(200, serialize_to_json(data))",
    desc: "Replaces JavaScript heap GC allocations with stackless coroutines utilizing readiness-oriented standard I/O blocking operations over stream buffers, eliminating runtime GC pauses."
  }
};

export default function Technology() {
  const [hoveredSymbol, setHoveredSymbol] = useState<SymbolId>(null);

  return (
    <section className="tech z" id="tech">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">Architectural Schematics</span>
          <h2>Visualizing compiler &amp; runtime efficiency</h2>
          <p className="sec-sub">
            DataVec replaces layers of virtualization with pre-compiled native execution. Hover over the symbol map and stack diagrams below to inspect the design.
          </p>
        </div>

        <div className="tech-grid">
          {/* Column 1: The Compiler (Interactive Symbol Map) */}
          <div className="tech-card b">
            <div className="tech-tag" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)', border: '1px solid var(--border-active)' }}>
              The Compiler
            </div>
            <h3>Direct AST Translation Showcase</h3>
            <p style={{ marginBottom: '20px' }}>
              Our compiler parses your standard JavaScript AST (Abstract Syntax Tree) during deployment and maps statements directly into native C structures. Under the hood, this leverages our stackless coroutine framework to execute concurrent micro-threads in isolated, partitioned micro-heaps:
            </p>

            <div className="symbol-playground">
              {/* JS Column */}
              <div className="symbol-play-col">
                <span className="symbol-play-label">JavaScript (Next.js / Web Standard)</span>
                <div 
                  className={`symbol-node ${hoveredSymbol === 'header' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredSymbol('header')}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  req.headers.get(...)
                </div>
                <div 
                  className={`symbol-node ${hoveredSymbol === 'db' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredSymbol('db')}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  env.DB_BINDING.query
                </div>
                <div 
                  className={`symbol-node ${hoveredSymbol === 'json' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredSymbol('json')}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  Response.json(data)
                </div>
              </div>

              {/* C Column */}
              <div className="symbol-play-col">
                <span className="symbol-play-label">Statically Compiled C</span>
                <div 
                  className={`symbol-node ${hoveredSymbol === 'header' ? 'active-mint' : ''}`}
                  onMouseEnter={() => setHoveredSymbol('header')}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  get_header(...)
                </div>
                <div 
                  className={`symbol-node ${hoveredSymbol === 'db' ? 'active-mint' : ''}`}
                  onMouseEnter={() => setHoveredSymbol('db')}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  db_query(...)
                </div>
                <div 
                  className={`symbol-node ${hoveredSymbol === 'json' ? 'active-mint' : ''}`}
                  onMouseEnter={() => setHoveredSymbol('json')}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  create_response(...)
                </div>
              </div>
            </div>

            {/* Translation Details Box */}
            <div className="symbol-details-box">
              {hoveredSymbol ? (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-mint)', marginBottom: '4px' }}>
                    Mapping: {SYMBOLS[hoveredSymbol].js} → {SYMBOLS[hoveredSymbol].c}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: 1.4 }}>
                    {SYMBOLS[hoveredSymbol].desc}
                  </div>
                </div>
              ) : (
                <div style={{ color: 'var(--text-dim)', fontStyle: 'italic', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  → Hover over any JavaScript or C node above to inspect compiled symbols.
                </div>
              )}
            </div>
          </div>

          {/* Column 2: The Runtime (Visual Stack Comparison) */}
          <div className="tech-card g">
            <div className="tech-tag" style={{ background: 'var(--accent-mint-dim)', color: 'var(--accent-mint)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              The Runtime
            </div>
            <h3>Virtualization Layer Comparison</h3>
            <p style={{ marginBottom: '20px' }}>
              Standard serverless architectures stack execution layers (virtual machines, JIT layers, and heavy JS engines) which adds CPU duration latency. DataVec compiles your service into a standalone, memory-protected virtual kernel daemon process.
            </p>

            <div className="stack-comparison">
              <div className="stack-bars-wrap">
                {/* DataVec Compact Stack */}
                <div className="stack-flow dv">
                  <span className="stack-title">DataVec compiled C</span>
                  <div className="stack-flow-node" style={{ fontWeight: 'bold' }}>Deductive Socket Poller (0ms)</div>
                  <div className="stack-flow-node" style={{ fontWeight: 'bold' }}>Stackless Coroutine (0ms)</div>
                  <div className="stack-flow-node" style={{ fontWeight: 'bold' }}>Isolated Micro-Heap SQLite (0ms)</div>
                  <div style={{ textAlign: 'center', fontSize: '11px', marginTop: '12px', color: 'var(--accent-mint)', fontFamily: 'var(--font-mono)' }}>
                    Total: 104 KB Single Binary<br />Cold Start: 0.00ms (M:N Scheduled)
                  </div>
                </div>

                {/* AWS/Vercel Isolate Stack */}
                <div className="stack-flow aw">
                  <span className="stack-title">Virtualized Edge Isolate</span>
                  <div className="stack-flow-node">API Gateway (metered)</div>
                  <div className="stack-flow-node">Firecracker VM (startup)</div>
                  <div className="stack-flow-node">V8 Isolate engine</div>
                  <div className="stack-flow-node">Node.js Runtime &amp; GC</div>
                  <div className="stack-flow-node">Dynamic JS Route (V8 Heap)</div>
                  <div style={{ textAlign: 'center', fontSize: '11px', marginTop: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Total: 50 MB+ Layer Stack<br />Cold Start: ~5ms - 50ms (Unstructured)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
