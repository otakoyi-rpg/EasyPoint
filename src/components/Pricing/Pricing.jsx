import React from "react"
import "./Pricing.scss"
import { useStaticQuery, graphql } from "gatsby"
import Checkbox from "../images/Checkbox"
import CheckboxReverse from "../images/CheckboxReverse"
import Button from "../UI/Button/Button"
import { useI18next } from "gatsby-plugin-react-i18next"

const Pricing = () => {
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
    query Pricing {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/pricing.md$/" }
          frontmatter: { en: {} }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                background
                anchor
                title
                subtitle
                pricing_benefits_block {
                  name
                  cost
                  permonth
                  after
                  currency
                  period
                  active
                  pricing_benefits {
                    benefits_item
                  }
                }
                background_bottom
                title_bottom
                subtitle_bottom
                button_bottom
                button_bottom_url
              }
              en {
                background
                anchor
                title
                subtitle
                pricing_benefits_block {
                  name
                  cost
                  permonth
                  after
                  currency
                  period
                  active
                  pricing_benefits {
                    benefits_item
                  }
                }
                background_bottom
                title_bottom
                subtitle_bottom
                button_bottom
                button_bottom_url
              }
            }
          }
        }
      }
    }
  `)

  const blockClass = "pricing__content-block"
  const activeClass = "pricing__content-block pricing__content-block-active"

  return (
    <div className="pricing" id="pricing">
      {/* <GatsbyImage
        image={getImage(data.background.gatsbyImageData)}
        aria-hidden="true"
        className="pricing__background"
        alt="background"
      /> */}

      <img
        src={frontmatter[language].background}
        alt=""
        className="pricing__background"
      />
      <div className="container">
        <div className="pricing__header">
          <p
            className="pricing__header-anchor"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {frontmatter[language].anchor}
          </p>
          <h2
            className="pricing__header-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {frontmatter[language].title}
          </h2>
          <p
            className="pricing__header-text"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {frontmatter[language].subtitle}
          </p>
        </div>
        <div className="pricing__content">
          {frontmatter[language].pricing_benefits_block.map(elem => (
            <div
              className={elem.active ? activeClass : blockClass}
              key={elem.name + elem.cost + elem.period}
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="pricing__content-block-name">{elem.name}</div>
              <div className="pricing__content-block-price">
                <h2 className="pricing__content-block-price-cost">
                  ${elem.cost}
                </h2>

                <span className="pricing__content-block-price-period">
                  /{elem.period}
                </span>
              </div>
              <div className="pricing__content-block-description">
                {elem.permonth} {elem.after}
              </div>
              <ul className="pricing__content-block-list">
                {elem.pricing_benefits.map(({ benefits_item }) => (
                  <li
                    className="pricing__content-block-list-item"
                    key={benefits_item}
                  >
                    {elem.active ? <CheckboxReverse /> : <Checkbox />}

                    <span className="pricing__content-block-list-item-text">
                      {benefits_item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pricing__offer-wrapper">
          <div className="pricing__offer">
            {/* <GatsbyImage
              image={getImage(data.backgroundFooter.gatsbyImageData)}
              aria-hidden="true"
              className="pricing__offer-background"
              alt="offer background"
            /> */}
            <img
              src={frontmatter[language].background_bottom}
              className="pricing__offer-background"
            />
            <div className="pricing__offer-defenition">
              <h3 className="pricing__offer-defenition-title">
                {frontmatter[language].title_bottom}
              </h3>
              <p className="pricing__offer-defenition-text">
                {frontmatter[language].subtitle_bottom}
              </p>
            </div>
            <div className="pricing__offer-defenition">
              <Button
                type="secondary"
                text={frontmatter[language].button_bottom}
                href={frontmatter[language].button_bottom_url}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
