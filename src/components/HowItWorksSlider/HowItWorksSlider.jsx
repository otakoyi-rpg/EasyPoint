import React from "react"
import "./HowItWorksSlider.scss"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import HeartIcon from "../images/HeartIcon"
import ArrowDownIcon from "../images/ArrowDownIcon"
import EarnIcon from "../images/EarnIcon"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, { Pagination } from "swiper/core"

SwiperCore.use([Pagination])

const HowItWorksSlider = ({frontmatter}) => {
  const pagination = {
    clickable: true,
    el: ".how-it-works .swiper-pagination",
    renderBullet(index, className) {
      return `<span class=\"${className}\"></span>`
    },
  }

  return (
    <div className="how-it-works__slider">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={pagination}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            580: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <div className="swiper-pagination" />

          {frontmatter.map((slide) => (
            <SwiperSlide pagination="true" key={slide.text + slide.title}>
              {/* <div className="slide" data-aos="fade-up" data-aos-delay={350 * `${index}`}> */}
              <div className="slide">
                <div className="slide__image-wrapper">
                  <div className="slide__image">
                    <img src = {slide.icon}/>
                  </div>
                </div>
                <div className="slide__text-wrpper">
                  <h4 className="slide__title">{slide.title}</h4>
                  <p className="slide__text">{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div></div>
    </div>
  )
}

export default HowItWorksSlider
