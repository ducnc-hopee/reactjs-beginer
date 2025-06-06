import {
  useState,
  useEffect,
} from "react"; /* UseState: Stores current value for given local storage */
/* It initialised value form localStorage or fallback fo provided inital value */

function useLocalStorage(key, initialValue) {
  // Get the value from localStorage or fallback to initialValue
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

/* try-catch used to handle any error reading from or writing to localstorage  */
/* useEffect runs when state changes(value) write updated value back to local storage  */
