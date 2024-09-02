import React from 'react';
import './css/cardimage.css';
import './css/cardanimations.css';
import image5 from './images/image5.jpg'

export const CardRightImage = () => {
  return (
    <div className="card mb-3 my-3 mx-5 border-0">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">
            <b>Palmistry can unveil a wealth of information about you.</b> Discover hidden aspects of your personality, understand your strengths and weaknesses, gain insights into your career path, and explore potential challenges and opportunities. Uncover your love life compatibility, explore your health and vitality, and even catch a glimpse of major life events. Palmistry is a tool for self-discovery and personal growth, offering a unique perspective on your life journey.
            </p>
            <p className="card-text"><small className="text-muted">Try for yourself and learn more</small></p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={image5} 
            className="img-fluid rounded-start fixed-size-image" alt="Right card"/>
        </div>
      </div>
    </div>
  );
}

export default CardRightImage;
