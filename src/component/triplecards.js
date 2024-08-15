import React, { useRef, useEffect } from 'react';
import './css/cardanimations.css'

export const TripleCards = () => {
  // const cardRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate');
  //           observer.unobserve(entry.target); // Stop observing once animation is triggered
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Adjust as needed (0.1 means 10% of the component is visible)
  //   );

  //   const cards = cardRef.current.querySelectorAll('.card');
  //   cards.forEach((card) => {
  //     observer.observe(card);
  //   });

  //   // Cleanup observer on unmount
  //   return () => {
  //     if (observer && observer.disconnect) {
  //       observer.disconnect();
  //     }
  //   };
  // }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card slide-in-left">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Card Title 1</h5>
            </div>
            <div className="card-body">
              <p className="card-text">This is some text inside the first card.</p>
            </div>
            <div className="card-footer text-muted">
              Footer 1
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card fade-in">
            <div className="card-header bg-success text-white">
              <h5 className="card-title mb-0">Card Title 2</h5>
            </div>
            <div className="card-body">
              <p className="card-text">This is some text inside the second card.</p>
            </div>
            <div className="card-footer text-muted">
              Footer 2
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card slide-in-right">
            <div className="card-header bg-danger text-white">
              <h5 className="card-title mb-0">Card Title 3</h5>
            </div>
            <div className="card-body">
              <p className="card-text">This is some text inside the third card.</p>
            </div>
            <div className="card-footer text-muted">
              Footer 3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}