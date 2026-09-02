import { Link } from "react-router-dom";
import { usePageMeta } from "../utils/seo";

export default function NotFound() {
  usePageMeta({
    title: "Destination not found | Panch Kailash",
    description: "This page could not be found.",
  });

  return (
    <div
      className="container section"
      style={{ paddingTop: "calc(var(--space-6) + 3rem)", textAlign: "center" }}
    >
      <h1>Destination not found</h1>
      <p style={{ margin: "0 auto var(--space-4)" }}>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/kailash/mount-kailash" className="btn">
        Explore the Five Kailash
      </Link>
    </div>
  );
}
