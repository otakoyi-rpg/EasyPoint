import React from "react"
import "./Benefits.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../UI/Button/Button"
import { useI18next } from "gatsby-plugin-react-i18next"

const Benefits = () => {
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
    query Benefits {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/benefits.md$/" }
          frontmatter: { en: {} }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                anchor
                title
                subtitle
                benefits_block {
                  image
                  title
                  text
                }
                benefit_bottom_title
                benefit_bottom_subtitle
                button
                button_url
                background_bottom
              }
              en {
                anchor
                title
                subtitle
                benefits_block {
                  image
                  title
                  text
                }
                benefit_bottom_title
                benefit_bottom_subtitle
                button
                button_url
                background_bottom
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="benefits" id="benefits">
      <div className="container">
        <div className="benefits__header">
          <p
            className="benefits__header-anchor"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {frontmatter[language].anchor}
          </p>
          <h2
            className="benefits__header-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {frontmatter[language].title}
          </h2>
          <p
            className="benefits__header-text"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {frontmatter[language].subtitle}
          </p>
        </div>
        <div className="benefits__main">
          {frontmatter[language].benefits_block.map(elem => (
            <div className="benefits__main-block" key={elem.title + elem.text}>
              <div
                className="benefits__main-block-image"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                {/* <div className = 'benefits__wrap' ></div> */}
                <div className="benefits__image-wrap">
                  <img
                    src={elem.image}
                    alt=""
                    className="benefits__main-block-image-picture"
                  />
                </div>
              </div>
              <div
                className="benefits__main-block-text"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <h3 className="benefits__main-block-text-title">
                  {elem.title}
                </h3>
                <p className="benefits__main-block-text-paragraph">
                  {elem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="benefits__footer">
        <img
          src={frontmatter[language].background_bottom}
          className="benefits__footer-background"
          alt=""
        />
        <div className="container">
          <div className="benefits__footer-header">
            <h2 className="benefits__footer-header-title">
              {frontmatter[language].benefit_bottom_title}
            </h2>
            <p className="benefits__footer-header-text">
              {frontmatter[language].benefit_bottom_subtitle}
            </p>
            <Button type="secondary" text={frontmatter[language].button} href={frontmatter[language].button_url}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
