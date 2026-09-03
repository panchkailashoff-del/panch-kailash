import { useEffect } from "react";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

// Lightweight per-page SEO hook. Avoids pulling in react-helmet-async for
// a five-route site — just sets title/description/OG tags directly.
export function usePageMeta({ title, description, image, path }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    if (image) setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    if (path) {
      const origin = window.location.origin + import.meta.env.BASE_URL.replace(/\/$/, "");
      setCanonical(`${origin}${path}`);
    }
  }, [title, description, image, path]);
}
