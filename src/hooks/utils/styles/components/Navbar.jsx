import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Explore" },
  { to: "/kailash/mount-kailash", label: "Five Kailash" },
  { to: "/planner", label: "Journey Planner" },
  { to: "/compare", label: "Compare" },
  { to: "/safety", label: "Safety" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="navbar__brand">
          Panch Kailash
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " active" : "")
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="navbar__menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      {open && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer__top">
            <span className="navbar__brand">Panch Kailash</span>
            <button
              className="navbar__menu-btn"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <nav className="mobile-drawer__links" aria-label="Mobile primary">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
