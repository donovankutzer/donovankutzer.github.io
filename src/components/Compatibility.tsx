export default function Compatibility() {
  return (
    <>
      <section className="runs z" id="runs">
        <div className="wrap">
          <div className="section-header-center">
            <span className="sec-eye">Technical Standards</span>
            <h2>Production compatibility and design scope</h2>
            <p className="sec-sub">
              DataVec is optimized specifically for highly concurrent edge compute pipelines. Review our exact Web Workers API footprint alongside our engineering design limits.
            </p>
          </div>

          <div className="runs-grid">
            {/* Fully Supported Today */}
            <div className="runs-card yes">
              <div className="runs-label yes">✓ Fully Supported Today</div>
              
              <div className="run-row">
                <span className="run-icon">✓</span>
                <span className="run-text">
                  <strong>Standard Web Workers APIs</strong>
                  <small>Direct integration for `fetch`, `Request`, `Response`, `URL`, `Blob`, `TextEncoder`, and cryptographic libraries.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">✓</span>
                <span className="run-text">
                  <strong>Standard Edge Routers</strong>
                  <small>Deploy Hono, Elysia, and itty-router services natively with zero modifications required.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">✓</span>
                <span className="run-text">
                  <strong>Real-Time AI Streaming</strong>
                  <small>Optimized pipelines for server-sent events (SSE), chunked uploads, and zero-buffering response layouts.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">✓</span>
                <span className="run-text">
                  <strong>High-Volume Cryptography</strong>
                  <small>Web Crypto API bindings compiling into lightning-fast native JWT verification and session handshakes.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">✓</span>
                <span className="run-text">
                  <strong>Embedded Storage Pools</strong>
                  <small>High-speed embedded SQLite drivers. Perfect for static state storage, mapping configuration, and caching.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">✓</span>
                <span className="run-text">
                  <strong>Automated Global TLS</strong>
                  <small>Point your domain and deploy. Automatic, instant HTTPS certification and global edge routing are provisioned natively.</small>
                </span>
              </div>
            </div>

            {/* Active Focus & Scope */}
            <div className="runs-card no">
              <div className="runs-label no">◷ Roadmap & Architectural Scope</div>

              <div className="run-row">
                <span className="run-icon">◷</span>
                <span className="run-text">
                  <strong>Edge SSR Frameworks</strong>
                  <small>API routes deploy today. Statically compiled Next.js, Remix, and SvelteKit HTML render streams are actively building.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">◷</span>
                <span className="run-text">
                  <strong>External Database Pools</strong>
                  <small>SQLite is live. Connection drivers for high-performance pooling to external Postgres, MySQL, and Redis endpoints are in queue.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">◷</span>
                <span className="run-text">
                  <strong>Native WebSockets</strong>
                  <small>Compile routines compile WS frames perfectly. Structured routing gateways for high scale channels are coming soon.</small>
                </span>
              </div>

              <div className="run-row">
                <span className="run-icon">✗</span>
                <span className="run-text">
                  <strong>Non-Goal: Legacy Node.js Support</strong>
                  <small>We do not support legacy, CPU-heavy Node APIs (fs, child_process, net, or heavy native C++ addons). DataVec is designed exclusively for sleeker, modern edge worker standards.</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS BADGES CLOUD */}
      <section className="frameworks z">
        <div className="wrap">
          <h2 className="fw-label">Works with your existing Web Workers stack out-of-the-box</h2>
          <div className="fw-row">
            <span className="fw-tag featured">Hono</span>
            <span className="fw-tag featured">itty-router</span>
            <span className="fw-tag featured">Elysia</span>
            <span className="fw-tag">Remix (Edge)</span>
            <span className="fw-tag">tRPC</span>
            <span className="fw-tag">Zod</span>
            <span className="fw-tag">jose (JWT)</span>
            <span className="fw-tag">Fauna</span>
            <span className="fw-tag">Upstash</span>
            <span className="fw-tag">OpenAI SDK</span>
            <span className="fw-tag">Anthropic SDK</span>
            <span className="fw-tag">Stripe SDK</span>
          </div>
        </div>
      </section>
    </>
  );
}
