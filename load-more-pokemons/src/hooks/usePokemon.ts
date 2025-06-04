import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types/pokemon';
import { PokemonResponse } from '../types/pokemon_response';
import { PokemonDetail } from '../types/pokemon_detail';
import useLocalStorage from './use-local-storage';


export function usePokemon() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const limit = 5;

    const fetchPokemonDetail = async (url: string): Promise<PokemonDetail | null> => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: PokemonDetail = await response.json();
            // return data.sprites.front_default;
            return data;
        } catch (error) {
            console.error('Error fetching pokemon details:', error);
            return null;
        }
    };

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            setError(null);
            // const currentOffset = totalCount === 0 ? 0 : offset;

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: PokemonResponse = await response.json();

            // const pokemonsWithImages = await Promise.all(
            //     data.results.map(async (pokemon) => {
            //         const imageUrl = await fetchPokemonDetail(pokemon.url);
            //         return { ...pokemon, imageUrl };
            //     })
            // );

            // console.log('Pokemons with images:', pokemonsWithImages);

            const pokemonsWithDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const detail = await fetchPokemonDetail(pokemon.url);
                    if (detail) {
                        return { ...pokemon, imageUrl: detail.sprites.front_default, id: detail.id, types: detail.types };
                    }
                    else {
                        return pokemon;
                    }
                })
            );

            setPokemons(prev => {
                const existingNames = new Set(prev.map(p => p.name));
                // const newPokemons = pokemonsWithImages.filter(p => !existingNames.has(p.name));
                const newPokemons = pokemonsWithDetails.filter(p => !existingNames.has(p.name));
                return [...prev, ...newPokemons];
            });

            if (totalCount === 0) {
                setTotalCount(data.count);
            }
            setOffset(prev => prev + limit);
        } catch (error) {
            console.error('Error fetching pokemons:', error);
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, []);



    const hasMorePokemons = pokemons.length < totalCount;

    return {
        pokemons,
        loading,
        totalCount,
        error,
        fetchPokemons,
        hasMorePokemons
    }
}

export default usePokemon;