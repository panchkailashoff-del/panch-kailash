import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { destinationList } from "../data/destinations";
import StatusBanner from "./StatusBanner";
import useLocalStorage from "../hooks/useLocalStorage";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TRIP_STYLES = ["Budget", "Standard", "Comfort"];
const EXPERIENCE_LEVELS = ["First high-altitude trek", "Some trekking experience", "Experienced trekker"];

export default function JourneyPlanner() {
  const [destinationId, setDestinationId] = useLocalStorage(
    "pk_planner_destination",
    destinationList[0].id
  );
  const [month, setMonth] = useLocalStorage("pk_planner_month", "September");
  const [travelers, setTravelers] = useLocalStorage("pk_planner_travelers", 2);
  const [style, setStyle] = useLocalStorage("pk_planner_style", "Standard");
  const [experience, setExperience] = useLocalStorage("pk_planner_experience", EXPERIENCE_LEVELS[0]);

  const destination = useMemo(
    () => destinationList.find((d) => d.id === destinationId),
    [destinationId]
  );

  const monthNote = useMemo(() => {
    if (!destination) return null;
    if (destination.season.bestMonths.includes(month)) {
      return { text: "Generally a suitable month for this destination.", tone: "open" };
    }
    if (destination.season.avoidMonths.includes(month)) {
      return { text: "Generally not recommended — check current conditions before planning.", tone: "warning" };
    }
    return { text: "Shoulder season — verify current conditions before planning.", tone: "seasonal" };
  }, [destination, month]);

  return (
    <div className="result-box">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="plan-dest">Destination</label>
          <select id="plan-dest" value={destinationId} onChange={(e) => setDestinationId(e.target.value)}>
            {destinationList.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="plan-month">Travel month</label>
          <select id="plan-month" value={month} onChange={(e) => setMonth(e.target.value)}>
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="plan-travelers">Number of travelers</label>
          <input
            id="plan-travelers"
            type="number"
            min="1"
            value={travelers}
            onChange={(e) => setTravelers(Math.max(1, Number(e.target.value) || 1))}
          />
        </div>

        <div className="field">
          <label htmlFor="plan-style">Trip style</label>
          <select id="plan-style" value={style} onChange={(e) => setStyle(e.target.value)}>
            {TRIP_STYLES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="plan-experience">Trekking experience</label>
          <select id="plan-experience" value={experience} onChange={(e) => setExperience(e.target.value)}>
            {EXPERIENCE_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
        </div>
      </div>

      {destination && (
        <div style={{ marginTop: "var(--space-4)" }}>
          <h3 style={{ marginBottom: "var(--space-2)" }}>{destination.name} — planning snapshot</h3>

          <div className="result-row"><span>Duration</span><strong>{destination.route.duration}</strong></div>
          <div className="result-row"><span>Difficulty</span><strong>{destination.route.difficulty}</strong></div>
          <div className="result-row">
            <span>Approx. cost</span>
            <strong>
              {destination.cost.min && destination.cost.max
                ? `₹${destination.cost.min.toLocaleString("en-IN")} – ₹${destination.cost.max.toLocaleString("en-IN")}`
                : "No reliable current pricing"}
            </strong>
          </div>
          <div className="result-row"><span>Permit / registration</span><strong>{destination.permits[0] || "None on record"}</strong></div>
          <div className="result-row"><span>Connectivity</span><strong>{destination.connectivity[0] || "Not documented"}</strong></div>

          {monthNote && (
            <p style={{ marginTop: "var(--space-2)", fontSize: "0.88rem" }}>
              <strong>{month}:</strong> {monthNote.text}
            </p>
          )}

          <div style={{ marginTop: "var(--space-2)" }}>
            <StatusBanner status={destination.status} compact />
          </div>

          <div style={{ marginTop: "var(--space-3)" }}>
            <Link to={`/kailash/${destination.id}`} className="btn btn--ghost">
              View full destination guide →
            </Link>
          </div>
        </div>
      )}

      <p className="disclaimer">
        Planning estimates only. This tool does not provide live booking
        availability. Verify current official information before travel.
      </p>
    </div>
  );
}
