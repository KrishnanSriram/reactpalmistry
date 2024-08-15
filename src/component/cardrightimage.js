import React from 'react';
import './css/cardimage.css';
import './css/cardanimations.css';
import image5 from './images/image5.jpg'

/*
export const CardRightImage = () => {
  return (
    <div className="card mb-3 my-3 mx-5 border-0">
      <div className="row g-0">
        <div className="col-md-8 fade-in">
          <div className="card-body">
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="col-md-4 zoom-in">
          <img src={image5} 
            className="img-fluid rounded-start fixed-size-image" alt="Card Image"/>
        </div>
      </div>
    </div>
  );
}
*/

export const CardRightImage = () => {
  return (
    <div className="card mb-3 my-3 mx-5 border-0">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={image5} 
            className="img-fluid rounded-start fixed-size-image" alt="Card Image"/>
        </div>
      </div>
    </div>
  );
}

export default CardRightImage;
