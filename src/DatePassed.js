import React from 'react';
import DateUnit from './DateUnit';

const DatePassed = ({ passedDateArr }) => {
  return (
    <div className="passed-date-section">
      {passedDateArr.map((date, index) => (
        <DateUnit key={index} date={date} dateType="passed" />
      ))}
    </div>
  );
};

export default DatePassed;
