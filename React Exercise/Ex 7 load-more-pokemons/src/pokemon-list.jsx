// You can retrieve the pokemons by calling the following API
// Make sure to replace limit and offset with the appropriate values
// https://pokeapi.co/api/v2/pokemon?limit=5&offset=0

import React, { useState, useEffect } from "react";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const PAGE_SIZE = 5;

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line
  }, []);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${POKEMON_API_URL}?limit=${PAGE_SIZE}&offset=${offset}`);
      const data = await response.json();

      setPokemons(prev => [...prev, ...data.results]);
      setOffset(prev => prev + PAGE_SIZE);
      setTotal(data.count);
    } catch (err) {
      console.error("Failed to fetch Pokémon:", err);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Pokémon List</h2>
      <ul>
        {pokemons.map((pokemon, idx) => (
          <li key={idx}>{pokemon.name}</li>
        ))}
      </ul>
      <p>Displaying {pokemons.length} of {total ?? "…"} results</p>

      {pokemons.length < (total ?? Infinity) && (
        <button onClick={fetchPokemons} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
