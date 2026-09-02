export default function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <div className="section-title" id={id}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
