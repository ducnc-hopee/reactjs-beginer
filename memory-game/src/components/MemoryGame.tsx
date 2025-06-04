import { useState } from 'react';
import { MemoryGameProps, Card } from '../types/memory_card';
import useMemoryGame from '../hooks/useMemory';

const MemoryGame = ({ images }: MemoryGameProps) => {

    const { cards, handleCardClick } = useMemoryGame({ images });

    return (
        <div className="memory-game">
            <div className="cards-grid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''
                            }`}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={card.imageUrl} alt="card" />
                            </div>
                            <div className="card-back">
                                <div className="card-back-content">?</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MemoryGame;