import React, { useState } from 'react';
import './Button.css';

const Button = ({ accomplishment = '' }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  return (
    <div>
      <button
        className={`button ${showText ? 'button-accomplished' : ''}`}
        onClick={handleClick}
      >
        {accomplishment}
      </button>
      {showText ? (
        <p className="text-accomplished">
          Accomplished {accomplishment} today!
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Button;
