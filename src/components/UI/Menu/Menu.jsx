import React, { useState } from 'react';
import classnames from 'classnames';
import './Menu.scss';

const Menu = ({handleGetIndex, data}) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleClick = (index) => {
    setCurrentItem(index);
    handleGetIndex(index)
  };

  const getButtonClass = (index) => classnames('menu-list__button', {
    'menu-list__button--active': currentItem === index,
  });

  const getListItemClass = (index) => classnames('menu-list__item', {
    'menu-list__item--active': currentItem === index,
  });

  return (
    <div className="menu" data-aos="fade-up" data-aos-delay="400">
      <ul className="menu-list">
        {data.map(({ title }, index) => (
          <li key={index} className={getListItemClass(index)}>
            <button
              className={getButtonClass(index)}
              onClick={() => handleClick(index)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
