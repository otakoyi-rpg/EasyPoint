import React, { useState } from "react"
import "./Faq.scss"
import Menu from "../UI/Menu/Menu"
import Button from "../UI/Button/Button"
import Accordion from "../UI/Accordion/Accordion"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

const Faq = () => {
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
    query FAQ {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/faq.md$/" }
          frontmatter: { en: {} }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                title
                faq_list {
                  title
                  children {
                    title
                    content
                  }
                }
                button
                button_url
              }
              en {
                title
                faq_list {
                  title
                  children {
                    title
                    content
                  }
                }
                button
                button_url
              }
            }
          }
        }
      }
    }
  `)

  // const date = useStaticQuery(graphql`
  //   query try {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             title
  //             description
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }

  // `)

  // console.log(date);

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleGetIndex = index => {
    setCurrentIndex(index)
  }

  const arr = [
    {
      title: "Integration",
      children: [
        {
          title: "What is a mockup?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Can I cancel EasyPoints after the mockup or integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Is there anything I should not touch after integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "What should I not touch during integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "How long does a custom integration take?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "How long does a custom integration take about?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
      ],
    },
    {
      title: "Pricing",
      children: [
        {
          title: "What is a mockup?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Can I cancel EasyPoints after the mockup or integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Is there anything I should not touch after integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "What should I not touch during integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "How long does a custom integration take?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
      ],
    },
    {
      title: "Settings",
      children: [
        {
          title: "What is a mockup?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Can I cancel EasyPoints after the mockup or integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Is there anything I should not touch after integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "What should I not touch during integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
      ],
    },
    {
      title: "Points and Purchases",
      children: [
        {
          title: "What is a mockup?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Can I cancel EasyPoints after the mockup or integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Is there anything I should not touch after integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
      ],
    },
    {
      title: "Compatibility and Limitations",
      children: [
        {
          title: "What is a mockup?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "Can I cancel EasyPoints after the mockup or integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "What dis a mockup?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
          content: "Description 3",
        },
      ],
    },
    {
      title: "Additional features",
      children: [
        {
          title: "What should I not touch during integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "How long does a custom integration take?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "How long does a custom integration take about?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
      ],
    },
    {
      title: "Additional features",
      children: [
        {
          title: "What should I not touch during integration?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "How long does a custom integration take?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
        {
          title: "How long does a custom integration take about?",
          content:
            "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
        },
      ],
    },
  ]

  return (
    <div className="faq__wrapper" id="faq">
      <div className="container">
        <div className="faq">
          <h2 className="faq__title" data-aos="fade-up" data-aos-delay="200">
            {frontmatter[language].title}
          </h2>
          <div className="faq__navigation">
            <div className="faq__navigation-menu">
              <Menu handleGetIndex={handleGetIndex} data={frontmatter[language].faq_list} />
              <div
                className="faq__navigation-menu-button"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <Button
                  text={frontmatter[language].button}
                  type="primaryViolet"
                  className="faq__navigation-menu-button-btn"
                  href = {frontmatter[language].button_url}
                />
              </div>
            </div>
            <div className="faq__navigation-accordion">
              <Accordion data={frontmatter[language].faq_list[currentIndex].children} />
              <div className="faq__navigation-accordion-button">
                {true && <Button text={frontmatter[language].button} type="primaryViolet" href = {frontmatter[language].button_url} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
