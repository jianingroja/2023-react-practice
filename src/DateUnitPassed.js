import React from 'react';
import DateNumberSingle from './DateNumberSingle';

const DateUnitPassed = ({ passedDateArray }) => {
  return (
    <div className="passed-date">
      {passedDateArray.map((date, index) => (
        <DateNumberSingle key={index} date={date} dateType="passed" />
      ))}
    </div>
  );
};

export default DateUnitPassed;
