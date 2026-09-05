import { Link, useParams } from "react-router-dom";
import { getDestination } from "../data/destinations";
import StatusBanner from "../components/StatusBanner";
import SectionTitle from "../components/SectionTitle";
import FAQ from "../components/FAQ";
import PanoramaViewer from "../components/PanoramaViewer";
import NotFound from "./NotFound";
import { usePageMeta } from "../utils/seo";

// Fields that render as bullet lists in the info grid — declared once here
// so the layout stays identical across all five destinations while the
// underlying content differs per destinations.js.
const LIST_SECTIONS = [
  ["Access / Transport", "access"],
  ["Permits / Registration", "permits"],
  ["Accommodation", "accommodation"],
  ["Connectivity", "connectivity"],
  ["Medical", "medical"],
  ["Emergency", "emergency"],
  ["Major Hazards", "safety"],
  ["Packing Checklist", "packing"],
];

export default function DestinationPage() {
  const { id } = useParams();
  const destination = getDestination(id);

  usePageMeta({
    title: destination ? `${destination.name} | Panch Kailash` : "Destination not found | Panch Kailash",
    description: destination?.overview,
    image: destination?.image,
    path: `/kailash/${id}`,
  });

  if (!destination) return <NotFound />;

  const {
    name, region, image, tagline, overview, significance,
    route, elevation, season, cost, status, sources, faqNote,
  } = destination;

  return (
    <article>
      <section className="dest-hero">
        <img className="dest-hero__img" src={image} alt={`${name}, ${region}`} loading="eager" fetchpriority="high" />
        <div className="dest-hero__gradient" aria-hidden="true" />
        <div className="dest-hero__content">
          <span className="dest-hero__region">{region}</span>
          <h1>{name}</h1>
          <p className="dest-hero__tagline">{tagline}</p>
          <StatusBanner status={status} />
        </div>
      </section>

      <div className="container section">
        <p className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/kailash/mount-kailash">Five Kailash</Link> / {name}
        </p>

        <SectionTitle eyebrow="Overview" title={`About ${name}`} />
        <p>{overview}</p>

        <SectionTitle eyebrow="Significance" title="Sacred / cultural significance" />
        <p>{significance}</p>
        {faqNote && <p style={{ fontSize: "0.88rem", color: "var(--color-text-faint)" }}>{faqNote}</p>}

        <SectionTitle eyebrow="Route" title="Route & practical facts" />
        <div className="info-grid">
          <div className="info-block">
            <h3>Route</h3>
            <ul>
              <li>Start: {route.startPoint}</li>
              <li>End: {route.endpoint}</li>
              <li>Distance: {route.distance}</li>
              <li>Duration: {route.duration}</li>
              <li>Difficulty: {route.difficulty}</li>
            </ul>
          </div>
          <div className="info-block">
            <h3>Elevation & Season</h3>
            <ul>
              <li>
                Elevation:{" "}
                {elevation.value ? `${elevation.value.toLocaleString("en-IN")} ${elevation.unit}` : "Not verified"}{" "}
                ({elevation.confidence})
              </li>
              <li>Best months: {season.bestMonths.join(", ") || "Not documented"}</li>
              {season.avoidMonths.length > 0 && <li>Generally avoid: {season.avoidMonths.join(", ")}</li>}
              <li>{season.note}</li>
            </ul>
          </div>
        </div>

        <div className="info-grid">
          {LIST_SECTIONS.map(([title, key]) => {
            const items = destination[key];
            if (!items || items.length === 0) return null;
            return (
              <div className="info-block" key={key}>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <SectionTitle eyebrow="Cost" title="Estimated cost" />
        <p>
          {cost.min && cost.max
            ? `₹${cost.min.toLocaleString("en-IN")} – ₹${cost.max.toLocaleString("en-IN")} per person`
            : "No reliable current pricing available."}{" "}
          {cost.note}
        </p>
        <p className="disclaimer" style={{ marginTop: 0 }}>
          Costs are approximate planning estimates and can change with
          season, transport, permits, accommodation, weather and
          government/local arrangements. Verify current prices before
          booking.
        </p>

        <SectionTitle eyebrow="360° View" title="Explore in 360°" subtitle="Drag to look around · Scroll to zoom" />
        <PanoramaViewer image={image} alt={`${name} 360° panorama`} />

        <div style={{ marginTop: "var(--space-6)" }}>
          <SectionTitle eyebrow="FAQ" title="Frequently asked" />
          <FAQ
            items={[
              { q: `Is ${name} currently open for travel?`, a: `${status.label}. ${status.notes || ""}`.trim() },
              { q: "Where should I verify current information?", a: `${status.source}. Always check the latest official notice before finalizing travel plans.` },
              { q: "What should I pack?", a: destination.packing.join(", ") || "See the Safety Center for general Himalayan trekking guidance." },
            ]}
          />
        </div>

        <div style={{ marginTop: "var(--space-6)" }}>
          <SectionTitle eyebrow="Sources & Verification" title="Where this information comes from" />
          <div className="source-list">
            {sources.map((s) => (
              <div className="source-entry" key={s.organization}>
                <strong>{s.organization}</strong> — {s.covers}. Verified {s.verified} ({s.type}).
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
