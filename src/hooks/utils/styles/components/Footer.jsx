import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3>Panch Kailash</h3>
            <p>A Journey Across Five Sacred Peaks</p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <Link to="/kailash/mount-kailash">Five Kailash</Link>
            <Link to="/planner">Journey Planner</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/about">About</Link>
            <Link to="/about#sources">Sources</Link>
          </nav>
        </div>

        <div className="footer__meta">
          <p style={{ margin: 0 }}>
            © {year} Panch Kailash · Founder &amp; Creator — Aakash Kainthla
          </p>
          <p className="footer__disclaimer">
            Travel information can change due to weather, government
            restrictions, route conditions and local arrangements. Verify
            current official information before travel.
          </p>
        </div>
      </div>
    </footer>
  );
}
