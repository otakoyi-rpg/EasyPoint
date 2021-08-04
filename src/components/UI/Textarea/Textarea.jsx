import React, { useRef } from 'react';
import './Textarea.scss';

const Textarea = ({ onChange, id, placeholder, text }) => {
  const ref = useRef();
  return (
    <label className="textarea-label">
      <span className = 'label-textarea' >{text}</span>
      <textarea id={id} ref={ref} onChange={() => onChange(ref)} className="textarea" placeholder={placeholder} />
    </label>
  );
};

export default Textarea;
