export default function Footer() {
  return (
    <>
      {/* FINAL CTA PANEL */}
      <section className="cta-final z">
        <div className="wrap">
          <h2>Upgrade to simple, predictable hosting today</h2>
          <p>
            Deploy standard Web Workers application stacks and execute at native C speed under a stable flat-rate monthly invoice.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a href="mailto:hello@datavec.com?subject=DataVec - get started" className="btn-primary">
              Get started today
            </a>
            <a href="mailto:hello@datavec.com?subject=DataVec - sandbox request" className="btn-ghost">
              Request a test deployment
            </a>
          </div>
          <p className="cta-final-subnote">
            Sandbox sandbox credentials · hello@datavec.com · Founding member pricing locked for active signups
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-inner">
            <div className="foot-brand">
              <a className="nav-logo" href="#">
                <div className="logo-mark">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="8" cy="8" r="2.5" />
                    <line x1="8" y1="1" x2="8" y2="5" />
                    <line x1="8" y1="11" x2="8" y2="15" />
                    <line x1="1" y1="8" x2="5" y2="8" />
                    <line x1="11" y1="8" x2="15" y2="8" />
                  </svg>
                </div>
                <span className="logo-text">Data<em>vec</em></span>
              </a>
              <p>
                Statically compiled edge execution for standard Web Worker scripts. Native speed. Transparent flat pricing.
              </p>
            </div>
            
            <div className="foot-col">
              <h4>Platform</h4>
              <a href="#how">How it works</a>
              <a href="#benchmarks">Benchmarks</a>
              <a href="#runs">Compatibility</a>
              <a href="#pricing">Standard plans</a>
            </div>
            
            <div className="foot-col">
              <h4>Guides</h4>
              <a href="#">Hono deployment</a>
              <a href="#">Elysia routing</a>
              <a href="#">Workers migration</a>
              <a href="#">Web Workers API spec</a>
            </div>
            
            <div className="foot-col">
              <h4>Corporate</h4>
              <a href="mailto:hello@datavec.com">hello@datavec.com</a>
              <a href="#">Terms of service</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
          
          <div className="foot-bottom">
            <p>© 2026 DataVec. All rights reserved.</p>
            <p>
              DataVec is an independent hosting platform. We are not affiliated with Cloudflare, Vercel, AWS, Google, or Microsoft. All registered trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
