import React from "react"
import "./Footer.scss"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import Location from "../images/Location"
import { useI18next } from "gatsby-plugin-react-i18next"

const Footer = props => {
  const { language } = useI18next()

  const {
    allMarkdownRemark: {
      edges: [
        {
          node: { frontmatter },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query Footer {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/footer.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                logo
                write_us
                 write_us_email
                 location
                 location_city
                 our_team
                 our_team_url
                 rights
                 terms
                 privacy
                 otakoyi
              }
              en {
                logo
             write_us
              write_us_email
              location
              location_city
              our_team
              our_team_url
              rights
              terms
              privacy
              otakoyi
              }
            }
          }
        }
      }
    }
  `)

  // console.log(data);
  // console.log( 'post1', nodes);

  return (
    <footer className="footer-wraper" id="footer">
      <div className="container">
        <div className="footer__top">
          <img
            src={frontmatter[language].logo}
            alt=""
            className="footer__top-logo"
          />
          <div className="footer__top-data">
            <div className="footer__top-data-contact">
              <div className="footer__top-data-contact-write">
                {frontmatter[language].write_us}
              </div>
              <div className="footer__top-data-contact-email">
                <a
                  className="footer__top-data-contact-email-link"
                  href="mailto:easypoints@lunaris.jp"
                >
                  {frontmatter[language].write_us_email}
                </a>
              </div>
            </div>
            <div className="footer__top-data-location">
              <div className="footer__top-data-location-description">
                {frontmatter[language].location}
              </div>
              <div className="footer__top-data-location-town">
                <Location />
                {frontmatter[language].location_city}
              </div>
            </div>
            <div className="footer__top-data-our">
              <div className="footer__top-data-our-team">
                {frontmatter[language].our_team}
              </div>
              <div className="footer__top-data-our-site">
                {frontmatter[language].our_team_url}
              </div>
            </div>
            <div className="footer__top-language">
              <LanguageSelector className="language-selector footer_lang"  />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-rights">
            {frontmatter[language].right}
          </div>
          <div className="footer__bottom-descriptions">
            <div className="footer__bottom-descriptions-conditions">
              {frontmatter[language].therms}
            </div>
            <div className="footer__bottom-descriptions-policy">
              {frontmatter[language].privacy}
            </div>
          </div>
          <div className="footer__bottom-logo">
            <img src={frontmatter[language].otakoyi} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
