import React from 'react';

const DateNumberSingle = ({ date, dateType }) => {
  return <h2 className={`date-number ${dateType}-date-number`}>{date}</h2>;
};

export default DateNumberSingle;
