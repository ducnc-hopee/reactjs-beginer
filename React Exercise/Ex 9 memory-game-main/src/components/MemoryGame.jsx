import React, { useState, useEffect } from 'react';

export default function MemoryGame({ images }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const duplicated = [...images, ...images];
    const shuffled = duplicated
      .map((img) => ({ id: crypto.randomUUID(), img }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, [images]);

  const handleClick = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(cards[index].id)
    )
      return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];

      if (firstCard.img === secondCard.img) {
        // Match!
        setMatched((prev) => [...prev, firstCard.id, secondCard.id]);
        setTimeout(() => setFlipped([]), 1000);
      } else {
        // Not a match → flip back after 1s
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="cardsContainer" style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '400px' }}>
      {cards.map((card, index) => {
        const isFlipped = flipped.includes(index) || matched.includes(card.id);
        return (
          <div
            key={card.id}
            className="cards"
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              margin: '5px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
          >
            {isFlipped ? (
              <img src={card.img} alt="card" style={{ width: '100%', height: '100%' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', backgroundColor: '#bbb' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
