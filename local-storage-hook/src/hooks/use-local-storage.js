import { useState, useEffect } from "react";

export default function useLocalStorage(keyName, initialValue) {
  const readValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    };

    try {
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : initialValue;
    }
    catch (error) {
      console.error(`Error reading localStorage key “${keyName}”:`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(() => {
    try {
      return readValue();
    } catch {
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      const valueToStore = newValue === undefined ? initialValue : newValue;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(keyName, JSON.stringify(valueToStore));
      }
    }
    catch (error) {
      console.error(`Error setting localStorage key “${keyName}”:`, error);
    }
  }

  useEffect(() => {
    setStoredValue(readValue());
  }, [keyName]);

  return [storedValue, setValue];

}
