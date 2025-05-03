import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  ChevronDoubleLeft,
  FlagSpain,
  FlagUnitedKingdom,
} from '../components/Icons/Icons';


export default function useLanguageSwitch({ lang, toggleLanguage }) {
  const [direction, setDirection] = useState('left');

  const handleClick = () => {
    setDirection(direction === 'left' ? 'right' : 'left');
    toggleLanguage();
  };

  return (
    <div className="px-5">
      <span className="">
        <FlagSpain />
      </span>
      <span className={`chevronDouble ${direction}`} onClick={handleClick}>
        <ChevronDoubleLeft />
      </span>
      <span className="">
        <FlagUnitedKingdom />
      </span>
    </div>
  );
}

useLanguageSwitch.propTypes = {
  lang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};
