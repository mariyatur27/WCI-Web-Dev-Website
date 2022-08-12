import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


export default function Structure() {

    const increment = (id, number) => {
        let num = 0;
        while (num <= number){
            document.getElementById(id).innerHTML = num;
            num++
        }
    }

    function inc(id, percent) {
        increment(id, percent)
      }
      window.setInterval(inc, 1);

    const repeat = (id, percent) => {
        for (var i = 0; i < percent; i++){
            inc(id, percent)
        }
    }

    var percents = document.getElementsByClassName('incr-nums');

    const getEle = () => {
        for (var i = 0; i < percents.length; i++){
            var percents_ids = percents[i].id
            var percents_nums = Number(document.getElementById(percents_ids).getAttribute('data-number'))
            repeat(percents_ids, percents_nums)
        }
    }

    window.onload = getEle;
  return (
    <div id='structure-section'>
        <div className='row-center'>Club Structure</div>
        <div className='js-charts'>
            <div className='chart-containers'>
                <div className='centered'><h1 className='highlight-1 hs-num'><span data-number='70' className='incr-nums' id='percent-1'></span>%</h1></div>           
                <h3>Lessons</h3>
                <p>Most of the time spent in the club, we will be having lessons and tutorials where we will be teaching principles of web development in HTML, CSS, JavaScript, React and Node.</p>
            </div>
            <div className='chart-containers'>
                <div className='centered'><h1 className='highlight-2 hs-num'><span data-number='20' className='incr-nums' id='percent-2'></span>%</h1></div> 
                <h3>Projects</h3>
                <p>Some portion of the club will be spent working on projects. We belive that the best way to learn something is to do it yourself!</p>
            </div>
            <div className='chart-containers'>
                <div className='centered'><h1 className='highlight-3 hs-num'><span data-number='10' className='incr-nums' id='percent-3'></span>%</h1></div>
                <h3>Assignments</h3>
                <p>We will be providing optional "homework" and mini-projects to those members of the club who are interested in practicing the things that we cover in class.</p>
            </div>
        </div>
    </div>
  )
}
