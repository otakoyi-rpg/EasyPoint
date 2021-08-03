import React, { useRef } from 'react';
import './Input.scss';
import classnames from 'classnames';

const Input = ({
  label, required, placeholder, onChange, id, type = 'text', error,
}) => {
  const classInput = classnames('input', { input__error: error });
  const classLabel = classnames('label', { label__error: error });
  const classError = classnames("error__bottom-label",{error});
  const ref = useRef();

  return (

    <label className={classLabel}>
      <span className="span-label">
        {label}
        {' '}
        {required && '*'}
      </span>

      <input
        className={classInput}
        placeholder={placeholder}
        ref={ref}
        onChange={() => onChange(ref)}
        id={id}
        type={type}
      />
      <span className={classError}>
        {error || ' '}
      </span>
    </label>

  );
};

export default Input;
