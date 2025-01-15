import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdviceCard from './components/AdviceCard';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <AdviceCard advice={advice} adviceId={adviceId} />
      <Button onClick={fetchAdvice} />
    </div>
  );
};

export default App;
