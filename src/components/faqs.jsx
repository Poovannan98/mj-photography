import React from 'react';
import "../css/faqs.css";

export const Faqs = (props) => {
    return (
        <div id="faqs" >
            <div className="container">
                <div className="section-title text-center" >
                    <h2>Frequently Asked Questions?</h2>
                    <p>Before Calling us or email / Whatsapp or contacting in any manner,</p>
                    <p><b>We Request you to read all the FAQs</b></p>
                    <p> Most of your questions are answered here!</p>
                    <p>If you don't find your question here. please Ask Here!</p>
                </div>
            </div> 
            <div id="row" className='faqs'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.questions}-${i}`} >                  
                    {" "}                    
                    <div >
                      <h4>{i+1}. {d.question}</h4>
                      <h5 className='h5'>{d.sub_question}</h5>
                      <p>{d.answer}</p>
                      <h5 className='h5'>{d.sub_question1}</h5>
                      <p>{d.answer1}</p>
                    </div>
                  
                </div>
              ))
            : "loading"}
        </div>           
        </div>
        
    );
};
