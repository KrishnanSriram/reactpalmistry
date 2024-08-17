import React from 'react';
import './css/cardimage.css';
import './css/cardanimations.css';
// import image4 from './images/image4.jpg';

export const AboutMe = () => {
  return (
    <div className="card mb-3 my-3 mx-5 border-0 text-align-center">
      <div className="row g-0">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">
            <b>I am a cancer researcher focused on developing new treatments for triple-negative breast cancer.</b> My work involves combining different therapies and exploring innovative approaches like electric fields to reduce treatment side effects. I collaborate with colleagues, publish my findings, and have received recognition for my research contributions.
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
