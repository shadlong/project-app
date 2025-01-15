import React from 'react';
import '../Styles/Button.css';

const Button = ({ onClick }) => {
  return (
    <button className="dice-button" onClick={onClick}>
      <img src="/icon-dice.svg " alt="Dice Icon" />
    </button>
  );
};

export default Button;