import React from 'react'

export default function About() {

    const words = document.getElementsByClassName('word');
    let index = 0;

    const currentSlide = n => {
        for(var i = 0; i < words.length; i++){
            words[i].classList.remove('active');
        }
        words[n].classList.add('active');
    }

    const nextSlide = () => {
        if(index === words.length-1){
            index = 0;
            currentSlide(index);
        }else{
            index++;
            currentSlide(index);
        }
    }
  
    setInterval(nextSlide, 2000)
  

  return (
    <div id='about-section'>
        <div className='centered-2'>
            <div className='row-center'>We are 
                    <div id='changing-words-block'>
                        <span className='word active highlight-1'>a club</span>
                        <span className='word highlight-2'>a team</span>
                        <span className='word highlight-3'>a community</span>
                    </div>
            </div>
        </div>
        <div className='centered'>
            <div className='text-sec'>
            WCI Web-Dev is a web-development club where you will get to develop real projects for real people. This club welcomes students from all grades, backgrounds and interests. Everybody is encouraged to join the club and no coding experience is required. You will be taught everything about the design and programming of web-platforms and websites. This club will be a mini stimulation of the web-development and programming industry. We will all collaborate and work together on creating and developing cool web products.
            </div>
        </div>
        <div className='centered'>
            <a href='/team' style={{'width': '100%'}}><button className='primary-btn' id='singular-btn'>Meet Our Team</button></a>
        </div>
    </div>
  )
}
