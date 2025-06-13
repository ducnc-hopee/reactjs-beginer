// You can retrieve the pokemons by calling the following API
// Make sure to replace limit and offset with the appropriate values
// https://pokeapi.co/api/v2/pokemon?limit=5&offset=0

import { useState,useEffect } from "react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loadMore, setLoadMore] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${loadMore}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons([...pokemons, ...data.results]);
        setTotalCount(data.count);
      });
  }, [loadMore]);

  const loadedAll = pokemons.length === totalCount;
  return (
    <div>
      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
      <p>
        Displaying {pokemons.length} of {totalCount} results
      </p>
      {!loadedAll && (
        <button onClick={() => setLoadMore(loadMore + 5)}>Load more</button>
      )}
    </div>
  );
};

export default PokemonList;
