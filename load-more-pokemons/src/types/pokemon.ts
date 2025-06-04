export type Pokemon = {
    name: string;
    url: string;
    imageUrl?: string;
    id?: number;
    types?: { type: { name: string; url: string } }[];
}