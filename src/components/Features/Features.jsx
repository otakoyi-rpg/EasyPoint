import React from "react"
import "./Features.scss"
import FeaturesContent from "../FeaturesContent/FeaturesContent"
import { useI18next } from "gatsby-plugin-react-i18next"
import { useStaticQuery, graphql } from "gatsby"

const Features = () => {
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
    query Features {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/features.md$/"}, frontmatter: {en: {}}}
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                anchor
                title
                subtitle
                features_block {
                  icon
                  title
                  text
                }
              }
              en {
                anchor
                title
                subtitle
                features_block {
                  icon
                  title
                  text
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="features" id="features">
      <div className="container">
        <div className="features__header">
          <p
            className="features__header-anchor"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {frontmatter[language].anchor}
          </p>
          <h2
            className="features__header-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
           {frontmatter[language].title}
          </h2>
          <p
            className="features__header-text"
            data-aos="fade-up"
            data-aos-delay="250"
          >
           {frontmatter[language].subtitle}
          </p>
        </div>
        <FeaturesContent content = {frontmatter[language].features_block} />
      </div>
    </div>
  )
}

export default Features
