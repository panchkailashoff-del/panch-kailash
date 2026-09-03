import useLocalStorage from "../hooks/useLocalStorage";

const CATEGORIES = {
  Clothing: [
    "Thermal layers",
    "Warm jacket",
    "Rain protection",
    "Trekking trousers",
    "Gloves",
    "Woollen socks",
    "Cap",
  ],
  Footwear: ["Trekking shoes", "Extra socks", "Camp footwear"],
  "Health & Personal": [
    "Personal medicines",
    "Basic first-aid supplies",
    "Sunscreen",
    "Lip balm",
    "Sunglasses",
    "Water bottle",
  ],
  "Trek Equipment": [
    "Headlamp / torch",
    "Trekking pole",
    "Backpack",
    "Rain cover",
    "Power bank",
  ],
  Documents: [
    "Government ID",
    "Permits",
    "Registration documents",
    "Required medical certificates",
    "Emergency contacts",
  ],
};

export default function PackingChecklist() {
  const [checked, setChecked] = useLocalStorage("pk_packing_checklist", {});

  const toggle = (item) =>
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));

  const reset = () => setChecked({});

  const totalItems = Object.values(CATEGORIES).flat().length;
  const totalChecked = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--space-3)",
        }}
      >
        <span style={{ fontSize: "0.85rem", color: "var(--color-text-dim)" }}>
          {totalChecked} / {totalItems} packed
        </span>
        <button className="btn btn--ghost" onClick={reset} type="button">
          Reset
        </button>
      </div>

      {Object.entries(CATEGORIES).map(([category, items]) => (
        <div className="checklist-group" key={category}>
          <h3 style={{ fontSize: "0.95rem", marginBottom: "var(--space-2)" }}>
            {category}
          </h3>
          {items.map((item) => {
            const id = `${category}-${item}`.replace(/\s+/g, "-");
            const isChecked = !!checked[item];
            return (
              <label className="checklist-item" key={item} htmlFor={id}>
                <input
                  id={id}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item)}
                />
                <span data-checked={isChecked}>{item}</span>
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
}
