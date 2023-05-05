import React from 'react';
import DateUnitPassed from './DateUnitPassed';
import DateUnitPresent from './DateUnitPresent';
import './DateNumber.css';

// todo RENAME this series
const DateNumber = () => {
  const dateConstructor = new Date();
  const date = dateConstructor.getDate();

  let passedDateArray = [];
  for (let i = 1; i < date; i++) {
    passedDateArray.push(i);
  }

  return (
    <>
      {/* //todo extract one component for these two? */}
      <DateUnitPassed passedDateArray={passedDateArray} />
      <DateUnitPresent date={date} />
    </>
  );
};

export default DateNumber;
