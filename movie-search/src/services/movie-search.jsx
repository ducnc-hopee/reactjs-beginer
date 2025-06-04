const apiKey = import.meta.env.VITE_TMDB_API_KEY;
import axios from "axios";

export const fetchPopularMovies = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    return res.data.results; 
  } catch (err) {
    console.log("Error", err);
    return [];
  }
};

export const fetchSearchMovies = async (searchKeyword) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        searchKeyword
      )}`
    );
    return res.data.results; 
  } catch (err) {
    console.error("Error fetching search results:", err);
    return [];
  }
};
