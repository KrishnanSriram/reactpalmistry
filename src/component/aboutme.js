import React from 'react';
import './css/cardimage.css';
import './css/cardanimations.css';
import palmist from './images/palmist.jpeg';

export const AboutMe = () => {
  return (
    <div id="about" className="card mb-3 my-3 mx-5 border-0 text-align-center">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={palmist} 
          className="img-fluid rounded-start fixed-size-portrait-image" alt="left Card"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">
            <b>I am a Palmist as well as a cancer researcher focused on developing new treatments for triple-negative breast cancer.</b> 
            <p>My work involves combining different therapies and exploring innovative approaches like electric fields to reduce treatment side effects. I collaborate with colleagues, publish my findings, and have received recognition for my research contributions.
            </p>
            </p>
            <p className="card-text"><small className="text-muted">Over 2 decades of experince in the field of Palmistry</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
