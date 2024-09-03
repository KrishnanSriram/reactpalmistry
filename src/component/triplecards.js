import React from 'react';
import './css/cardanimations.css'

export const TripleCards = () => {

  return (
    <div id="services" className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card slide-in-left">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="card-title mb-0">Basic</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                <ul>
                  <li>20 Minutes with Palmist</li>
                  <li>Video/Audio call</li>
                  <li>5 Questions of your choice</li>
                  <li>Brief and general observations from palmist for 10 mins</li>
                </ul>
              </p>
            </div>
            <div className="card-footer text-muted text-center">
              <h4>$25</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card fade-in">
            <div className="card-header bg-success text-white text-center">
              <h5 className="card-title mb-0">Standard</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
              <ul>
                  <li>40 Minutes with Palmist</li>
                  <li>Video/Audio call</li>
                  <li>10 Questions of your choice</li>
                  <li>General observations & life challenges for 10 mins</li>
                </ul>
              </p>
            </div>
            <div className="card-footer text-muted text-center">
            <h4>$50</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card slide-in-right">
            <div className="card-header bg-danger text-white text-center">
              <h5 className="card-title mb-0">Premium</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
              <ul>
                  <li>60 Minutes with Palmist</li>
                  <li>Video/Audio call</li>
                  <li>15 Questions of your choice</li>
                  <li>Open interaction and follow-up emails & calls (Max of 2)</li>
                </ul>
              </p>
            </div>
            <div className="card-footer text-muted text-center">
            <h4>$100</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}