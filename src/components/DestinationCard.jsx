import { Link } from "react-router-dom";
import StatusBanner from "./StatusBanner";

export default function DestinationCard({ destination }) {
  const { id, name, region, image, overview, elevation, status } = destination;

  return (
    <Link to={`/kailash/${id}`} className="dest-card">
      <div className="dest-card__image-wrap">
        <img
          className="dest-card__image"
          src={image}
          alt={`${name}, ${region}`}
          loading="lazy"
        />
      </div>
      <div className="dest-card__body">
        <span className="dest-card__region">{region}</span>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {elevation?.value && (
          <span className="dest-card__region">
            {elevation.value.toLocaleString("en-IN")} {elevation.unit} ·{" "}
            {elevation.confidence === "verified" ? "Verified" : "Approximate"}
          </span>
        )}
        <p className="dest-card__desc">{truncate(overview, 120)}</p>
        {status?.type === "suspended" && (
          <StatusBanner status={{ ...status, notes: null, source: null }} compact />
        )}
        <span className="dest-card__cta">Explore →</span>
      </div>
    </Link>
  );
}

function truncate(text, max) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max).trim() + "…" : text;
}
