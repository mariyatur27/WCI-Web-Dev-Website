import React from 'react'
import { questions } from './data/questions'

export default function Faq() {

 const showAnswer = (e) => {
    var div_id = e.target.id;
    var ans_id = div_id + 'ans';
    document.getElementById(ans_id).classList.toggle('hide')
 }

 const hideAnswer = (e) => {
    var id = e.target.id
    document.getElementById(id).classList.toggle('hide')
 }

  return (
    <div id='faq-section'>
        <div className='row-center'>FAQ</div>
        {questions.map((value, key) => {
            return(
                <div className='faq-box' key={key} id={value.id} onClick={showAnswer}>
                    <div className='question' id={value.id}>{value.question}</div>
                    <div className='answer hide' id={value.id + 'ans'} onClick={hideAnswer}>{value.answer}</div>
                </div>
            )
        })}
    </div>
  )
}
