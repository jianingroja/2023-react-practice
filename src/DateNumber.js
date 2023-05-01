import React from 'react';
import './DateNumber.css';

const DateNumber = () => {
  const dateConstructor = new Date();
  const date = dateConstructor.getDate();

  return (
    <div>
      <h2 className="date-number"> {date}</h2>
    </div>
  );
};

export default DateNumber;
