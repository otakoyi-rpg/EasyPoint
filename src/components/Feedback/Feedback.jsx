import React from 'react';
import './Feedback.scss';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, {
  EffectFlip, Pagination, Navigation,
} from 'swiper/core';
import AppleLink from '../UI/AppleLink/AppleLink';
import Android from '../UI/Android/Android';
import Button from '../UI/Button/Button';
import Star from '../images/Star';

SwiperCore.use([EffectFlip, Pagination, Navigation]);

const Feedback = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
        query Feedback {
          allImageSharp(
            filter: {
              fluid: { originalName: { regex: "/.*(feedbackBrand1|feedbackBrand2|feedbackBrand3|feedbackFoterBackground|feedBackPhone).*/" } }
            }
          ) {
            nodes {
              gatsbyImageData
            }
          }
        }
      `);

      const images = nodes.sort((a,b)=> a.gatsbyImageData.width - b.gatsbyImageData.width);


      // imageSharp(fluid: { originalName: { eq: "headerLogo.png" } }) {
      //   gatsbyImageData
      // }
      // imageSharp(fluid: { originalName: { eq: "headerLogo.png" } }) {
      //   gatsbyImageData
      // }


  const content = [
    {
      brand: images[1].gatsbyImageData,
      type: 'Fashion',
      raiting: '',
      text: 'Thank you. I gained 2500 users thanks to EasyPoints. People really like rewarding programs.',
      hours: '8:30 AM',
      date: 'Mar 20, 2021',
      rating: 5,
    },
    {
      brand: images[0].gatsbyImageData,
      type: 'Shoes',
      raiting: '',
      text: '上のリワードポイントアプリを使用していたのですが、日本式のような「●円で1ポイント」といった使い方を指定できず困っておりました。こちらのアプリをド乳したことで、他社ECモールと同 ...',
      hours: '2:20 PM',
      date: 'Mar 19, 2021',
      rating: 4,
    },
    {
      brand: images[2].gatsbyImageData,
      type: 'Cosmetics',
      raiting: '',
      text: 'のアプリにポイントを簡易的に実装するものがないので非常に使いやすいと思います（いくつか海外のアプリがあるが日本では馴染みのないシステムすぎて使いづらい）。管理も用意で、担当の方 ...',
      hours: '10:13 PM',
      date: 'Aug 21, 2020',
      rating: 3,
    },
    {
      brand: images[1].gatsbyImageData,
      type: 'Fashion',
      text: 'Thank you. I gained 2500 users thanks to EasyPoints. People really like rewarding programs.',
      hours: '8:30 AM',
      date: 'Mar 20, 2021',
      rating: 1,
    },
    {
      brand: images[0].gatsbyImageData,
      type: 'Shoes',
      raiting: '',
      text: '上のリワードポイントアプリを使用していたのですが、日本式のような「●円で1ポイント」といった使い方を指定できず困っておりました。こちらのアプリをド乳したことで、他社ECモールと同 ...',
      hours: '2:20 PM',
      date: 'Mar 19, 2021',
      rating: 4,
    },
    {
      brand: images[2].gatsbyImageData,
      type: 'Cosmetics',
      raiting: '',
      text: 'のアプリにポイントを簡易的に実装するものがないので非常に使いやすいと思います（いくつか海外のアプリがあるが日本では馴染みのないシステムすぎて使いづらい）。管理も用意で、担当の方 ...',
      hours: '10:13 PM',
      date: 'Aug 21, 2020',
      rating: 1,
    },
  ];

  return (
    <div className="feedback" id="feedback">
      <div className="container">
        <div className="feedback__header">
          <p className="feedback__header-anchor"  data-aos="fade-up"  data-aos-delay="150" >Feedback</p>
          <h2 className="feedback__header-title" data-aos="fade-up" data-aos-delay="200">
            What our users say
          </h2>
          <p className="feedback__header-text" data-aos="fade-up" data-aos-delay="250" >

            Every business is unique. No matter how big or small your business is, EasyPoints has a plan that suits your needs.
          </p>
        </div>
        <div className="feedback__slider">

          <Swiper
            className="sliderWrapper"
            grabCursor
            watchSlidesVisibility
            pagination={{
              el: '.feedback .swiper-pagination',
              type: 'bullets',
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
                spaceBetween: 20,
              },
            }}

            navigation
          >
            {content.map((slide) => (
              <SwiperSlide key={Math.random()}>
                {/* <div className="feedback__slider-block" data-aos="fade-up" data-aos-delay="200"> */}
                <div className="feedback__slider-block">
                  <div>
                    <div className="feedback__slider-block-logo">
                      <div className="feedback__slider-block-logo-img">
                        <GatsbyImage image={getImage(slide.brand)} alt={slide.type} />
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
                    {/* <span className="feedback__slider-block-date-hour">{slide.hours}</span>
                    <span className="feedback__slider-block-date-month">{slide.date}</span> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
          <div className="feedback__slider-bullet">
            <div className="swiper-pagination" />
          </div>
          <div className="feedback__slider-button">
            <Button text="More feedbacks" type="secondary" />
          </div>
        </div>

      </div>
      <div className="feedback__footer">
        <GatsbyImage className="feedback__footer-background" image={getImage(images[4].gatsbyImageData)} alt="background" />
        <div className="container">
          <div className="feedback__footer-content">
            <div className="feedback__footer-content-link">
              <div className="feedback__footer-content-link-icons">
                <div className = 'feedback__footer-content-link-icons-android'>
                  <Android />
                </div>
                <div className = 'feedback__footer-content-link-icons-apple'>
                  <AppleLink />
                </div>
              </div>
              <h2 className="feedback__footer-content-title" data-aos="fade-up" data-aos-delay="200">
                Rewarding your customers just got a whole lot easier with EasyPoints
              </h2>
              <div className="feedback__footer-content-text" data-aos="fade-up" data-aos-delay="300">
                EasyPoints introduces a foolproof point system that
                turns points into discounts right from the checkout page. Earn points and spend points. It’s really that simple.
              </div>
              <Button text="Read more" type="secondary" />
            </div>
            <div className="feedback__footer-content-phone" data-aos="fade-up" data-aos-offset="500">
              <GatsbyImage image={nodes[3].gatsbyImageData} alt="phone" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feedback;
