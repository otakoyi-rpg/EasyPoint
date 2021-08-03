import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./FeaturesContent.scss"

const FeaturesContent = ({ content }) => {
  const ref = useRef()
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query HowItWorksSld22 {
      allImageSharp(
        filter: {
          fluid: {
            originalName: {
              regex: "/.*(features1|features2|features3|features4|features5|features6).*/"
            }
          }
        }
      ) {
        nodes {
          gatsbyImageData
        }
      }
    }
  `)

  const [hig, setHig] = useState("auto")

  useEffect(() => {
    setTimeout(() => {
      const arr = document.querySelectorAll(".features__content-block")
      const arrSort = [...arr]
        .sort((a, b) => a.clientHeight - b.clientHeight)
        .map(({ clientHeight }) => clientHeight)

      setHig(arrSort[arrSort.length - 1])
    }, 1000)
  }, [])

  return (
    <div className="features__content">
      {content.map((el, index) => (
        <div
          className="features__content-block"
          key={el.text + el.title}
          data-aos="fade-up"
          data-aos-delay={100 * index}
          ref={ref}
          style={{ height: hig }}
        >
          <div className="features__content-block-image">
            <img src={el.icon} />
          </div>
          <h4 className="features__content-block-title">{el.title}</h4>
          <div className="features__content-block-text">{el.text}</div>
        </div>
      ))}
    </div>
  )
}

export default FeaturesContent
