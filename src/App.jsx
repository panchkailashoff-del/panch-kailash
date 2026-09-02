import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./hooks/utils/styles/components/Navbar";
import Footer from "./hooks/utils/styles/components/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Heavier pages are lazy-loaded
const DestinationPage = lazy(() => import("./pages/DestinationPage"));
const Planner = lazy(() => import("./pages/Planner"));
const Compare = lazy(() => import("./pages/Compare"));
const Safety = lazy(() => import("./pages/Safety"));
const About = lazy(() => import("./pages/About"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Suspense
          fallback={
            <div className="container section">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/kailash/:id"
              element={<DestinationPage />}
            />

            <Route
              path="/planner"
              element={<Planner />}
            />

            <Route
              path="/compare"
              element={<Compare />}
            />

            <Route
              path="/safety"
              element={<Safety />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
