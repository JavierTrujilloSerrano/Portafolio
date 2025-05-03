import { useState } from 'react';

export const usePrivacyCheckbox = ({ onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    onCheckboxChange(e.target.checked);
  };
  const handleTextClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return {
    isChecked,
    showPopup,
    handleCheckboxChange,
    handleTextClick,
    handleClosePopup,
  };
};
