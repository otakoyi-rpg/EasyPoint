import React from "react"
import "./WhatWeOffer.scss"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import DoubleButton from "../UI/DoubleButton/DoubleButton"
import Checkbox from "../images/Checkbox"
import Uncheckbox from "../images/Uncheckbox"
import Button from "../UI/Button/Button"
import { useI18next } from "gatsby-plugin-react-i18next"

const WhatWeOffer = () => {
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
    query What_we_offer {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/what-we-offer.md$/" }
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
                double_first
                double_second
                graph
                list_title
                list_item {
                  status
                  cont
                }
                button
              }
              en {
                background
                anchor
                title
                subtitle
                double_first
                double_second
                graph
                list_title
                list_item {
                  status
                  cont
                }
                button
              }
            }
          }
        }
      }
    }
  `)

  //   const data = useStaticQuery(graphql`
  //   query HowItWorks333 {
  //     background: imageSharp(fluid: { originalName: { eq: "whatWeOfferBackground.png" } }) {
  //       gatsbyImageData
  //     }
  //     image: imageSharp(fluid: { originalName: { eq: "whatWeOfferGraph.png" } }) {
  //       gatsbyImageData
  //     }
  //   }
  // `);

  const content = [
    {
      status: true,
      cont: "Customizable integrations with your shop’s branding",
    },
    {
      status: true,
      cont: "Easy to understand and use",
    },
    {
      status: true,
      cont: "Point display on product pages",
    },
    {
      status: true,
      cont: "Better user experience and engagement",
    },
    {
      status: true,
      cont: "Bonus features not available on widget",
    },
    {
      status: false,
      cont: "Quick to install",
    },
  ]

  return (
    <div className="what-we-offer">
      {/* <GatsbyImage
        image={getImage(data.background.gatsbyImageData)}
        aria-hidden="true"
        className="what-we-offer__background"
        alt = 'background'
      /> */}
      <img src={  frontmatter[language].background} alt="background" className = 'what-we-offer__background' />
      <div className="container">
        <div className="what-we-offer__header">
          <p
            className="what-we-offer__header-anchor"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {frontmatter[language].anchor}
          </p>
          <h2
            className="what-we-offer__header-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {frontmatter[language].title}
          </h2>
          <p
            className="what-we-offer__header-text"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {frontmatter[language].subtitle}
          </p>
          <DoubleButton firstText = {frontmatter[language].double_first} secondText = {frontmatter[language].double_second} />
        </div>
        <div className="what-we-offer__content">
          <div
            className="what-we-offer__content-graph"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {/* <GatsbyImage
              image={getImage(data.image.gatsbyImageData)}
              aria-hidden="true"
              alt = "icon"
            /> */}
      <img src={  frontmatter[language].graph} alt="graph"  />

          </div>

          <div className="what-we-offer__content-custom">
            <h3 className="what-we-offer__content-custom-title">
              {frontmatter[language].list_title}{" "}
            </h3>

            <ul className="what-we-offer__content-custom-list">
              {frontmatter[language].list_item.map(({status, cont}, index) => (
                <li
                  className="what-we-offer__content-custom-list-item"
                  key={cont}
                  data-aos="fade-up"
                  data-aos-delay={100 * `${index}`}
                >
                  {status ? (
                    <Checkbox className="what-we-offer__checkbox" />
                  ) : (
                    <Uncheckbox />
                  )}
                  <span className="what-we-offer__content-custom-list-item-text">
                    {cont}
                  </span>
                </li>
              ))}
            </ul>
            <div className="what-we-offer__content-custom-button">
              <Button text={frontmatter[language].button} type="primaryViolet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer
