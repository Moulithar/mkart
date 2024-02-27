import React from 'react';
import "./assets/styles.css";

const MkBtn = ({ label, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function passed as a prop
    }
  };

  return (
    <button className='mk-btn' type="button" onClick={handleClick}>
      <div>{label ? label : "Subscribe"}</div>
    </button>
  );
};

export default MkBtn;
