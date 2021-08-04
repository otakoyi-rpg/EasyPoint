import React from "react"
import "./Feedback.scss"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import { Swiper, SwiperSlide } from "swiper/react"

import SwiperCore, { EffectFlip, Pagination, Navigation } from "swiper/core"
import AppleLink from "../UI/AppleLink/AppleLink"
import Android from "../UI/Android/Android"
import Button from "../UI/Button/Button"
import Star from "../images/Star"
import { useI18next } from "gatsby-plugin-react-i18next"

SwiperCore.use([EffectFlip, Pagination, Navigation])

const Feedback = () => {
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
    query Feedback {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/feedback.md$/" }
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
                button_top
                button_top_url
                feedback_slider {
                  brand
                  type
                  text
                  hours
                  date
                  rating
                }
                bottom_background
                google_text
                apple_text
                bottom_title
                bottom_subtitle
                button
                button_url
                bottom_image
              }
              en {
                anchor
                title
                subtitle
                button_top_url
                button_top
                feedback_slider {
                  brand
                  type
                  text
                  hours
                  date
                  rating
                }
                bottom_background
                google_text
                apple_text
                bottom_title
                bottom_subtitle
                button
                button_url
                bottom_image
              }
            }
          }
        }
      }
    }
  `)


  return (
    <div className="feedback" id="feedback">
      <div className="container">
        <div className="feedback__header">
          <p
            className="feedback__header-anchor"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {frontmatter[language].anchor}
          </p>
          <h2
            className="feedback__header-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {frontmatter[language].anchor}
          </h2>
          <p
            className="feedback__header-text"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {frontmatter[language].subtitle}
          </p>
        </div>
        <div className="feedback__slider">
          <Swiper
            className="sliderWrapper"
            grabCursor
            watchSlidesVisibility
            pagination={{
              el: ".feedback .swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            a11y={{
              enabled: true,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              780: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation
          >
       
             {frontmatter[language].feedback_slider.map((slide) => (
              <SwiperSlide key={Math.random()}>
                <div className="feedback__slider-block" data-aos="fade-up" data-aos-delay="200">
                  <div className="feedback__slider-wrap">
                  <div>
                    <div className="feedback__slider-block-logo">
                      <div className="feedback__slider-block-logo-img">
                        {/* <GatsbyImage image={getImage(slide.brand)} alt={slide.type} /> */}
                        <img src={slide.brand} alt="" />
                      </div>
                      <div className="feedback__slider-block-logo-type">{slide.type}</div>
                    </div>
                    <div className="feedback__slider-block-rating">
                      {Array(5).fill(null).map((_, index) => (index + 1 <= slide.rating
                        ? <Star key={Math.random()} />
                        : <Star color="silver" key={Math.random()} />))}
                    </div>
                    <div className="feedback__slider-block-text">{slide.text}</div>
                  </div>
                  <div className="feedback__slider-block-date">
                    <span className="feedback__slider-block-date-hour">{slide.hours}</span>
                    <span className="feedback__slider-block-date-month">{slide.date}</span>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="feedback__slider-bullet">
            <div className="swiper-pagination" />
          </div>
          <div className="feedback__slider-button">
            <Button text={frontmatter[language].button_top} href = {frontmatter[language].button_top_url} type="secondary" />
          </div>
        </div>
      </div>
      <div className="feedback__footer">
        {/* <GatsbyImage className="feedback__footer-background" image={getImage(images[4].gatsbyImageData)} alt="background" /> */}
        <img src={frontmatter[language].bottom_background} alt="bottom background" className="feedback__footer-background" />
        <div className="container">
          <div className="feedback__footer-content">
            <div className="feedback__footer-content-link">
              <div className="feedback__footer-content-link-icons">
                <div className="feedback__footer-content-link-icons-android">
                  <Android text = {frontmatter[language].google_text} />
                </div>
                <div className="feedback__footer-content-link-icons-apple">
                  <AppleLink text = {frontmatter[language].apple_text} />
                </div>
              </div>
              <h2
                className="feedback__footer-content-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {frontmatter[language].bottom_title}
              </h2>
              <div
                className="feedback__footer-content-text"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {frontmatter[language].bottom_subtitle}

              </div>
              <Button text={frontmatter[language].button} href = {frontmatter[language].button_url} type="secondary" />
            </div>
            <div
              className="feedback__footer-content-phone"
              data-aos="fade-up"
              data-aos-offset="500"
            >
              {/* <GatsbyImage image={nodes[3].gatsbyImageData} alt="phone" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
