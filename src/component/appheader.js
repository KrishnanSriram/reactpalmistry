import React from 'react';
import header_image from './images/header_combined.jpg'
import './css/headerimage.css'

export const AppHeader = () => {
  return (
    <header className="p-0">
      <div className="row no-gutters">
        <div className="col-12">
          <img
            src={header_image}
            alt="Header"
            className="img-fluid w-100 animate__animated animate__headShake"
          />
        </div>
      </div>
      <div className="row justify-content-center text-center mt-4 animate__animated animate__bounce">
        <div className="col-12">
          <h1 className="display-4">The Lines of Your Life</h1>
        </div>
        <div className="col-12">
          <p className="lead">Deep Dive into Your Palm's Story. Uncover Your Life's Blueprint and unfold Your Destiny </p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
