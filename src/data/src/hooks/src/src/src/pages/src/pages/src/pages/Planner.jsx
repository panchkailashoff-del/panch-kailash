import SectionTitle from "../components/SectionTitle";
import JourneyPlanner from "../components/JourneyPlanner";
import CostCalculator from "../components/CostCalculator";
import PackingChecklist from "../components/PackingChecklist";
import { usePageMeta } from "../utils/seo";

export default function Planner() {
  usePageMeta({
    title: "Journey Planner | Panch Kailash",
    description:
      "Plan your Panch Kailash journey — compare durations, difficulty, permits and estimated costs, calculate your own budget, and track your packing checklist.",
    path: "/planner",
  });

  return (
    <div className="container section" style={{ paddingTop: "calc(var(--space-6) + 2rem)" }}>
      <SectionTitle
        eyebrow="Journey Planner"
        title="Plan your Panch Kailash journey"
        subtitle="An informational planning tool — not a live booking system."
      />
      <JourneyPlanner />

      <div style={{ marginTop: "var(--space-6)" }}>
        <SectionTitle eyebrow="Cost Calculator" title="Estimate your budget" />
        <CostCalculator />
      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <SectionTitle eyebrow="Packing" title="Packing checklist" subtitle="Saved automatically on this device." />
        <PackingChecklist />
      </div>
    </div>
  );
}
