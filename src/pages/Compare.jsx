import SectionTitle from "../components/SectionTitle";
import Comparison from "../components/Comparison";
import { usePageMeta } from "../utils/seo";

export default function Compare() {
  usePageMeta({
    title: "Compare the Five | Panch Kailash",
    description:
      "Compare Mount Kailash, Adi Kailash, Shrikhand Mahadev, Kinnaur Kailash and Manimahesh Kailash side by side — region, elevation, difficulty, permits, cost and current status.",
    path: "/compare",
  });

  return (
    <div className="container section" style={{ paddingTop: "calc(var(--space-6) + 2rem)" }}>
      <SectionTitle eyebrow="Compare" title="Compare the Five" />
      <Comparison />
    </div>
  );
}
