import { Pokemon } from "./pokemon";

export type PokemonResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
  }