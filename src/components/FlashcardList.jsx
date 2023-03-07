import React, { useState } from 'react';
import Flashcard from './Flashcard';
import '../FlashcardList.css'


const FlashcardList = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div className="flashcard-list">
      <Flashcard card={cards[currentCardIndex]} />
      <div>
        <button onClick={handlePreviousCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardList;
