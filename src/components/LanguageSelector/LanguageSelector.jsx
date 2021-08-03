import React, { useState, useMemo } from 'react';
import './LanguageSelector.scss';
import classnames from 'classnames';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import Arrow from '../images/Arrow';

const LanguageSelector = ({languages,className}) => {
  const {originalPath, language} = useI18next();

  const [toggle, setToggle] = useState(false);

  const languageSelector = classnames(className, {
    'language-selector--active': toggle,
  });

  const activeLang = useMemo(() => {
    return languages.filter((lang) => lang.lang_item_key === language)
  },[language])

  const unactiveLang = useMemo(() => {
    return languages.filter((lang) => lang.lang_item_key !== language)
  },[language])

  return (
    <div className={languageSelector}>
      <button type="button" onClick={() => setToggle(!toggle)} className="language-selector__button">
        {activeLang[0].lang_item_txt}<Arrow className="language-selector__button-arrow" />
      </button>
      <ul className="language-selector__list">
        {unactiveLang.map((lang,index) => (
          <li key={Math.random()} className="language-selector__list-item">
            <Link
              to={originalPath}
              language={lang.lang_item_key}
              className="language-selector__list-item-button"
            >
              {lang.lang_item_txt}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
