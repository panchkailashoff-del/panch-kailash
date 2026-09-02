import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hotspot from "./Hotspot";
import { destinations, heroHotspots, heroImage } from "../data/destinations";
import useReducedMotion from "../hooks/useReducedMotion";

export default function Hero() {
  const [activeId, setActiveId] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  // Short, fast cinematic fade before route change — not a loading
  // animation, just enough to avoid an abrupt cut to the next page.
  const handleNavigate = (id) => {
    if (reducedMotion) {
      navigate(`/kailash/${id}`);
      return;
    }
    setTransitioning(true);
    setTimeout(() => navigate(`/kailash/${id}`), 260);
  };

  return (
    <section className="hero" aria-label="Panch Kailash panorama">
      <img
        className="hero__image"
        src={heroImage}
        alt="Panoramic view of the Himalayas showing the five Panch Kailash peaks"
        fetchpriority="high"
      />
      <div className="hero__gradient" aria-hidden="true" />

      <div className="hotspot-layer" aria-label="Five sacred peaks">
        {heroHotspots.map(({ id, x, y }) => (
          <Hotspot
            key={id}
            destination={destinations[id]}
            x={x}
            y={y}
            active={activeId === id}
            onActivate={setActiveId}
            onNavigate={handleNavigate}
          />
        ))}
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">Panch Kailash</span>
        <h1 className="hero__title">A Journey Across Five Sacred Peaks</h1>
        <p className="hero__tagline">
          An editorial guide to five Himalayan Kailash peaks — routes,
          permits, safety and current status, verified against official
          sources.
        </p>
        <p className="hero__founder">Founder &amp; Creator — Aakash Kainthla</p>
        <p className="hero__instruction">Explore the Five Sacred Peaks</p>
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-indicator" />
        </div>
      </div>

      {transitioning && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "#0c0c0d",
            zIndex: 500,
            opacity: transitioning ? 1 : 0,
            transition: "opacity 260ms ease",
          }}
        />
      )}
    </section>
  );
}
