import React from 'react'
import mariya from '../assets/IMG-3775.jpg'
import ali from '../assets/IMG-3071.jpg'
import nuha from '../assets/nuha-IMG.jpg'


export default function Team() {
  return (
    <div id='team-section'>
        <div className='row-center'>Our Team</div>
        <div className='js-charts'>
            <div className='team-member'>
                <img src={mariya} className='team-img'/>
                <div className='centered'>
                    <h3>Mariya Turetska</h3>
                </div>
            </div>

            <div className='team-member'>
                <img src={ali} className='team-img'/>
                <div className='centered'>
                    <h3>Ali Rahbar</h3>
                </div>
            </div>

            <div className='team-member'>
                <img src={nuha} className='team-img'/>
                <div className='centered'>
                    <h3>Nuha Akhand</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
