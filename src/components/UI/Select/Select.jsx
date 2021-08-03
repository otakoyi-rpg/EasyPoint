import React, { useState } from 'react';
import './Select.scss';
import classnames from 'classnames';
import ArrowFooter from "../../images/ArrowFooter"

const Select = ({options,placeholder, currentValue, error, setCurrentValue}) => {
  const [selectorIsVisible, setSelectorIsVisible] = useState(false);
  const [selectOption, setOptionSelect] = useState(placeholder);

  const selectorClassName = classnames('form-selector', {
    'form-selector--active': selectorIsVisible, 'form-selector__error': error
  });

  const buttonArrow = classnames('form-selector__button-arrow', {
    'form-selector__button-arrow--active': !selectorIsVisible,
  });

  const listClassName = classnames('form-selector__list', {
    'form-selector__list--active': selectorIsVisible,
  });

  const handleSelector = () => {
    setSelectorIsVisible((prev) => !prev);
  };

  const handleOption = (option) => {
    setSelectorIsVisible(false);
    setOptionSelect(option);
    setCurrentValue(option)
  };


  return (
    <>
    <div className={selectorClassName}>
      <button type="button" onClick={handleSelector} className="form-selector__button">
        {/* {currentValue || placeholder} */}
        {selectOption}
        <ArrowFooter className={buttonArrow} />
      </button>
      <ul className={listClassName}>
        {options.map((option) => (
          <li key={Math.random()} className="form-selector__list-item">
            <button
              type="button"
              onClick={() => handleOption(option)}
              className="form-selector__list-item-button"
              >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <span className = "form-selector__span-error">{error}</span>
    </>
  );
};

export default Select;
