import React from 'react'
import logo from '../club_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const showMenu = () => {
        document.getElementById('mobile-menu').classList.toggle('hide');
    }

    const closeMenu = () => {
        document.getElementById('mobile-menu').classList.toggle('hide');
    }

  return (
    <div id='navbar-section'>
        <div className='center-row'>
            <div className='ele-1'>
                <img src={logo} alt='logo' className='logo'/>
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
        <div className='mobile-nav'>
            <FontAwesomeIcon icon={faEllipsisVertical} size='2x' onClick={showMenu}/>
        </div>
        <div id='mobile-menu' className='hide'>
            <a href='/#about-section' id='link-1' onClick={closeMenu}><h3>About Club</h3></a><br></br>
            <a href='/#structure-section' id='link-2' onClick={closeMenu}><h3>Club Structure</h3></a><br></br>
            <a href='' id='link-3' onClick={closeMenu}><h3>How to Join</h3></a><br></br>
            <a href='/team' id='link-4' onClick={closeMenu}><h3>Our Team</h3></a><br></br>
            <a href='mailto:turem4748@wrdsb.ca' id='link-4' onClick={closeMenu}><h3>Get in Touch</h3></a><br></br>
        </div>
    </div>
  )
}
