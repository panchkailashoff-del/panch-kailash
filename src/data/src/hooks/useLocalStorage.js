import { useEffect, useState } from "react";

// Small, defensive localStorage-backed state hook. Used by the packing
// checklist, journey planner and comparison tools so preferences survive
// a page refresh without needing any backend.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage unavailable (private browsing, quota, etc.) — fail silently,
      // the app still works, it just won't persist.
    }
  }, [key, value]);

  return [value, setValue];
}
