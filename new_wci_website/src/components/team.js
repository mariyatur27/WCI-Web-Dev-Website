import React from 'react'

export default function Team() {
  return (
    <div id='team-section'>
        <div className='row-center'>Our Team</div>
        <div className='js-charts'>
            <div className='team-member'>
                <img src='https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png' className='team-img'/>
                <div className='centered'>
                    <h3>Mariya Turetska</h3>
                </div>
            </div>

            <div className='team-member'>
                <img src='https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png' className='team-img'/>
                <div className='centered'>
                    <h3>Ali Rahbar</h3>
                </div>
            </div>

            <div className='team-member'>
                <img src='https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png' className='team-img'/>
                <div className='centered'>
                    <h3>Nuha Akhand</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
