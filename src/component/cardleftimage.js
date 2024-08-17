import React from 'react';
import './css/cardimage.css';
import './css/cardanimations.css';
import image4 from './images/image4.jpg';

/*
export const CardLeftImage = () => {
  return (
    <div className="card mb-3 my-3 mx-5 border-0 text-align-center">
      <div className="row g-0">
        <div className="col-md-4 zoom-in">
          <img src={image4} 
            className="img-fluid rounded-start fixed-size-image" alt="Card Image"/>
        </div>
        <div className="col-md-8 fade-in">
          <div className="card-body">
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

export const CardLeftImage = () => {
  return (
    <div className="card mb-3 my-3 mx-5 border-0 text-align-center">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image4} 
            className="img-fluid rounded-start fixed-size-image" alt="Card Image"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">
            <b>Palmistry is an ancient art that offers a unique glimpse into your soul.</b> Your hands, a roadmap of your life, hold clues to your personality, strengths, challenges, and potential. By understanding the intricate lines and mounts on your palm, you can gain valuable insights into your past, present, and future. It's not about predicting the future, but uncovering your inherent qualities and making informed choices. Experience the magic of self-discovery through palmistry.
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardLeftImage;
