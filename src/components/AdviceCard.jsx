import React from 'react';
import './AdviceCard.css';

const AdviceCard = ({ advice, adviceId }) => {
  return (
    <div className="advice-card">
      <p className="advice-number">Advice #{adviceId}</p>
      <p className="advice-text">“{advice}”</p>
    </div>
  );
};

export default AdviceCard;
