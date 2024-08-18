import React from 'react';
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
                  <li>Viedeo/Audio call</li>
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
                  <li>Viedeo/Audio call</li>
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
                  <li>Viedeo/Audio call or even a personal visit</li>
                  <li>15 Questions of your choice</li>
                  <li>Open interaction and follow-up emails and calls, if needed(Max of 2)</li>
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