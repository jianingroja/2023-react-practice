import React from 'react';
import DateUnit from './DateUnit';

const DatePresent = ({ date }) => {
  return (
    <div>
      <DateUnit date={date} dateType="present" />
    </div>
  );
};

export default DatePresent;
