import React, { useState } from 'react';
import Button from './Button';
import './Accomplishment.css';
import './Button.css';

const AccomplishmentUnit = ({ accomplishment = '' }) => {
  const [isAccomplished, setIsAccomplished] = useState(false);

  const handleClick = () => {
    setIsAccomplished(true);
  };

  const btnClassName = `button-accomplish ${
    isAccomplished ? 'button-accomplished' : ''
  }`;

  return (
    <div>
      <Button className={btnClassName} handleClick={handleClick}>
        {accomplishment}
      </Button>
      {isAccomplished ? (
        <p className="text-accomplished">
          Accomplished {accomplishment} today!
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default AccomplishmentUnit;
