// Reusable status indicator used on destination cards, destination heroes
// and the Compare page. `type` drives the color treatment only — the
// wording always comes from destination data, never hardcoded here.
//
// STALE-DATE CHECK: this is the one piece of wording that IS generated
// here rather than from destination data — it's a freshness signal about
// the data itself, not destination content, so it's computed fresh on
// every render from today's date vs. lastVerified.
const TYPE_CLASS = {
  open: "status-banner--open",
  seasonal: "status-banner--seasonal",
  verify: "status-banner--verify",
  suspended: "status-banner--suspended",
  closed: "status-banner--closed",
  warning: "status-banner--warning",
};

const STALE_THRESHOLD_DAYS = 30;

export default function StatusBanner({ status, compact = false }) {
  if (!status || !status.label) return null;

  const cls = TYPE_CLASS[status.type] || "status-banner--verify";
  const daysSince = status.lastVerified ? getDaysSince(status.lastVerified) : null;
  const isStale = daysSince !== null && daysSince > STALE_THRESHOLD_DAYS;

  return (
    <div className={`status-banner ${cls} ${isStale ? "status-banner--stale" : ""}`} role="status">
      <span className="status-banner__label">{status.label}</span>

      {status.lastVerified && (
        <span className="status-banner__meta">
          Last verified: {formatDate(status.lastVerified)}
          {isStale && (
            <strong className="status-banner__stale-flag">
              {" "}· Needs re-verification ({daysSince}d ago)
            </strong>
          )}
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

function getDaysSince(iso) {
  try {
    const then = new Date(iso + "T00:00:00");
    const now = new Date();
    const diffMs = now.setHours(0, 0, 0, 0) - then.setHours(0, 0, 0, 0);
    return Math.round(diffMs / (1000 * 60 * 60 * 24));
  } catch {
    return null;
  }
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
