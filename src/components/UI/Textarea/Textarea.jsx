import React, { useRef } from 'react';
import './Textarea.scss';

const Textarea = ({ onChange, id }) => {
  const ref = useRef();
  return (
    <label className="textarea-label">
      <span className = 'label-textarea' >Message</span>
      <textarea id={id} ref={ref} onChange={() => onChange(ref)} className="textarea" placeholder="example.myshopify.com" />
    </label>
  );
};

export default Textarea;
