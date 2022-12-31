import React from 'react'
import './Quiz.css'
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
StylesManager.applyTheme("defaultV2");

const surveyJson = {
  completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  completedHtmlOnCondition: [{
    expression: "{correctAnswers} == 0",
    html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
  }, {
    expression: "{correctAnswers} == {questionCount}",
    html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
  }]
};

function Results() {
  const survey = new Model(surveyJson);
  return (
    <div>
      <h1>Your result!</h1>
      <Survey model={survey} id="surveyContainer" />
    </div>
  )
}

export default Results
