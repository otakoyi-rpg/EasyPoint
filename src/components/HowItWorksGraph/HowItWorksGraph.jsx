import React from 'react';
import './HowItWorksGraph.scss';

const HowItWorksGraph = ({graph}) => {


  return (
    <div className="how-it-works-graph" data-aos="fade-up" data-aos-delay="250">
      <div className="how-it-works-graph__image">
        <img src={graph} />
      </div>
    </div>
  );
};
export default HowItWorksGraph;
