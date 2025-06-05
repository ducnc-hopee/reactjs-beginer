import Reat, { useState } from "react"
import { searchMovies } from '../services/api'

function MovieSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query.trim()) return;
        const movies = await searchMovies(query);
        setResults(movies);
    };

return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie name"
      />
      <button onClick={handleSearch}style={{ marginBottom: "20px" }}>Search</button>

      <div>
        {results.map((movie) => (
          <div key={movie.id}>
         <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '150px', borderRadius: '8px' }}
        />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;