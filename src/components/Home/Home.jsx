import React, { useEffect } from "react"
import "./Home.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../UI/Button/Button"
import "video-react/dist/video-react.css"
import { useI18next } from "gatsby-plugin-react-i18next"

// import AOS from 'aos';
// import "aos/dist/aos.css";

const Home = () => {
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
    query Home {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/home.md$/" }
          frontmatter: { en: {} }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                title_before
            title_after
            mark_text
            subtitle
            button
            button_url
            home_brands {
              icon
            }
              }
              en {
                title_before
            title_after
            mark_text
            subtitle
            button
            button_url
            home_brands {
              icon
            }
              }
            }
          }
        }
      }
    }
  `)


  return (
    <div className="home">
      <div className="container">
        <div className="home__header" data-aos="fade-up">
          <h1 className="home__header-title-h1">
          {frontmatter[language].title_before}{" "}<br/>
            <span className="home__header-title-h1-mark">
              {frontmatter[language].mark_text} <br />{" "}
            </span>
            {frontmatter[language].title_after}
          </h1>
          <h2 className="home__header-title-secondary-text">
            {frontmatter[language].subtitle}
          </h2>

          <div data-aos="slide-up">
            <Button
              text={frontmatter[language].button}
              type="primaryViolet"
              className="home__button"
              href = {frontmatter[language].button_url}
            />
          </div>
        </div>
        <div className="home__brand">
          <ul className="home__brand--list" data-aos="fade-up">
            {/* {nodes.reverse().map((brand) => (
              <li className="home__brand--list-item" key={brand.gatsbyImageData.images.fallback.src}>
                <GatsbyImage image={getImage(brand.gatsbyImageData)} alt="brand" />
              </li>
            ))} */}
            {frontmatter[language].home_brands.map(({icon})=>
            <li className = "home__brand--list-item" key = {icon} >
              <img src = {icon} />
            </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
