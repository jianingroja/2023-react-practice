import React from 'react';
import { useState } from 'react';
import Button from './Button';

const createAccomp = (name, accomplished = false) => {
  return {
    name,
    accomplished,
  };
};

const AccomplishInput = ({ handleAddClick }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    // todo check input content
    if (!input) {
      return;
    }

    handleAddClick(createAccomp(input));
    setInput('');
  };

  const handleKeDown = e => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div className="input-section">
      <input
        className="input-add"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeDown}
      />
      <Button className="button-add" handleClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default AccomplishInput;
