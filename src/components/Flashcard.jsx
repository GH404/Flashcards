import React, { useState } from 'react';
import '../Flashcard.css';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">{card.front}</div>
      <div className="back">{card.back}</div>
    </div>
  );
};

export default Flashcard;
