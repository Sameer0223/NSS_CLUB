import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './LoadingScreen.css'; // Import CSS file for animations

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulating loading completion after some time
    }, 2000); // Adjust the delay time as needed
  }, [setLoading]);

  return (
    <CSSTransition
      in={true} // Show the component
      appear={true} // Apply animation on initial appearance
      timeout={1000} // Duration of the animation
      classNames="fade" // CSS class name for the animation
    >
      <div className="loading-screen">
        <div className="logo-container">
          <img src="./events/nss.jpg" alt="NSS SNIST Logo" className="logo" />
          <p className="logo-text">NSS SNIST</p>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </CSSTransition>
  );
};

export default LoadingScreen;
