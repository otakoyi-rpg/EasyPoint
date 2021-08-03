import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './DoubleButton.scss';

const DoubleButton = ({firstText, secondText}) => {
  const refSpan = useRef();
  const refButton1 = useRef();
  const refButton2 = useRef();
  const [activeClass, setActiveClass] = useState(true);

  useEffect(() => {
    refSpan.current.style.width = `${refButton1.current.offsetWidth}px`;
    setActiveClass(true);
  }, []);

  const handleOneButton = () => {
    setActiveClass(true);
    refSpan.current.style.width = `${refButton1.current.offsetWidth}px`;
    refSpan.current.style.left = 0;
    refSpan.current.style.right = 'auto';
  };

  const handleTwoButton = () => {
    refSpan.current.style.width = `${refButton2.current.offsetWidth}px`;
    refSpan.current.style.right = 0;
    refSpan.current.style.left = 'auto';
    setActiveClass(false);
  };

  return (
    <div className="switch">
      <span className="switch__wrapper" ref={refSpan} />
      <button onClick={handleOneButton} ref={refButton1} className="double-button">{firstText}</button>
      <button onClick={handleTwoButton} ref={refButton2} className="double-button">{secondText}</button>
    </div>
  );
};
export default DoubleButton;
