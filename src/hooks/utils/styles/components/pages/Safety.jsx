import SectionTitle from "../components/SectionTitle";
import SafetyCard from "../components/SafetyCard";
import { usePageMeta } from "../utils/seo";

export default function Safety() {
  usePageMeta({
    title: "Safety Center | Panch Kailash",
    description:
      "High altitude, weather, terrain, connectivity and emergency guidance for anyone planning a Panch Kailash journey.",
    path: "/safety",
  });

  return (
    <div className="container section" style={{ paddingTop: "calc(var(--space-6) + 2rem)" }}>
      <SectionTitle
        eyebrow="Safety Center"
        title="Prepare before you travel"
        subtitle="High altitude, changing weather and remote terrain connect all five journeys. This section is general guidance, not a substitute for medical advice or official route notices."
      />

      <div className="grid-cards">
        <SafetyCard
          title="High Altitude"
          items={[
            "Acclimatize gradually — do not skip built-in rest days",
            "Stay hydrated and pace yourself, especially above 4,000 m",
            "Learn to recognize altitude sickness warning signs early",
            "Descend if symptoms worsen — do not push through severe symptoms",
          ]}
        />

        <SafetyCard
          title="Weather"
          items={[
            "Himalayan weather can change quickly, even within a single day",
            "Be prepared for rain, snow, cold, strong winds, fog and lightning",
            "Sudden temperature swings are common at altitude",
          ]}
        />

        <SafetyCard
          title="Terrain"
          items={[
            "Steep trails, loose rocks and slippery sections are common",
            "Rockfall and landslides are a real risk on several routes",
            "Stream crossings can become hazardous after rain or snowmelt",
            "Some routes cross glaciers — extra caution and, where advised, local guidance is essential",
          ]}
        />

        <SafetyCard
          title="Connectivity"
          items={[
            "Mobile and internet connectivity can become limited or unavailable on remote routes",
            "Do not rely entirely on mobile connectivity",
            "Carry offline maps, important contacts and downloaded documents",
            "Carry a power bank",
          ]}
        />

        <SafetyCard
          title="Emergency"
          items={[
            "Verify current local emergency contacts before departure",
            "Follow instructions from official Liaison Officers, registration desks or local administration where applicable",
            "Share your itinerary with someone before you depart",
          ]}
        />
      </div>
    </div>
  );
}
