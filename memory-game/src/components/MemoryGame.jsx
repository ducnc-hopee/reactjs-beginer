import React, { useState, useEffect } from "react";

import _ from "lodash";

const createCards = (images) => {
  const imagePairs = [...images, ...images];
  const shuffledImagePairs = _.shuffle(imagePairs);
  return shuffledImagePairs.map((image, index) => ({
    id: index,
    src: image,
  }));
};

const MemoryGame = ({ images }) => {
  const [cards, setCards] = useState(createCards(images));
  const [turnedCards, setTurnedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (turnedCards.length === 2) {
      handleCompareTurnedCards();
    }
  }, [turnedCards]);

  const handleCompareTurnedCards = () => {
    const [firstCard, secondCard] = turnedCards;
    if (firstCard.src === secondCard.src) {
      setMatchedCards((cards) => [...cards, firstCard, secondCard]);
    }

    setTimeout(() => {
      setTurnedCards([]);
    }, 1000);
  };

  const flipImage = (image) => {
    setTurnedCards((cards) => [...cards, image]);
  };

  const restartGame = () => {
    setCards(createCards(images));
    setTurnedCards([]);
    setMatchedCards([]);
  };

  function handleImageClick(image) {
    if (turnedCards.length >= 2) return;
    flipImage(image);
  }

  return (
    <div>
      <div className="flex flex-col items-center my-10">
        <h1 className="text-center font-bold text-4xl my-10">Memory Game</h1>
        <button
          onClick={restartGame}
          className="text-white bg-blue-500 hover:bg-blue-600 text-xl px-6 py-2 rounded cursor-pointer"
        >
          Restart
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-auto w-[660px] auto-rows-[150px]">
        {cards.map((image) => {
          const isTurned = turnedCards.find((card) => card.id === image.id);
          const isMatched = matchedCards.find((card) => card.id === image.id);
          const isOpened = isTurned || isMatched;

          return isOpened ? (
            <img key={image.id} src={image.src} className="w-full h-full m-1" />
          ) : (
            <div
              key={image.id}
              className="block w-full h-full m-1 bg-gray-300"
              onClick={() => handleImageClick(image, setCards)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;
