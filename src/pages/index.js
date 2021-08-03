import * as React from 'react';
import { useEffect } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Features from '../components/Features/Features';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import Benefits from '../components/Benefits/Benefits';
import Pricing from '../components/Pricing/Pricing';
import Feedback from '../components/Feedback/Feedback';
import Faq from '../components/Faq/Faq';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";



const IndexPage = () => {

  useEffect(() => {
    AOS.init({
        duration: 700,
      })
  },[])


 return  <div id="main">
    <Header/>
    <Home />
    <HowItWorks />
    <Features />
    <WhatWeOffer />
    <Benefits />
    <Pricing />
    <Feedback />
    <Faq />
    <Form />
    <Footer /> 
    
  </div>
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
