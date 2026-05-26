'use client';

import { useState } from 'react';

const MONITOR_LOGS = [
  // Step 0: Write
  `[MONITOR: WRITE LOGS]
$ cat src/index.ts
------------------------------------------------------------
import { Hono } from 'hono';
const app = new Hono();

app.get('/api/users', async (c) => {
  const token = c.req.header('Authorization');
  if (!token?.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  return c.json({ success: true, data: [] });
});

export default app;
------------------------------------------------------------
✓ Standard Web Worker structure detected.
✓ Framework: Hono v4.4.0 verified.
✓ Imports checked: Zero bulky Node.js filesystem dependencies.`,

  // Step 1: Compile
  `[MONITOR: COMPILER LOGS]
$ datavec compile src/index.ts --optimize
------------------------------------------------------------
[1] Loading local AST compiler toolchain...
[2] Stripping JavaScript V8 isolate contexts
[3] Resolving allocations (physically deleting GC overhead)
[4] Generating C header definitions:
    → struct Request { char* path; char* headers; ... };
    → struct Response { int status; char* body; ... };
[5] Translating ECMAScript Hono router to C callback indices
[6] Invoking GCC compiler optimization flags (-O3)

✓ Native C compilation completed in 3.4 seconds.
✓ Standalone static executable ready: index.bin (104 KB)`,

  // Step 2: Runtime
  `[MONITOR: RUNTIME LOGS]
$ datavec run --inspect
------------------------------------------------------------
[1] Starting purpose-built DataVec native execution layer...
[2] Listening on global edge port :443
[3] Native libraries linked:
    → openssl_tls_handshake (Instant global HTTPS cert)
    → http_parser_v2 (Natively compiled HTTP/1.1 & HTTP/2)
    → sqlite_driver_static (Direct database binding)
[4] Microthread scheduler status:
    → Co-routing active: 300,000 requests/sec target
    → Virtual memory allocated: 2.1 MB
    → Cold start latency: 0.00ms

✓ Live listener bound: https://hono-app.datavec.io`,

  // Step 3: Flat Rate
  `[MONITOR: SYSTEM BILLING]
$ datavec billing --verify
------------------------------------------------------------
Project ID: hono-edge-service
Billing Tier: Developer Pro ($19.00/mo flat)

[Invoice Diagnostic Report]
→ Monthly requests: 46,285,104 / 50,000,000 (92.5% cap)
→ Metered overage charges: $0.00 (SURGE_METERING: OFF)
→ Transit bandwidth consumed: 840 GB / 1000 GB
→ Bandwidth surcharges: $0.00 (BANDWIDTH_METERING: OFF)
------------------------------------------------------------
✓ Invoice total locked: $19.00 / month
✓ Surprise overage charges physically impossible.`
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="how z" id="how">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">Infrastructure Pipeline</span>
          <h2>The compiled edge deployment pipeline</h2>
          <p className="sec-sub">
            Hover over the compilation phases to inspect how standard JavaScript code is compiled, linked, and hosted on our native edge network.
          </p>
        </div>

        <div className="timeline-wrap">
          {/* Timeline Pipeline on the left */}
          <div className="timeline-steps">
            <div 
              className={`timeline-step-item ${activeStep === 0 ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(0)}
              onClick={() => setActiveStep(0)}
            >
              <span className="timeline-step-badge">[PHASE 01 / BUILD]</span>
              <h3>Write standard JavaScript</h3>
              <p>
                Build endpoints using Hono, Elysia, or itty-router conforming to standard Web Workers specifications.
              </p>
            </div>

            <div 
              className={`timeline-step-item ${activeStep === 1 ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(1)}
              onClick={() => setActiveStep(1)}
            >
              <span className="timeline-step-badge">[PHASE 02 / TRANSLATE]</span>
              <h3>Compile directly to C</h3>
              <p>
                Our compiler translates JavaScript AST logic into highly optimized, statically allocated native C structures.
              </p>
            </div>

            <div 
              className={`timeline-step-item ${activeStep === 2 ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(2)}
              onClick={() => setActiveStep(2)}
            >
              <span className="timeline-step-badge">[PHASE 03 / RUN]</span>
              <h3>104 KB Runtime Engine</h3>
              <p>
                Serve requests instantly on a standalone native process coordinating SSL handshakes, routing, and database drivers.
              </p>
            </div>

            <div 
              className={`timeline-step-item ${activeStep === 3 ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(3)}
              onClick={() => setActiveStep(3)}
            >
              <span className="timeline-step-badge">[PHASE 04 / AUDIT]</span>
              <h3>Predictable Billing Locks</h3>
              <p>
                Maintain total budget control with fixed monthly billing caps that physically disable metered surge invoices.
              </p>
            </div>
          </div>

          {/* Interactive Compiler Inspector Monitor on the right */}
          <div className="compiler-monitor">
            <div className="term-bar" style={{ background: '#0d1016' }}>
              <div className="term-dots">
                <span className="dot-r" />
                <span className="dot-y" />
                <span className="dot-g" />
              </div>
              <span className="term-title">compiler_inspector.log</span>
              <span className="term-lang">telemetry</span>
            </div>
            <div className="monitor-screen">
              <span className="monitor-tag">active_screen_0{activeStep + 1}</span>
              <pre style={{ margin: 0, whiteSpace: 'pre', overflowX: 'auto' }}>
                <code>{MONITOR_LOGS[activeStep]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
