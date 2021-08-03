import React from 'react';
import './AppleLink.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const AppleLink = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
            query Apple {
              allImageSharp(
                filter: {
                  fluid: { originalName: { regex: "/.*(feedbackIconApple|feedbackIconTextApple).*/" } }
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
        <GatsbyImage image={getImage(nodes[0].gatsbyImageData)} alt="apple li" />
      </div>
      <div className="apple__text">
        <div className="apple__text-download">Download on the</div>
        <div className="apple__text-name">
          <GatsbyImage image={getImage(nodes[1].gatsbyImageData)} alt="apple" />

        </div>
      </div>
    </a>
  );
};

export default AppleLink;
