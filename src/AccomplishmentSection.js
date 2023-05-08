import React from 'react';
import AccomplishmentUnit from './AccomplishmentUnit';

const accomplishmentArr = ['Coffee', 'Class', 'Gym', 'Yoga', 'Coding'];

const AccomplishmentSection = () => {
  return (
    <>
      {accomplishmentArr.map((accomplishment, index) => (
        <AccomplishmentUnit key={index} accomplishment={accomplishment} />
      ))}
    </>
  );
};

export default AccomplishmentSection;
