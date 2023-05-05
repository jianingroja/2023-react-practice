import React from 'react';
import DateNumberSingle from './DateNumberSingle';

const DateUnitPresent = ({ date }) => {
  return (
    <div>
      <DateNumberSingle date={date} dateType="present" />
    </div>
  );
};

export default DateUnitPresent;
