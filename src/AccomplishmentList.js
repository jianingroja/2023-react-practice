import React from 'react';
import AccomplishmentUnit from './AccomplishmentUnit';

const AccomplishmentList = ({ accomp }) => {
  // empty list
  if (!accomp.length) {
    return (
      <p className="empty-list-placeholder">
        It's never too late to add your first accomplishment wish!
      </p>
    );
  }

  return (
    <>
      {accomp.map((accomplishment, index) => (
        <AccomplishmentUnit key={index} accomplishment={accomplishment.name} />
      ))}
    </>
  );
};

export default AccomplishmentList;
