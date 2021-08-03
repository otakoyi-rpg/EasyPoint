import React from 'react';
import './Footer.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Location from '../images/Location';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Footer = () => {

  const {language} = useI18next()
 

  const {allMarkdownRemark:{edges:[{node:{frontmatter}}]}} = useStaticQuery(graphql`
  query Footer {
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
              languages {
                lang_item_key
                lang_item_txt
              }
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
              languages {
                lang_item_key
                lang_item_txt
              }
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



  return (
    <footer className="footer-wraper" id = 'footer'>
      <div className="container">
        <div className="footer__top">
          {/* <GatsbyImage className="footer__top-logo" image={getImage(logo.gatsbyImageData)} alt="logo" /> */}
          <div className="footer__top-data">
            <div className="footer__top-data-contact">
              <div className="footer__top-data-contact-write">Write us</div>
              <div className="footer__top-data-contact-email">
                <a className="footer__top-data-contact-email-link" href="mailto:easypoints@lunaris.jp">
                  easypoints@lunaris.jp
                </a>
              </div>
            </div>
            <div className="footer__top-data-location">
              <div className="footer__top-data-location-description">Location</div>
              <div className="footer__top-data-location-town">
                <Location />
                Japan
              </div>
            </div>
            <div className="footer__top-data-our">
              <div className="footer__top-data-our-team">Our team</div>
              <div className="footer__top-data-our-site">teamlunaris.com</div>
            </div>
            <div className="footer__top-language">
            <LanguageSelector className="language-selector footer_lang" languages = {frontmatter[language].languages} />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-rights"> © 2020 Team Lunaris. All rights reserved</div>
          <div className="footer__bottom-descriptions">
            <div className="footer__bottom-descriptions-conditions">Terms and Conditions</div>
            <div className="footer__bottom-descriptions-policy">Privacy policy</div>
          </div>
          <div className="footer__bottom-logo">
            {/* <GatsbyImage image={getImage(otakoyi.gatsbyImageData)} alt = "otakoyi" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
