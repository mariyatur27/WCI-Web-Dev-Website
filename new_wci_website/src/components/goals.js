import React from 'react'

export default function Goals() {
  
  return (
    <div id='goals-section'>
        <div className='row-center'>Our Goals for 22-23</div>
        <div className='js-charts'>
            <div className='chart-containers'>
                <div className='centered'><h1 className='highlight-1'><span data-number='30' className='incr-nums-2' id='number-1'>30+</span></h1></div>           
                <h3>Active Club Members</h3>
            </div>
            <div className='chart-containers'>
                <div className='centered'><h1 className='highlight-2'><span data-number='2' className='incr-nums-2' id='number-2'>2+</span></h1></div> 
                <h3>Big Projects</h3>
            </div>
            <div className='chart-containers'>
                <div className='centered'><h1 className='highlight-3'><span data-number='20' className='incr-nums-2' id='number-3'>20+</span></h1></div> 
                <h3>Lessons</h3>
            </div>
        </div>
        <div className='centered'>
            <h2 className='sub-title'>Want to help us achieve our goals?</h2>
        </div>
        <div className='centered row'>
            <a href='https://forms.gle/7sTjTuZcdezMRDNN9' style={{width:'30%'}} target='_blank'><button className='primary-btn singular-btn' id=''>Join Our Club</button></a>
            <a href='https://classroom.google.com/c/MzE3ODQxMTY3NDU3?cjc=k2uhtee' style={{width:'30%'}} target='_blank'><button className='primary-btn singular-btn' id=''>Join Our Classroom</button></a>
            <a href='https://www.instagram.com/wci_web_dev/' style={{width:'30%'}} target='_blank'><button className='primary-btn singular-btn' id=''>Join Our Instagram</button></a>
        </div>
    </div>
  )
}
