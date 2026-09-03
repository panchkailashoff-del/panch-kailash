import { useMemo, useState } from "react";
import { destinationList } from "../data/destinations";
import useLocalStorage from "../hooks/useLocalStorage";

const FIELDS = [
  { key: "transport", label: "Transport (₹)" },
  { key: "accommodation", label: "Accommodation (₹)" },
  { key: "food", label: "Food (₹)" },
  { key: "permits", label: "Permit / registration (₹)" },
  { key: "guide", label: "Guide / local support (₹)" },
  { key: "misc", label: "Miscellaneous (₹)" },
  { key: "buffer", label: "Emergency buffer (₹)" },
];

const EMPTY = FIELDS.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {});

export default function CostCalculator() {
  const [destinationId, setDestinationId] = useLocalStorage(
    "pk_calc_destination",
    destinationList[0].id
  );
  const [people, setPeople] = useLocalStorage("pk_calc_people", 2);
  const [amounts, setAmounts] = useState(EMPTY);

  const total = useMemo(
    () =>
      FIELDS.reduce((sum, f) => sum + (parseFloat(amounts[f.key]) || 0), 0),
    [amounts]
  );

  const perPerson = people > 0 ? total / people : total;

  return (
    <div className="result-box" style={{ marginTop: "var(--space-3)" }}>
      <div className="form-grid" style={{ marginBottom: "var(--space-3)" }}>
        <div className="field">
          <label htmlFor="calc-dest">Destination</label>
          <select
            id="calc-dest"
            value={destinationId}
            onChange={(e) => setDestinationId(e.target.value)}
          >
            {destinationList.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="calc-people">Number of travelers</label>
          <input
            id="calc-people"
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(Math.max(1, Number(e.target.value) || 1))}
          />
        </div>
      </div>

      <div className="form-grid">
        {FIELDS.map((f) => (
          <div className="field" key={f.key}>
            <label htmlFor={`calc-${f.key}`}>{f.label} · Your estimate</label>
            <input
              id={`calc-${f.key}`}
              type="number"
              min="0"
              placeholder="0"
              value={amounts[f.key]}
              onChange={(e) =>
                setAmounts((prev) => ({ ...prev, [f.key]: e.target.value }))
              }
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "var(--space-3)" }}>
        <div className="result-row">
          <span>Estimated total (your estimate)</span>
          <strong>₹{Math.round(total).toLocaleString("en-IN")}</strong>
        </div>
        <div className="result-row">
          <span>Estimated per person</span>
          <strong>₹{Math.round(perPerson).toLocaleString("en-IN")}</strong>
        </div>
      </div>

      <p className="disclaimer">
        Figures above are your own estimates, not confirmed prices. Costs are
        approximate planning estimates and can change with season, transport,
        permits, accommodation, weather and government/local arrangements.
        Verify current prices before booking.
      </p>
    </div>
  );
}
