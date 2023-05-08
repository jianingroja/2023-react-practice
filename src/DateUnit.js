import React from 'react';

const DateUnit = ({ date, dateType }) => {
  return <h2 className={`date-unit ${dateType}-date-unit`}>{date}</h2>;
};

export default DateUnit;
