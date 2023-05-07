import React, { useEffect, useState } from 'react';
import './Time.css';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="time-current">
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Time;
