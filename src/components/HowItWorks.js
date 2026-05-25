export default function HowItWorks() {
  return (
    <section className="how z" id="how">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">How it works</span>
          <h2>Deploy with standard JavaScript APIs while serving high-speed native binaries</h2>
          <p className="sec-sub">You do not have to learn a proprietary framework or write complex configuration files,
            because any application targeting standard Web Workers specifications will execute seamlessly on our
            compiled infrastructure.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-n">01</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Write standard Web Workers code</h3>
            <p>Build your endpoints using standard APIs such as fetch, Request, and Response. Popular routing libraries
              like Hono, Elysia, and itty-router are fully supported out of the box without any special configuration.
            </p>
          </div>
          <div className="step">
            <div className="step-n">02</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <h3>Compile natively with JSMX</h3>
            <p>Our JSMX compilation toolchain translates your JavaScript directly into native C code during deployment,
              eliminating virtual machine overhead, JIT compiler lag, and garbage collection pauses.</p>
          </div>
          <div className="step">
            <div className="step-n">03</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx={2} />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>Serve requests using MNVKD</h3>
            <p>Requests are handled by our ultra-compact 104 KB native execution layer which manages routing, TLS
              handshakes, HTTP protocols, and database bindings with zero cold start delays.</p>
          </div>
          <div className="step">
            <div className="step-n">04</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="1" y="4" width={22} height={16} rx={2} />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <h3>Rely on flat-rate billing</h3>
            <p>Enjoy stable monthly operating expenses because your invoice remains the same even during massive traffic
              spikes, giving you absolute predictability for your production budgets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
