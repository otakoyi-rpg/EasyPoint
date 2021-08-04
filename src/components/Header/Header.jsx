import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import BurgerButton from '../UI/BurgerButton/BurgerButton';
import Button from '../UI/Button/Button';
import './Header.scss';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useI18next } from 'gatsby-plugin-react-i18next';


const Header = () => {

  const {language} = useI18next()
  const [navigationIsActive, setNavigationIsActive] = useState(false);

  const [width, setWidth] = useState();

  
  const navigationWrapperClassName = classnames('header__navigation-wrapper', {
    'header__navigation-wrapper--active': navigationIsActive,
  });

  const {allMarkdownRemark:{edges:[{node:{frontmatter}}]}} = useStaticQuery(graphql`
    query Header {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/header.md$/"}}) {
        edges {
          node {
            id
            frontmatter {
              jp {
                logo
                demo_btn_url
                demo_btn
                shopify_btn_url
                shopify_btn
               
                navigation {
                  nav_item_hash
                  nav_item_txt
                }
              }
              en {
                logo
                demo_btn
                demo_btn_url
                shopify_btn
                shopify_btn_url
               
                navigation {
                  nav_item_hash
                  nav_item_txt
                }
              }
            }
          }
        }
      }
    }
  `);

  const handleIsActive = (isActive) => {
    setNavigationIsActive(isActive);
  };

  useEffect(() => {
    const setWindowWidth = () => {
      setWidth(window.innerWidth);
    };

    setWindowWidth();
    window.addEventListener('resize', setWindowWidth);

    return () => {
      window.removeEventListener('resize', setWindowWidth);
    };
  }, []);


  useEffect(() => {
    const body = document.querySelector('body');
    if(width > 1400 || !navigationIsActive){
      body.style.overflow = 'visible';
    } else {
      body.style.overflow = 'hidden';
    }
  
  }, [navigationIsActive, width])

  return (
    <div className="header" >
      {/* <Logo className="header__logo-height" /> */}
      <div className="header__logo">
        <img src={frontmatter[language].logo} alt="" />
        {/* <GatsbyImage src="https://placekitten.com/800/600" alt="brand" /> */}
      </div>
      <div className={navigationWrapperClassName}>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            {frontmatter[language].navigation.map(({ nav_item_txt, nav_item_hash }) => (
              <li
                key={nav_item_txt + nav_item_hash}
                className="header__navigation-list-item"
              >
                <a
                  className="header__navigation-link"
                  href={`${nav_item_hash}`}
                  onClick={() => setNavigationIsActive(!navigationIsActive)}
                >
                  {nav_item_txt}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSelector className="language-selector" />
        <Button type="primaryViolet" text="Shopify App Store" href="#" />
        <Button type="secondary" text={frontmatter[language].demo_btn} href={frontmatter[language].demo_btn_url} />
      </div>
      <div className="header-link">
        <Button type="primaryViolet" text={frontmatter[language].shopify_btn} href={frontmatter[language].shopify_btn_url} />
        <Button type="secondary" text={frontmatter[language].demo_btn} href={frontmatter[language].demo_btn_url} />
        <BurgerButton
          isActive={navigationIsActive}
          handleIsActive={handleIsActive}
        />
      </div>
    </div>
  );
};

export default Header;
