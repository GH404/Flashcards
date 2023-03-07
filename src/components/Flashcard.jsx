import React, { useState } from 'react';
import '../Flashcard.css';

const Flashcard = ({ card }) => {
  const [showFront, setShowFront] = useState(true);
  const [showBack, setShowBack] = useState(false);

  const handleShowBack = () => {
    setShowFront(false);
    setShowBack(true);
  };

  const handleShowFront = () => {
    setShowBack(false);
    setShowFront(true);
  };

  return (
    <div className="flashcard">
      {showFront && (
        <div>
          <div>{card.front}</div>
          <button onClick={handleShowBack}>Show Back</button>
        </div>
      )}
      {showBack && (
        <div>
          <div>{card.back}</div>
          <button onClick={handleShowFront}>Show Front</button>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
