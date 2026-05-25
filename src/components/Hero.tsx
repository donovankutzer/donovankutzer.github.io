export default function Hero() {
  return (
    <section className="hero z">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              JavaScript Cloud Platform · Web Workers · Flat Rate
            </div>
            <h1><span className="c1">JavaScript </span> that runs like <span className="c2"> C.</span></h1>
            <p className="hero-sub">A high-performance alternative for teams currently on Cloudflare Workers, Vercel Edge, or Deno. No garbage collector, no cold starts, and one flat monthly rate.</p>
            <div className="migrate-note">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Drop-in compatibility with standard Web Workers APIs, Hono, itty-router, and Elysia.
            </div>
            <div className="btn-group">
              <a href="#pricing" className="btn-primary">Start for $19/month</a>
              <a href="#calc" className="btn-ghost">See what you'd pay</a>
            </div>
            <p className="hero-fine">We don't charge for individual requests or set up hidden bandwidth thresholds, so you
              never have to worry about surprise overage bills. Get in touch at hello@datavec.com.</p>
          </div>
          <div>
            <div className="terminal" aria-label="Terminal showing a deploy command">
              <div className="term-bar">
                <div className="td td-r"></div>
                <div className="td td-y"></div>
                <div className="td td-g"></div>
                <span className="term-title">datavec deploy</span>
              </div>
              <div className="term-body">
                <div><span className="t-dim">// Your existing Web Worker</span></div>
                <div><span className="t-blue">export default</span> <span className="t-w">{"{"}</span></div>
                <div><span className="t-blue">  async</span> <span className="t-w">fetch(request) {"{"}</span></div>
                <div><span className="t-blue">    const</span> <span className="t-w">auth = request.headers.get(</span><span className="t-green">'Authorization'</span><span className="t-w">);</span></div>
                <div><span className="t-blue">    if</span> <span className="t-w">(!auth?.startsWith(</span><span className="t-green">'Bearer '</span><span className="t-w">)) {"{"}</span></div>
                <div><span className="t-blue">      return new</span> <span className="t-w">Response(</span><span className="t-green">'Unauthorized'</span><span className="t-w">, {"{"} status: 401 {"}"});</span></div>
                <div><span className="t-w">    {"}"}</span></div>
                <div><span className="t-blue">    const</span> <span className="t-w">data = </span><span className="t-blue">await</span> <span className="t-w">request.json();</span></div>
                <div><span className="t-blue">    return</span> <span className="t-w">Response.json({"{"} success: </span><span className="t-blue">true</span><span className="t-w">, data {"}"});</span></div>
                <div><span className="t-w">  {"}"}</span></div>
                <div><span className="t-w">{"}"}</span></div>
                <div>{" "}</div>
                <div><span className="t-dim">$ </span><span className="t-w">datavec deploy</span></div>
                <div><span className="t-dim">→ </span><span className="t-blue">DataVec compiling JS → C...</span></div>
                <div><span className="t-dim">→ </span><span className="t-blue">DataVec runtime: 104 KB</span></div>
                <div><span className="t-dim">→ </span><span className="t-blue">TLS provisioned</span></div>
                <div><span className="t-green">✓ Live: https://yourapp.datavec.io</span></div>
                <div>{" "}</div>
                <div><span className="t-dim"># Cold start: </span><span className="t-green">0ms</span><span className="t-dim">
                  Deploy: </span><span className="t-green">3.8s</span></div>
                <div><span className="t-dim"># This month's bill: </span><span className="t-green">$149.00</span><span
                  className="t-dim"> <span className="term-cursor" aria-hidden="true"></span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
