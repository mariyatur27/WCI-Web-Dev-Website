import React from 'react'
import logo from '../club_logo.png'

export default function Footer() {
  return (
    <div id='footer-section'>
        <div className='center-row'>
            <div className='ele-1'>
                <img src={logo} alt='logo' className='logo-2'/>
            </div>
            <div className='ele-2'>
                <a href='/#about-section'>About Club</a>
                <a href='/#structure-section'>Club Structure</a>
                <a href=''>How to Join</a>
                <a href='/team'>Our Team</a>
            </div>
            <div className='ele-1'>
                <a href='mailto:turem4748@wrdsb.ca'><button className='secondary-btn'>Get in Touch</button></a>
            </div>
        </div>
        <div className='centered footer-notes'>All Rights Reserved. Copyright 2022. WCI Web Dev.</div>
    </div>
  )
}
