import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Popup() {

    const close = () => {
        document.getElementById('popup-section').classList.toggle('hide')
    }

  return (
    <div id='popup-section'>
        <div className='left-align'>
            <FontAwesomeIcon icon={faXmark} onClick={close} className='cursor-style' />
        </div>
        <h2>Hey! Check this out...</h2>
        <h5 style={{fontWeight: '100'}}>Last year, WCI Web Dev paired with Leadership and together, we created an official WCI Extracurriculars website for our school. By joining our club, you will have a chance to make an impact on our school community as well!</h5>
        <a href='https://mariyatur27.github.io/WCI-Extracurricular-Website/' type='a_blanc'><FontAwesomeIcon icon={faArrowRight} style={{textAlign: 'right'}}/></a>
    </div>
  )
}
