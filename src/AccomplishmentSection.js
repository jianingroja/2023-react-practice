import React from 'react';
import { useState } from 'react';
import AccomplishmentList from './AccomplishmentList';
import AccomplishmentInput from './AccomplishmentInput';

// const accomplishmentArr = ['Coffee', 'Class', 'Gym', 'Yoga', 'Coding'];

const AccomplishmentSection = () => {
  // todo RENAME this state series
  const [accomp, setAccomp] = useState([]);

  const handleAddClick = newAccomp => {
    setAccomp([...accomp, newAccomp]);
  };

  return (
    <>
      <AccomplishmentInput handleAddClick={handleAddClick} />
      <AccomplishmentList accomp={accomp} />
    </>
  );
};

export default AccomplishmentSection;
