import { useState, useEffect } from "react";

export default function useLocalStorage(keyName, initialValue) {
  const getStoredValue = () => {
    try {
      const storedValue = localStorage.getItem(keyName);
      if (storedValue === null || storedValue === "undefined") {
        return initialValue;
      }
      return JSON.parse(storedValue);
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    try {
      localStorage.setItem(keyName, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [keyName, value]);

  return [value, setValue];
}
