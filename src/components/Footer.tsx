export default function Footer() {
  return (
    <>
      {/* FINAL CTA SECTION */}
      <section className="cta-final z">
        <div className="wrap section-header-center small-margin">
          <h2>Upgrade to simple, predictable hosting today without usage metering constraints</h2>
          <p>Deploy standard Web Workers code to run at native speed under a transparent, fixed monthly plan.</p>
          <div className="btn-group">
            <a href="mailto:hello@datavec.com?subject=DataVec - get started" className="btn-primary">Get started today</a>
            <a href="mailto:hello@datavec.com?subject=DataVec - test deployment" className="btn-ghost">Request a test deployment</a>
          </div>
          <p className="cta-final-subnote">No credit card for the test · hello@datavec.com · Founding pricing locked for first 50 customers</p>
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
                <span className="logo-text">Data<em>Vec</em></span>
              </a>
              <p>Web Workers hosting. Native C speed. Flat rate billing.</p>
            </div>
            <div className="foot-col">
              <h4>Product</h4>
              <a href="#how">How it works</a>
              <a href="#runs">Compatibility</a>
              <a href="#pricing">Pricing</a>
              <a href="#calc">Calculator</a>
            </div>
            <div className="foot-col">
              <h4>Developers</h4>
              <a href="#">Hono guide</a>
              <a href="#">itty-router guide</a>
              <a href="#">Migration from Workers</a>
              <a href="#">Web Workers docs</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="mailto:hello@datavec.com">hello@datavec.com</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="foot-bottom">
            <p>© 2026 DataVec. All rights reserved.</p>
            <p>Not affiliated with Cloudflare, Vercel, AWS, Google, or Microsoft. All trademarks belong to their respective owners.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
