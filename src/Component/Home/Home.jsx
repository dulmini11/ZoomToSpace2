import React, { useEffect, useRef } from 'react';
import './Home.css';
import earthVideo from '../../assets/earth-bg.mp4';
import arrowGif from '../../assets/arrow.gif';
import AboutSpace from '../AboutSpace/AboutSpace';


const Home = () => {
  const earthRef = useRef(null);

  useEffect(() => {
    // Add rotation or star effects here if needed in the future
  }, []);

  return (
    <div className="home">
      <div className="video-background">
     <video
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    >
      <source src={earthVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    </div>


      <div className="hero-overlay">
        <h1>Let’s be astronauts for a moment,<br/>  let’s go to space</h1>
        <p>
          Explore the wonders of our planet and beyond with SPACE.<br/>
           Discover the beauty of the solar system and 
           join the journey through the cosmos.
        </p>
      </div>
        {/* ↓ Arrow goes here ↓ */}
      <div className="scroll-down-arrow">
        <img src={arrowGif} alt="Scroll down arrow" />
      </div>
      <AboutSpace />
    </div>
     
  );
};

export default Home;
