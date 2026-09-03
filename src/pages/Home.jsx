import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import DestinationCard from "../components/DestinationCard";
import { destinationList, heroImage } from "../data/destinations";
import { usePageMeta } from "../utils/seo";

export default function Home() {
  usePageMeta({
    title: "Panch Kailash | A Journey Across Five Sacred Peaks",
    description:
      "An editorial guide to five Himalayan Kailash peaks — Mount Kailash, Adi Kailash, Shrikhand Mahadev, Kinnaur Kailash and Manimahesh Kailash. Routes, permits, safety and current status.",
    image: heroImage,
    path: "/",
  });

  return (
    <>
      <Hero />

      <section className="section container">
        <SectionTitle
          eyebrow="Introduction"
          title="Five peaks, one Himalayan idea"
          subtitle="Panch Kailash brings together five separate Himalayan destinations, each traditionally regarded as sacred in its own region — from a formally administered pilgrimage to remote, weather-dependent treks. This site is an independent, source-checked planning guide, not an official pilgrimage authority."
        />
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionTitle eyebrow="The Five Sacred Peaks" title="Choose a destination" />
        <div className="grid-cards">
          {destinationList.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionTitle
          eyebrow="Why these five"
          title="Why these five places matter"
          subtitle="Each of the five is traditionally regarded as sacred by pilgrims and local communities in its region — Mount Kailash across several faiths, and the four Indian Himalayan peaks within their own regional traditions. There is no single universally official religious sequence linking all five; any travel order shown on this site is a practical suggestion, not a religious requirement."
        />
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionTitle
          eyebrow="Plan your journey"
          title="Suggested practical journey"
          subtitle="No universally official travel sequence found. Our Journey Planner suggests a practical order based on geography, accessibility, season and current route status — never as an official religious requirement."
        />
        <Link to="/planner" className="btn">Open Journey Planner →</Link>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionTitle
          eyebrow="Compare"
          title="Compare the five"
          subtitle="Region, elevation, difficulty, permits and current status, side by side."
        />
        <Link to="/compare" className="btn btn--ghost">Open Comparison →</Link>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionTitle
          eyebrow="Preparation"
          title="Safety first"
          subtitle="High altitude, changing weather and remote terrain connect all five journeys. Read the Safety Center before you plan."
        />
        <Link to="/safety" className="btn btn--ghost">Open Safety Center →</Link>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionTitle eyebrow="Founder & Creator" title="Aakash Kainthla" />
        <p>
          Panch Kailash is created and maintained by Aakash Kainthla, built as
          a calm, factual, source-checked companion for anyone exploring
          these five Himalayan journeys.
        </p>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <SectionTitle
          eyebrow="Sources & Methodology"
          title="How this information was compiled"
          subtitle="Information is compiled from government tourism departments, district administrations, official pilgrimage authorities and other reliable sources. Seasonal and operational information can change and should be rechecked before travel."
        />
        <Link to="/about#sources" className="btn btn--ghost">Read our sourcing approach →</Link>
      </section>
    </>
  );
}
