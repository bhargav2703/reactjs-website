import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Cards';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Welcome to BetterStep</h2>
      <p>"Walk Together. Feel Better"</p>
      {/* <i class='fa-thin fa-arrow-down'/> */}
      {/* <i class="fa-solid fa-arrow-down"></i> */}
      {/* <div className='hero-btns'> */}
      {/* <Link><i class="fa-solid fa-arrow-down"></i></Link> */}
      
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    // </div>
  );
}

export default HeroSection;
