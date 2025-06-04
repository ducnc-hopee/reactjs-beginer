export type MemoryGameProps = {
    images: string[];
}

export type Card = {
    id: number;
    imageUrl: string;
    isFlipped: boolean;
    isMatched: boolean;
}