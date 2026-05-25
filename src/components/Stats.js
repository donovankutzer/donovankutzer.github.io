export default function Stats() {
  return (
    <>
      {/* COMPATIBILITY STRIP */}
      <div className="compat z">
        <div className="wrap">
          <div className="compat-inner">
            <div className="compat-label">Runs your existing code from</div>
            <div className="compat-items">
              <span className="compat-item"><strong>Cloudflare Workers</strong></span>
              <span className="compat-item"><strong>Deno Deploy</strong></span>
              <span className="compat-item"><strong>Vercel Edge</strong></span>
              <span className="compat-item"><strong>Fastly Compute</strong></span>
              <span className="compat-item"><strong>Netlify Edge</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="stats z">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-val">0ms</div>
              <div className="stat-label">Cold start time</div>
            </div>
            <div className="stat">
              <div className="stat-val">300K+</div>
              <div className="stat-label">Requests/sec per instance</div>
            </div>
            <div className="stat">
              <div className="stat-val">104KB</div>
              <div className="stat-label">MNVKD runtime size</div>
            </div>
            <div className="stat">
              <div className="stat-val g">Flat</div>
              <div className="stat-label">Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
