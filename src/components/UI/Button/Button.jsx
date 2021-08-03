import React from 'react';
import classnames from 'classnames';
import './Button.scss';

const Button = ({
  text, type, onClick, href, className, typeOfButton = 'button',
}) => {
  const types = {
    primaryViolet: 'primary-on-light',
    primaryLight: 'primary-on-purple',
    secondary: 'secondary',
  };

  const classNames = classnames('button', className, `button__${types[type]}`);

  const tag = href ? (
    <a href={href} className={classNames} onClick={onClick}>
      {text}
    </a>
  ) : (
    <button className={classNames} onClick={onClick} type={typeOfButton}>
      {text}
    </button>
  );

  return tag;
};

export default Button;
