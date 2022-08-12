import React from 'react'

export default function Hero() {
  return (
    <div id='hero-section'>
        <div className='primary-text'>Welcome to WCI Web-Dev</div>
        <div className='secondary-text'>The club where you learn to design and build cool web applications</div>
        <div className='row'>
            <a href='/#about-section' className='hero-a'>
              <button className='primary-btn-hero'>Learn More</button>
            </a>
            <a href='' className='hero-a'>
              <button className='primary-btn-hero'>Join</button>
            </a>
        </div>
    </div>
  )
}
