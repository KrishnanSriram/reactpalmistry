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
            className="img-fluid w-100"
          />
        </div>
      </div>
      <div className="row justify-content-center text-center mt-4">
        <div className="col-12">
          <h1 className="display-4">Welcome to My Website</h1>
        </div>
        <div className="col-12">
          <p className="lead">Your go-to place for amazing content</p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
