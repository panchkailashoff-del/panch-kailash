import { useState } from "react";
import { useNavigate } from "react-router-dom";

// A single interactive marker on the homepage panorama. Position is driven
// entirely by percentage x/y from data/destinations.js so it stays correct
// across every screen size without any per-device logic here.
export default function Hotspot({ destination, x, y, active, onActivate, onNavigate }) {
  const [localOpen, setLocalOpen] = useState(false);
  const navigate = useNavigate();
  const open = active ?? localOpen;

  const show = () => (onActivate ? onActivate(destination.id) : setLocalOpen(true));
  const hide = () => (onActivate ? onActivate(null) : setLocalOpen(false));

  const go = () => {
    if (onNavigate) {
      onNavigate(destination.id);
    } else {
      navigate(`/kailash/${destination.id}`);
    }
  };

  return (
    <button
      type="button"
      className="hotspot"
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-expanded={open}
      aria-label={`${destination.name}, ${destination.region}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onClick={(e) => {
        // Mobile/touch: first tap reveals the card, second tap (or a tap
        // while already open) navigates — avoids "fat finger" mis-navigation.
        if (!open) {
          e.preventDefault();
          show();
        } else {
          go();
        }
      }}
    >
      <span className="hotspot__marker" aria-hidden="true" />
      <span className="hotspot__card" role="tooltip">
        <span className="hotspot__name">{destination.name}</span>
        <span className="hotspot__region">{destination.region}</span>
        <span
          className="hotspot__cta"
          role="link"
          onClick={(e) => {
            e.stopPropagation();
            go();
          }}
        >
          Explore Kailash →
        </span>
      </span>
    </button>
  );
}
