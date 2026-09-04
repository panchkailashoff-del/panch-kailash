import { useState, useEffect, useRef, useCallback } from "react";
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
  const textOffset = reducedMotion ? 0 : scrollY * 0.4;

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
      {/* Full-bleed background image, same as before */}
      <img
        className="hero__image"
        src={heroImage}
        alt="Panoramic view of the Himalayas showing the five Panch Kailash peaks"
        fetchpriority="high"
        style={{ transform: `translateY(${bgOffset}px) scale(1.18)` }}
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

      <div className="hero__portal-wrap">
        <PanoramaPortal image={heroImage} />
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

/**
 * A circular "portal" showing a wide panorama. Drag or swipe
 * left/right (mouse or touch) to pan the image inside the circle.
 */
function PanoramaPortal({ image }) {
  const wrapRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0);
  const dragState = useRef({ dragging: false, startX: 0, startOffset: 0 });

  // The inner image is rendered wider than the circle so there is
  // room to pan. maxPan is recalculated whenever the circle resizes.
  const [maxPan, setMaxPan] = useState(0);
  const IMAGE_WIDTH_MULTIPLIER = 2.4;

  useEffect(() => {
    const updateMaxPan = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.offsetWidth;
      setMaxPan((w * IMAGE_WIDTH_MULTIPLIER - w) / 2);
    };
    updateMaxPan();
    window.addEventListener("resize", updateMaxPan);
    return () => window.removeEventListener("resize", updateMaxPan);
  }, []);

  const clamp = useCallback(
    (val) => Math.min(maxPan, Math.max(-maxPan, val)),
    [maxPan]
  );

  const onPointerDown = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragState.current.startOffset = offsetX;
    wrapRef.current?.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return;
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = clientX - dragState.current.startX;
    setOffsetX(clamp(dragState.current.startOffset + delta));
  };

  const endDrag = () => {
    dragState.current.dragging = false;
  };

  return (
    <div
      className="hero__portal"
      ref={wrapRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      role="img"
      aria-label="Draggable panorama of the Panch Kailash peaks"
    >
      <img
        className="hero__portal-image"
        src={image}
        alt=""
        draggable={false}
        style={{
          width: `${IMAGE_WIDTH_MULTIPLIER * 100}%`,
          transform: `translateX(calc(-50% + ${offsetX}px))`,
        }}
      />
      <span className="hero__portal-hint">← Swipe to Explore →</span>
    </div>
  );
}
