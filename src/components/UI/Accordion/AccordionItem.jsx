import React, { useState, useRef, useEffect } from 'react';
import Plus from '../../images/Plus';
import Minus from '../../images/Minus';

const AccordionItem = ({ el, currentItem, handleOpen }) => {
  const [showContent, setShowContent] = useState(false);
  const [elemHeight, setElemHeight] = useState(0);

  const ref = useRef();

  useEffect(() => {
    if (currentItem === el.title) {
      setElemHeight(ref.current.offsetHeight);
      setShowContent(true);
    } else {
      setElemHeight(0);
      setShowContent(false);
    }
  }, [currentItem]);

  return (
    <div className="accordion__item"  >
      <div className="accordion__item-text" onClick = {()=> handleOpen(el.title, showContent)} >
        <div  className="accordion__item-text-title"  >{el.title}</div>
        <button
          className="accordion__item-text-icon"
        >
          {showContent ? <Minus /> : <Plus />}
        </button>
      </div>
      <div
        className="accordion__item-wrapper"
        style={{ maxHeight: elemHeight }}
      >
        <div className="accordion__item-wrapper-content" ref={ref}>
          {el.content}
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;
