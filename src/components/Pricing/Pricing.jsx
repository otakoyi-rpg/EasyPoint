import React from 'react';
import './Pricing.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Checkbox from '../images/Checkbox';
import CheckboxReverse from '../images/CheckboxReverse';
import Button from '../UI/Button/Button';

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query Pricing {
      background: imageSharp(fluid: { originalName: { eq: "pricingBackground.png" } }) {
        gatsbyImageData
      }
      backgroundFooter: imageSharp(fluid: { originalName: { eq: "mask.png" } }) {
        gatsbyImageData
      }
    }
  `);

  const content = [
    {
      name: 'Basic',
      cost: 50,
      permonth: ' $0.25customer ',
      after: 'after 500',
      currency: '$',
      period: 'month',
      benefits: ['Up to 500 active* customers', 'Setup included', 'Shopify integration', ' Shopify cart adjustment'],
      active: false,
    },
    {
      name: 'Advanced',
      cost: 100,
      permonth: ' $0.25/customer ',
      after: 'after 1,000',
      currency: '$',
      period: 'month',
      benefits: ['Up to 500 active* customers', 'Setup included', 'Shopify integration', ' Shopify cart adjustment'],
      active: true,
    },
    {
      name: 'Pro',
      cost: 200,
      permonth: ' $0.20/customer ',
      after: 'after 2,000',
      currency: '$',
      period: 'month',
      benefits: ['Up to 500 active* customers', 'Setup included', 'Shopify integration', ' Shopify cart adjustment'],
      active: false,
    },
    {
      name: 'Enterprise',
      cost: 425,
      permonth: ' $0.17/customer ',
      after: 'after 5,000',
      currency: '$',
      period: 'month',
      benefits: ['Up to 500 active* customers', 'Setup included', 'Shopify integration', ' Shopify cart adjustment'],
      active: false,
    },
  ];

  const blockClass = 'pricing__content-block';
  const activeClass = 'pricing__content-block pricing__content-block-active';

  return (
    <div className="pricing" id="pricing">
      <GatsbyImage
        image={getImage(data.background.gatsbyImageData)}
        aria-hidden="true"
        className="pricing__background"
        alt="background"
      />
      <div className="container">
        <div className="pricing__header">
          <p className="pricing__header-anchor" data-aos="fade-up"  data-aos-delay="150">Pricing</p>
          <h2 className="pricing__header-title" data-aos="fade-up" data-aos-delay="200">Four plans offered</h2>
          <p className="pricing__header-text"  data-aos="fade-up" data-aos-delay="250" >
            Every business is unique. No matter how big or small your business is, EasyPoints has a plan that suits your needs.
          </p>
        </div>
        <div className="pricing__content">
          {content.map((elem) => (
            <div className={elem.active ? activeClass : blockClass} key={elem.name + elem.cost + elem.period} data-aos="fade-up" data-aos-delay={200}>
              <div className="pricing__content-block-name">
                {elem.name}
              </div>
              <div className="pricing__content-block-price">
                <h2 className="pricing__content-block-price-cost">
                  $
                  {elem.cost}
                  
                </h2>

                <span className="pricing__content-block-price-period">/{elem.period}
                </span>
              </div>
              <div className="pricing__content-block-description">
                {elem.permonth}
                {' '}
                {elem.after}
              </div>
              <ul className="pricing__content-block-list">
                {elem.benefits.map((benefit) => (
                  <li className="pricing__content-block-list-item" key={benefit}>
                    {elem.active ? <CheckboxReverse /> : <Checkbox />}

                    <span className="pricing__content-block-list-item-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pricing__offer-wrapper">

          <div className="pricing__offer">
            <GatsbyImage
              image={getImage(data.backgroundFooter.gatsbyImageData)}
              aria-hidden="true"
              className="pricing__offer-background"
              alt="offer background"
            />
            <div className="pricing__offer-defenition">
              <h3 className="pricing__offer-defenition-title">
                EasyPoints offers a loyalty system
                that rewards customers plans offered
              </h3>
              <p className="pricing__offer-defenition-text">
                EasyPoints offers a loyalty system
                that rewards customers plans offered
              </p>
            </div>
            <div className="pricing__offer-defenition">
              <Button type="secondary" text="Shopify App Store" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Pricing;
