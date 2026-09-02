import { destinationList } from "../data/destinations";
import StatusBanner from "./StatusBanner";

const ROWS = [
  { label: "Region", get: (d) => d.region },
  {
    label: "Elevation",
    get: (d) => (d.elevation.value ? `${d.elevation.value.toLocaleString("en-IN")} ${d.elevation.unit}` : "Unavailable"),
  },
  { label: "Trek distance", get: (d) => d.route.distance },
  { label: "Typical duration", get: (d) => d.route.duration },
  { label: "Difficulty", get: (d) => d.route.difficulty },
  { label: "Best season", get: (d) => d.season.bestMonths.join(", ") || "Not documented" },
  { label: "Permit", get: (d) => d.permits[0] || "None on record" },
  { label: "Connectivity", get: (d) => d.connectivity[0] || "Not documented" },
  {
    label: "Approx. cost",
    get: (d) =>
      d.cost.min && d.cost.max
        ? `₹${d.cost.min.toLocaleString("en-IN")} – ₹${d.cost.max.toLocaleString("en-IN")}`
        : "No reliable current pricing",
  },
  { label: "Major hazards", get: (d) => d.safety[0] || "Not documented" },
];

export default function Comparison() {
  return (
    <div>
      {/* Desktop / wide-viewport table */}
      <div className="compare-table-wrap desktop-only-compare">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              {destinationList.map((d) => (
                <th key={d.id}>{d.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {destinationList.map((d) => (
                  <td key={d.id}>{row.get(d)}</td>
                ))}
              </tr>
            ))}
            <tr>
              <th scope="row">Current status</th>
              {destinationList.map((d) => (
                <td key={d.id}>
                  <StatusBanner status={{ ...d.status, notes: null, source: null }} compact />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards, never a shrunk unreadable table */}
      <div className="compare-cards mobile-only-compare">
        {destinationList.map((d) => (
          <div key={d.id} className="dest-card" style={{ padding: "var(--space-3)" }}>
            <h3>{d.name}</h3>
            {ROWS.map((row) => (
              <div className="compare-row" key={row.label}>
                <span className="compare-row__label">{row.label}</span>
                <span>{row.get(d)}</span>
              </div>
            ))}
            <div style={{ marginTop: "var(--space-2)" }}>
              <StatusBanner status={{ ...d.status, notes: null, source: null }} compact />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .mobile-only-compare { display: block; }
        .desktop-only-compare { display: none; }
        @media (min-width: 900px) {
          .mobile-only-compare { display: none; }
          .desktop-only-compare { display: block; }
        }
      `}</style>
    </div>
  );
}
