export default function Compatibility() {
  return (
    <>
      {/* COMPATIBILITY (WHAT RUNS) */}
      <section className="runs z" id="runs">
        <div className="wrap">
          <div className="section-header-center">
            <span className="sec-eye">Compatibility</span>
            <h2>Production compatibility and design focus</h2>
            <p className="sec-sub">DataVec is designed as a high-performance alternative to traditional edge runtimes. Review our current Web Workers compatibility alongside our active engineering focus.</p>
          </div>
          <div className="runs-grid">
            <div className="runs-card yes">
              <div className="runs-label yes">✓ Fully Supported Today</div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Standard Edge Routers</strong>
                  <small>Run Hono, itty-router, Elysia, and other modern routing libraries with zero code changes.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Web Workers Standard APIs</strong>
                  <small>Full native support for `fetch`, `Request`, `Response`, `URL`, `Blob`, `TextEncoder`, and cryptographic functions.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Real-Time AI Streaming</strong>
                  <small>Optimized pipelines for server-sent events (SSE), chunked transfers, and zero-buffering LLM/AI outputs.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Micro-Thread Actor Workloads</strong>
                  <small>Concurrent tasks, background workers, and scheduled jobs orchestrated by our custom low-overhead native scheduler.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>High-Volume Cryptography</strong>
                  <small>Native Web Crypto API implementations for blistering-fast JWT token verification and OAuth session operations.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Embedded Storage</strong>
                  <small>Blazing-fast embedded SQLite database access via server-client drivers. Perfect for configurations and state cache.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Automated Global TLS</strong>
                  <small>Point your domain and deploy. Automatic, instant HTTPS certification and global routing are provisioned natively.</small>
                </span>
              </div>
            </div>
            <div className="runs-card no">
              <div className="runs-label no">Active Focus & Core Scope</div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">◷</span>
                <span className="run-text">
                  <strong>Edge SSR Frameworks</strong>
                  <small>API routes and Edge runtimes for Next.js, Remix, and SvelteKit deploy today. Full HTML SSR rendering pipelines are in active development.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">◷</span>
                <span className="run-text">
                  <strong>External Database Pools</strong>
                  <small>Direct integration with SQLite and HTTP storage (Upstash/Redis) is live. Lightweight connection pooling for PostgreSQL/MySQL is next.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">◷</span>
                <span className="run-text">
                  <strong>Native WebSockets</strong>
                  <small>Our event-driven compilation pipeline supports the protocol; production-ready WebSocket routing gateways are coming soon.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✗</span>
                <span className="run-text">
                  <strong>What it's NOT: A Node.js Replacement</strong>
                  <small>We do not support legacy, heavy Node.js APIs (such as `fs`, `child_process`, or legacy native addons). DataVec is a sleek, purpose-built alternative for modern Web Workers environments.</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS STRIP */}
      <section className="frameworks z">
        <div className="wrap">
          <h2 className="fw-label">Deploy your modern Web Workers stack to DataVec today</h2>
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
