// Reusable status indicator used on destination cards, destination heroes
// and the Compare page. `type` drives the color treatment only — the
// wording always comes from destination data, never hardcoded here.
const TYPE_CLASS = {
  open: "status-banner--open",
  seasonal: "status-banner--seasonal",
  verify: "status-banner--verify",
  suspended: "status-banner--suspended",
  closed: "status-banner--closed",
  warning: "status-banner--warning",
};

export default function StatusBanner({ status, compact = false }) {
  if (!status || !status.label) return null;

  const cls = TYPE_CLASS[status.type] || "status-banner--verify";

  return (
    <div className={`status-banner ${cls}`} role="status">
      <span className="status-banner__label">{status.label}</span>
      {status.lastVerified && (
        <span className="status-banner__meta">
          Last verified: {formatDate(status.lastVerified)}
        </span>
      )}
      {status.source && !compact && (
        <span className="status-banner__meta">Source: {status.source}</span>
      )}
      {status.notes && !compact && (
        <p className="status-banner__notes">{status.notes}</p>
      )}
    </div>
  );
}

function formatDate(iso) {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
