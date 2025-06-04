import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { Pokemon } from '../types/pokemon';

export const PokemonList: React.FC = () => {

  const { pokemons,
    loading,
    totalCount,
    fetchPokemons,
    hasMorePokemons,
    error
  } = usePokemon();

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'normal': return '#A8A77A';
      case 'fire': return '#EE8160';
      case 'water': return '#6390F0';
      case 'electric': return '#F7D02C';
      case 'grass': return '#7AC74C';
      case 'ice': return '#96D9D6';
      case 'fighting': return '#C22E28';
      case 'poison': return '#A33EA1';
      case 'ground': return '#E2BF65';
      case 'flying': return '#A98FF3';
      case 'psychic': return '#F95587';
      case 'bug': return '#A6B91A';
      case 'rock': return '#B6A136';
      case 'ghost': return '#735797';
      case 'dragon': return '#6F35FC';
      case 'dark': return '#705746';
      case 'steel': return '#B7B7CE';
      case 'fairy': return '#DDA0DD';
      default: return '#888';
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Pokemon List</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {pokemons.map((pokemon: Pokemon) => (
          <li key={pokemon.name} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '0.9em', color: '#666' }}>#{pokemon.id?.toString().padStart(4, '0')}</div>
            {pokemon.imageUrl ? (
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                style={{ width: '100px', height: '100px', margin: '10px 0' }}
                onError={(e) => {
                  console.error(`Failed to load image for ${pokemon.name}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div style={{ width: '100px', height: '100px', background: '#eee', margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                No image
              </div>
            )}
            <div style={{ fontSize: '1.2em', fontWeight: 'bold', textTransform: 'capitalize' }}>{pokemon.name}</div>
            <div style={{ marginTop: '10px' }}>
              {pokemon.types?.map((typeInfo: { type: { name: string; url: string } }, index: number) => (
                <span key={index} style={{
                  display: 'inline-block',
                  backgroundColor: getTypeColor(typeInfo.type.name),
                  color: 'white',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  margin: '0 5px 5px 0',
                  fontSize: '0.8em',
                  textTransform: 'capitalize'
                }}>
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Showing {pokemons.length} of {totalCount} results</p>
        {hasMorePokemons && (
          <button
            onClick={fetchPokemons}
            disabled={loading}
            style={{
              padding: '10px 20px',
              fontSize: '1em',
              cursor: loading ? 'not-allowed' : 'pointer',
              backgroundColor: loading ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </div>
  );
};


export default PokemonList;
