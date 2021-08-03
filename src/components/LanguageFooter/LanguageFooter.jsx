import React, { useState } from 'react';
import './LanguageFooter.scss';
import classnames from 'classnames';
import ArrowFooter from '../images/ArrowFooter';

const LanguageFooter = () => {
  const languages = ['Eng', 'JP'];
  const [language, setLanguage] = useState(languages[0]);
  const [selectorIsVisible, setSelectorIsVisible] = useState(false);

  const languageSelectorClassName = classnames('footer-language-selector', {
    'footer-language-selector--active': selectorIsVisible,
  });

  const buttonArrow = classnames('footer-language-selector__button-arrow', {
    'footer-language-selector__button-arrow--active': !selectorIsVisible,
  });

  const listClassName = classnames('footer-language-selector__list', {
    'footer-language-selector__list--active': selectorIsVisible,
  });

  const handleLanguage = () => {
    setSelectorIsVisible((prev) => !prev);
  };

  const handleChooseLanguage = (lang) => {
    setLanguage(lang);
    setSelectorIsVisible(false);
  };

  const filteredLanguages = [...languages].filter((el) => el !== language);

  return (
    <div className={languageSelectorClassName}>
      <button onClick={handleLanguage} className="footer-language-selector__button">
        {language}
        <ArrowFooter className={buttonArrow} />
      </button>
      <ul className={listClassName}>
        {filteredLanguages.map((lang, index) => (
          <li key={lang + index} className="footer-language-selector__list-item">
            <button
              onClick={() => handleChooseLanguage(lang)}
              className="footer-language-selector__list-item-button"
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageFooter;
