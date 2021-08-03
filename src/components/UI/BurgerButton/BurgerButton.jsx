import React from 'react';
import classnames from 'classnames';
import './BurgerButton.scss';

const BurgerButton = ({ handleIsActive, isActive }) => {
  const buttonClassName = classnames('burger-button', {
    'burger-button--active': isActive,
  });

  return (
    <button
      onClick={() => handleIsActive(!isActive)}
      className={buttonClassName}
      aria-label="burger button"
    >
      <div className="burger-button__icon-wrapper">
        <div className="burger-button__line" aria-hidden="true" />
        <div className="burger-button__line" aria-hidden="true" />
      </div>
    </button>
  );
};

export default BurgerButton;
