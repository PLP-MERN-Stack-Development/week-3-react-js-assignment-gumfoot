import { useState, useEffect } from "react";

/**
 * Custom hook that syncs state to localStorage
 * @param {string} key - localStorage key
 * @param {*} initialValue - default state value
 */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // Get from localStorage or fall back to initialValue
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    // Save the new value to localStorage every time it changes
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
