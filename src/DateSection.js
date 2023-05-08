import React from 'react';
import DatePassed from './DatePassed';
import DatePresent from './DatePresent';
import './Date.css';

const DateSection = () => {
  const dateConstructor = new Date();
  const date = dateConstructor.getDate();

  let passedDateArr = [];
  for (let i = 1; i < date; i++) {
    passedDateArr.push(i);
  }

  return (
    <>
      {/* //todo extract one component for these two? */}
      <DatePassed passedDateArr={passedDateArr} />
      <DatePresent date={date} />
    </>
  );
};

export default DateSection;
