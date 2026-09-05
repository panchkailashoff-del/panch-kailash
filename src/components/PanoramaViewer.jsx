import { useEffect, useRef, useState } from "react";

const PANNELLUM_JS_URL =
  "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.min.js";
const PANNELLUM_CSS_URL =
  "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";

let scriptPromise = null;
function loadPannellum() {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    if (window.pannellum) return resolve();

    // CSS (only inject once)
    if (!document.querySelector('link[data-pannellum]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = PANNELLUM_CSS_URL;
      link.setAttribute("data-pannellum", "true");
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = PANNELLUM_JS_URL;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("pannellum failed to load"));
    document.head.appendChild(script);
  });
  return scriptPromise;
}

// Real 360° equirectangular panorama viewer. Loads Pannellum from a CDN
// ONLY when this destination has a panorama image AND the section is near
// the viewport — same lazy-load contract as the old ModelViewer. Falls back
// to a plain static image if the panorama fails to load or none is set.
export default function PanoramaViewer({ image, alt }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [status, setStatus] = useState(image ? "loading" : "fallback");

  useEffect(() => {
    if (!image || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [image]);

  useEffect(() => {
    if (!inView || !image) return;
    let cancelled = false;

    loadPannellum()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        viewerRef.current = window.pannellum.viewer(containerRef.current, {
          type: "equirectangular",
          panorama: image,
          autoLoad: true,
          compass: false,
          showZoomCtrl: true,
          showFullscreenCtrl: true,
          title: alt || "",
        });
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("fallback");
      });

    return () => {
      cancelled = true;
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [inView, image, alt]);

  return (
    <div className="panorama-viewer" ref={containerRef} style={{ width: "100%", height: "420px", position: "relative" }}>
      {status !== "ready" && (
        <>
          <img
            className="panorama-viewer__fallback-img"
            src={image}
            alt={alt}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
          />
          {status === "loading" && inView && (
            <div className="panorama-viewer__loading">Loading 360° view…</div>
          )}
          {status === "fallback" && (
            <div className="panorama-viewer__note">
              360° view currently unavailable. Showing static photo instead.
            </div>
          )}
        </>
      )}
    </div>
  );
}
