import React from 'react';
import './Android.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const AppleLink = ({text}) => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
            query Android {
              allImageSharp(
                filter: {
                  fluid: { originalName: { regex: "/.*(feedbackIconAndroid|feedbackIconTextGoogle).*/" } }
                }
              ) {
                nodes {
                  gatsbyImageData
                }
              }
            }
          `);

  const a = 1;
  return (
    <a href="#" className="apple">
      <div className="apple__icon">
        <GatsbyImage image={getImage(nodes[0].gatsbyImageData)} alt = 'android' />
      </div>
      <div className="apple__text">
        <div className="apple__text-download">{text}</div>
        <div className="apple__text-name">
          <GatsbyImage image={getImage(nodes[1].gatsbyImageData)} alt = 'andriod' />

        </div>
      </div>
    </a>
  );
};

export default AppleLink;
