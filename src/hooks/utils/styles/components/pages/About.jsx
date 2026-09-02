import SectionTitle from "../components/SectionTitle";
import FAQ from "../components/FAQ";
import { destinationList } from "../data/destinations";
import { usePageMeta } from "../utils/seo";

const FAQ_ITEMS = [
  {
    q: "What are the five Panch Kailash destinations?",
    a: "Mount Kailash (Kailash Mansarovar), Adi Kailash, Shrikhand Mahadev, Kinnaur Kailash and Manimahesh Kailash.",
  },
  {
    q: "Is there an official Panch Kailash travel sequence?",
    a: "No universally official sequence was found in our research. Any order shown on this site is labelled a Suggested Practical Journey, based on geography, accessibility, season and current status — never a religious requirement.",
  },
  {
    q: "Which Kailash is easiest to access?",
    a: "Adi Kailash and Manimahesh Kailash involve the most road travel relative to trekking distance, though both still require permits, registration and altitude awareness.",
  },
  {
    q: "Which journeys involve trekking?",
    a: "All five involve some trekking; Shrikhand Mahadev and Kinnaur Kailash are the most demanding multi-day treks covered on this site.",
  },
  {
    q: "Which destinations require permits?",
    a: "Adi Kailash requires an Inner Line Permit. Mount Kailash requires Government of India registration/selection. Manimahesh Kailash requires mandatory registration during its official yatra window. Check each destination page for current requirements.",
  },
  {
    q: "What is the best season?",
    a: "It varies by destination — see each destination's Best Season and the Compare page. Most routes have a narrow summer/monsoon-shoulder window.",
  },
  {
    q: "How much does a trip approximately cost?",
    a: "Costs vary widely by destination, trip style and current official packages. Use the Journey Planner's cost calculator, and treat all figures as ranges, not fixed prices.",
  },
  {
    q: "Is mobile connectivity available?",
    a: "Generally limited to unavailable on the trekking sections of all five routes. Carry offline maps and inform someone of your itinerary.",
  },
  {
    q: "What should I pack?",
    a: "See the packing checklist in the Journey Planner and each destination's packing list — layered warm clothing, sturdy footwear, basic first aid and required documents are common to all five.",
  },
  {
    q: "What happens if the route is closed?",
    a: "Two of the five — Shrikhand Mahadev and Kinnaur Kailash — currently show a suspended status due to unsafe route conditions. Always check the destination's Current Status banner before planning.",
  },
  {
    q: "Where should current information be verified?",
    a: "Each destination page lists its official sources under Sources & Verification, along with a last-verified date.",
  },
];

export default function About() {
  usePageMeta({
    title: "About | Panch Kailash",
    description:
      "What Panch Kailash is, how its information is sourced and verified, and why current status should always be checked before travel.",
    path: "/about",
  });

  return (
    <div className="container section" style={{ paddingTop: "calc(var(--space-6) + 2rem)" }}>
      <SectionTitle eyebrow="About" title="About Panch Kailash" />
      <p>
        Panch Kailash is an independent, editorial guide to five Himalayan
        Kailash destinations. It exists to give travelers a calm, factual
        starting point — routes, permits, safety and current status — before
        they consult official sources directly.
      </p>
      <p>
        The site does not manage bookings, does not represent any government
        authority, and does not claim a single universal religious framework
        connects all five destinations. Where beliefs are described, they are
        presented as traditions held by pilgrims and local communities, not
        as established fact.
      </p>

      <SectionTitle eyebrow="Founder & Creator" title="Aakash Kainthla" />
      <p>Founder &amp; Creator of Panch Kailash.</p>

      <SectionTitle eyebrow="Sources & Verification" title="Sources & Methodology" id="sources" />
      <p>
        Information is compiled from government tourism departments, district
        administrations, official pilgrimage authorities and other reliable
        sources. Seasonal and operational information can change and should
        be rechecked before travel.
      </p>
      <div className="source-list">
        {destinationList.map((d) => (
          <div className="source-entry" key={d.id}>
            <strong>{d.name}</strong>:{" "}
            {d.sources.map((s) => s.organization).join(" · ")} — last
            verified {d.status.lastVerified}.
          </div>
        ))}
      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
        <FAQ items={FAQ_ITEMS} />
      </div>
    </div>
  );
}
