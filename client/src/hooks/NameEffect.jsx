import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export const useNameEffect = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleImageClick = () => {
    if (count < 10) {
      confetti();
      setCount(count + 1);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    if (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setError(false);
        return;
      }, 10000);
    }
  }, [error]);

  return {
    count,
    handleImageClick,
    showError,
  };
};
