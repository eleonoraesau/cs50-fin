import React from 'react'
import './Home.css'
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';


StylesManager.applyTheme("defaultV2");

function Results() {
  return (
    <div className='body'>
      <h1>Info: </h1>
      <div className="padded">
        <p>My name is Eleonora Esau and I have completed a coding bootcamp prior to taking the CS50x course. We learnt Ruby on Rails and some JavaScript.</p>
        <p>Since then I took a dive into react.js, which this website is built with.</p>
      </div>
    </div>
  )
}

export default Results
