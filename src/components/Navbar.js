export default function Navbar() {
  return (
    <header className="z">
      <nav aria-label="Main Navigation">
        <a className="nav-logo" href="#">
          <div className="logo-mark">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="2.5" />
              <line x1="8" y1="1" x2="8" y2="5" />
              <line x1="8" y1="11" x2="8" y2="15" />
              <line x1="1" y1="8" x2="5" y2="8" />
              <line x1="11" y1="8" x2="15" y2="8" />
              <line x1="3.2" y1="3.2" x2="5.8" y2="5.8" />
              <line x1="10.2" y1="10.2" x2="12.8" y2="12.8" />
              <line x1="12.8" y1="3.2" x2="10.2" y2="5.8" />
              <line x1="5.8" y1="10.2" x2="3.2" y2="12.8" />
            </svg>
          </div>
          <span className="logo-text">Data<em>Vec</em></span>
        </a>
        <ul className="nav-links">
          <li><a href="#how">How it works</a></li>
          <li><a href="#runs">What runs</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#calc">Calculator</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="nav-right">
          <a href="mailto:hello@datavec.com" className="btn-nav">Get started</a>
        </div>
      </nav>
    </header>
  );
}
