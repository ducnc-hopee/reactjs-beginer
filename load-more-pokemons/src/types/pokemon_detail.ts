export type PokemonDetail = {
    id: number;
    sprites: {
        front_default: string  ;
    };
    types: { type: { name: string; url: string } }[];
}