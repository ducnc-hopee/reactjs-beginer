import { useState } from "react";
import { MemoryGameProps, Card } from "../types/memory_card";

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function useMemoryGame({ images }: MemoryGameProps) {
    const [cards, setCards] = useState<Card[]>(() => {
        const duplicatedImages = [...images, ...images];
        const shuffledArray = shuffleArray(duplicatedImages);
        return shuffledArray.map((imageUrl, index) => ({
            id: index,
            imageUrl,
            isFlipped: false,
            isMatched: false,
        }));
    });

    const [flippCard, setFlippCard] = useState<number[]>([]);

    const handleCardClick = (clickedCardId: number) => {
        if (cards[clickedCardId].isFlipped || cards[clickedCardId].isMatched) {
            return;
        }

        if (flippCard.length === 2) {
            return;
        }

        const newCards = cards.map((card) =>
            card.id === clickedCardId ? { ...card, isFlipped: true } : card
        );

        setCards(newCards);

        const newFlippedCards = [...flippCard, clickedCardId];
        setFlippCard(newFlippedCards);

        if (newFlippedCards.length === 2) {
            const [firstCardId, secondCardId] = newFlippedCards;
            const firstCard = newCards[firstCardId];
            const secondCard = newCards[secondCardId];

            if (firstCard.imageUrl === secondCard.imageUrl) {
                setCards((prevCards) =>
                    prevCards.map((card) =>
                        card.id === firstCardId || card.id === secondCardId
                            ? { ...card, isMatched: true }
                            : card
                    )
                );

                setFlippCard([]);
            } else {
                setTimeout(() => {
                    setCards((prevCards) =>
                        prevCards.map((card) =>
                            card.id === firstCardId || card.id === secondCardId
                                ? { ...card, isFlipped: false }
                                : card
                        )
                    );

                    setFlippCard([]);
                }, 1000);
            }
        }
    };

    

    return {
        cards, setCards, flippCard, setFlippCard, handleCardClick
    }
}

export default useMemoryGame;