const apiKey = '00a18b7d917df39a868bb38993bd924f'; /* stores TMDB API key */

export const searchMovies = async (query) => { /* defines, exports async function called search movis */
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}; /* accepts query when User types on search box */

