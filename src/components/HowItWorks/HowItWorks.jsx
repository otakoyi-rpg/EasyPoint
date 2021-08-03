import React from 'react';
import './HowItWorks.scss';
import { useStaticQuery, graphql } from 'gatsby';
import HowItWorksSlider from '../HowItWorksSlider/HowItWorksSlider';
import HowItWorksGraph from '../HowItWorksGraph/HowItWorksGraph';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import "video-react/dist/video-react.css";
import video from '../../video/trailer_hd.mp4'
import { useI18next } from 'gatsby-plugin-react-i18next';


const HowItWorks = () => {
  const {language} = useI18next()

  // const data = useStaticQuery(graphql`
  //   query HowItWorks {
  //     bg: imageSharp(fluid: { originalName: { eq: "BG.png" } }) {
  //       gatsbyImageData
  //     }
  //     poster: imageSharp(fluid: { originalName: { eq: "poster-video.png" } }) {
  //       gatsbyImageData
  //     }
  //   }
  // `);

  const {allMarkdownRemark:{edges:[{node:{frontmatter}}]}} = useStaticQuery(graphql`
  query HowItWorks1 {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/how-it-work.md$/"}, frontmatter: {en: {}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            jp {
              title
              anchor
              subtitle
              background
              poster
              how_it_works_slider {
                icon
                title
                text
              }
              graph
            }
            en {
              title
              anchor
              subtitle
              background
              poster
              how_it_works_slider {
                icon
                title
                text
              }
              graph
            }
          }
        }
      }
    }
  }
`);



  // const image = getImage(data.bg.gatsbyImageData);
  // const poster = getImage(data.poster.gatsbyImageData);

  return (
    <div className="how-it-works" >
      {/* <GatsbyImage
        className="how-it-works__background"
        image={image}
        aria-hidden="true"
        alt="background"
      /> */}
  <img src={frontmatter[language].background} alt="" className = "how-it-works__background" />
      <div className="container">
        <div className = "how-it-works__video" data-aos="fade-up" >
        {/* <div className = "how-it-works__video"  > */}


        <Player
            playsInline
            poster={frontmatter[language].poster}
            src={video}
          >
            <BigPlayButton position="center" className="home__video-play-button" />
          </Player>
        </div>
      
        <div className="how-it-works__header" >
          <div id="how-it-work">
          <p className="how-it-works__header-anchor"  data-aos="fade-up"  data-aos-offset="150">{frontmatter[language].anchor}</p>
          </div>
          <h2 className="how-it-works__header-title" data-aos="fade-up" data-aos-delay="200">
          {frontmatter[language].title}
          </h2>
          <p className="how-it-works__header-secondary-text" data-aos="fade-up" data-aos-delay="250" >
          {frontmatter[language].subtitle}
          </p>
        </div>
        <HowItWorksSlider frontmatter ={frontmatter[language].how_it_works_slider} />
        <HowItWorksGraph graph = {frontmatter[language].graph} />
      </div>
    </div>
  );
};

export default HowItWorks;
