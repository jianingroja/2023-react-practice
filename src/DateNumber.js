import React from 'react';
import './DateNumber.css';

const DateNumber = () => {
  const dateConstructor = new Date();
  const date = dateConstructor.getDate();

  //todo separate component
  // array for passed date
  let passedDateArray = [];
  for (let i = 1; i < date; i++) {
    passedDateArray.push(i);
  }

  return (
    <div>
      <div className="passed-date">
        {/* passed date */}
        {passedDateArray.map((date, index) => (
          <h2 className="passed-date-number" key={index}>
            {date}
          </h2>
        ))}
        {/* <h2 className="passed-date-number">1</h2>
        <h2 className="passed-date-number">2</h2>
        <h2 className="passed-date-number">3</h2> */}
      </div>
      {/* margin from h2 doesn't collapse between these 2 div, needs to be fixed. */}
      <div>
        {/* present date */}
        <h2 className="present-date-number">{date}</h2>
      </div>
    </div>
  );
};

export default DateNumber;
