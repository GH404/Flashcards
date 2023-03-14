import React, { useState } from 'react';
import Flashcard from './Flashcard';
import '../FlashcardList.css';

const FlashcardList = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setUserGuess('');
      setIsCorrect(null);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setUserGuess('');
      setIsCorrect(null);
    }
  };

  const handleSubmit = () => {
    const currentCard = cards[currentCardIndex];
    if (userGuess.toLowerCase() === currentCard.back.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleChange = (event) => {
    setUserGuess(event.target.value);
  };

  return (
    <div className="flashcard-list">
      <div className="flashcard-container">
        <Flashcard card={cards[currentCardIndex]} />
      </div>
      <div className="controls-container">
        <div className="input-container">
          <input type="text" value={userGuess} onChange={handleChange} placeholder="Enter your guess" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="button-container">
          <button onClick={handlePreviousCard}>Previous</button>
          <button onClick={handleNextCard}>Next</button>
        </div>
      </div>
      {isCorrect !== null && (
        <div className="feedback-container">
          {isCorrect ? <div className="correct-feedback">Correct!</div> : <div className="incorrect-feedback">Incorrect. The answer was: {cards[currentCardIndex].back}</div>}
        </div>
      )}
    </div>
  );
};

export default FlashcardList;
