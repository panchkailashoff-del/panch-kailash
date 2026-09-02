export default function SafetyCard({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="safety-card">
      <h3 style={{ marginBottom: "0.8rem", color: "var(--color-accent)", fontSize: "1rem" }}>
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
