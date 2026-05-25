export default function Compatibility() {
  return (
    <>
      {/* COMPATIBILITY (WHAT RUNS) */}
      <section className="runs z" id="runs">
        <div className="wrap">
          <div className="section-header-center">
            <span className="sec-eye">Compatibility</span>
            <h2>Current API compatibility and feature support</h2>
            <p className="sec-sub">Review our production-ready integrations alongside the features we are actively building,
              represented with complete technical honesty.</p>
          </div>
          <div className="runs-grid">
            <div className="runs-card yes">
              <div className="runs-label yes">✓ Works today</div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>REST APIs and HTTP endpoints</strong>
                  <small>Hono, itty-router, Elysia. Same code, no changes from Cloudflare Workers.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>HTTP/1.1 and HTTP/2</strong>
                  <small>Full protocol support including server push</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Streaming responses</strong>
                  <small>SSE, chunked transfer, AI output streaming, LLM proxies</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Background jobs and actors</strong>
                  <small>Concurrent workloads via micro-thread model, scheduled tasks</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Web Workers APIs</strong>
                  <small>fetch, Request, Response, URL, Blob, TextEncoder, setTimeout</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Auth endpoints</strong>
                  <small>JWT validation, OAuth callbacks, session handling at high volume</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>SQLite</strong>
                  <small>Embedded database via server-client driver. Good for read-heavy apps and config stores.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✓</span>
                <span className="run-text">
                  <strong>Automatic HTTPS</strong>
                  <small>Point your domain. TLS provisions on deploy.</small>
                </span>
              </div>
            </div>
            <div className="runs-card no">
              <div className="runs-label no">Not yet. In progress.</div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">◷</span>
                <span className="run-text">
                  <strong>WebSockets</strong>
                  <small>The architecture supports it. Implementation coming.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">◷</span>
                <span className="run-text">
                  <strong>Postgres and MySQL drivers</strong>
                  <small>SQLite is live. Postgres is next.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">◷</span>
                <span className="run-text">
                  <strong>SSR frameworks</strong>
                  <small>Next.js, Nuxt, SvelteKit API routes work. Full SSR needs Node internals we're adding.</small>
                </span>
              </div>
              <div className="run-row">
                <span className="run-icon" aria-hidden="true">✗</span>
                <span className="run-text">
                  <strong>Node.js-specific APIs</strong>
                  <small>fs, net, child_process, native addons. DataVec is a high-performance alternative designed for Web Workers, not a general Node.js replacement.</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS STRIP */}
      <section className="frameworks z">
        <div className="wrap">
          <h2 className="fw-label">Web Workers-compatible frameworks that deploy to DataVec today</h2>
          <div className="fw-row">
            <span className="fw-tag featured">Hono</span>
            <span className="fw-tag featured">itty-router</span>
            <span className="fw-tag featured">Elysia</span>
            <span className="fw-tag">Remix (API routes)</span>
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
