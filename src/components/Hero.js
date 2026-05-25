export default function Hero() {
  return (
    <section className="hero z">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Web Workers · MNVKD · JSMX
            </div>
            <h1>Run standard Web Workers at <span className="c1">native C speed</span> on <span className="c2"> flat-rate plans</span></h1>
            <p className="hero-sub">DataVec compiles standard JavaScript code directly into highly optimized native C
              binaries, allowing you to run your Web Worker applications without any interpreter
              overhead. Since our runtime doesn't require a virtual machine for execution, we pass the
              infrastructure savings directly to you through fixed-price plans with no request metering.</p>
            <div className="migrate-note">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Compatible with Hono, itty-router, Elysia, and other standard edge routing libraries out of the box.
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
                <div><span className="t-dim">// Your existing Hono app</span></div>
                <div><span className="t-blue">import</span> <span className="t-w">{"{ Hono }"} </span><span
                  className="t-blue">from</span> <span className="t-w">'hono'</span></div>
                <div><span className="t-blue">const</span> <span className="t-w">app = </span><span className="t-blue">new</span>
                  <span className="t-w">Hono()</span>
                </div>
                <div><span className="t-w">{"app.get('/', (c) => c.text('Hello, world!'))"}</span></div>
                <div><span className="t-blue">export default</span> <span className="t-w">app</span></div>
                <div>{" "}</div>
                <div><span className="t-dim">$ </span><span className="t-w">datavec deploy</span></div>
                <div><span className="t-dim">→ </span><span className="t-blue">JSMX compiling JS → C...</span></div>
                <div><span className="t-dim">→ </span><span className="t-blue">MNVKD runtime: 104 KB</span></div>
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
