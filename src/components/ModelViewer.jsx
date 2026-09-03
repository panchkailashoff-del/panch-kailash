import { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

const MODEL_VIEWER_SCRIPT_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";

let scriptPromise = null;
function loadModelViewerScript() {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    if (customElements.get("model-viewer")) return resolve();
    const script = document.createElement("script");
    script.type = "module";
    script.src = MODEL_VIEWER_SCRIPT_URL;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("model-viewer failed to load"));
    document.head.appendChild(script);
  });
  return scriptPromise;
}

// Reserved 3D section for every destination page. Loads the <model-viewer>
// web component from a CDN ONLY when a GLB is configured for this
// destination AND the section is near the viewport — never on the
// homepage, never for all five destinations at once. Any failure (no
// model configured, script blocked, device can't handle it) falls back
// to the destination's panoramic image instead of an empty box.
export default function ModelViewer({ modelSrc, fallbackImage, alt }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [status, setStatus] = useState(modelSrc ? "loading" : "fallback");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!modelSrc || !containerRef.current) return;
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
  }, [modelSrc]);

  useEffect(() => {
    if (!inView || !modelSrc) return;
    let cancelled = false;
    loadModelViewerScript()
      .then(() => {
        if (!cancelled) setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("fallback");
      });
    return () => {
      cancelled = true;
    };
  }, [inView, modelSrc]);

  return (
    <div className="model-viewer" ref={containerRef}>
      {status === "ready" && modelSrc ? (
        // eslint-disable-next-line react/no-unknown-property
        <model-viewer
          src={modelSrc}
          alt={alt}
          camera-controls
          touch-action="pan-y"
          auto-rotate={!reducedMotion}
          style={{ width: "100%", height: "100%", background: "transparent" }}
          onError={() => setStatus("fallback")}
        />
      ) : (
        <>
          <img
            className="model-viewer__fallback-img"
            src={fallbackImage}
            alt={alt}
            loading="lazy"
          />
          <div className="model-viewer__note">
            {modelSrc
              ? "3D experience currently unavailable. Explore the panoramic view instead."
              : "3D experience coming soon. Explore the panoramic view instead."}
          </div>
        </>
      )}
      {status === "loading" && inView && (
        <div className="model-viewer__loading">Preparing 3D experience…</div>
      )}
    </div>
  );
}
