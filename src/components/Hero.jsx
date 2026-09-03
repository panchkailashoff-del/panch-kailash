import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hotspot from "./Hotspot";
import { destinations, heroHotspots, heroImage } from "../data/destinations";
import useReducedMotion from "../hooks/useReducedMotion";

export default function Hero() {
  const [activeId, setActiveId] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const FADE_DISTANCE = 350;
  const contentOpacity = reducedMotion
    ? 1
    : Math.max(0, 1 - scrollY / FADE_DISTANCE);

  const bgOffset = reducedMotion ? 0 : scrollY * 0.15;
  const textOffset = reducedMotion ? 0 : scrollY * 0.55;
  const maskOffset = reducedMotion ? 0 : scrollY * 0.08;

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
        style={{ transform: `translateY(${bgOffset}px) scale(1.08)` }}
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

      <div
        className="hero__content"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${-textOffset}px)`,
          pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
        }}
      >
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

      {/* Always visible from page load — gives the permanent
          "text tucked behind the mountains" look. */}
      <div
        className="hero__foreground-peaks"
        style={{
          transform: `translateY(${-maskOffset}px) scale(1.08)`,
        }}
        aria-hidden="true"
      >
        <img src={heroImage} alt="" />
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
