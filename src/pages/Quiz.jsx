import React from 'react';
import { useCallback } from 'react';
import './Quiz.css';
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  title: "QUIZ TIME",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 20,
  maxTimeToFinish: 50,
  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",
  pages: [{
    elements: [{
      type: "html",
      html: "You are about to start a quiz on your trivial knowledge. <br>You will have 20 seconds for every question and 50 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
    }, {
      type: "text",
      name: "username",
      titleLocation: "hidden",
      isRequired: true
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "civilwar",
      title: "Which two countries share the longest international border?",
      choices: [
        "Russia and Kazakhstan", "Canada and the USA", "Argentina and Chile", "Mongolia and China"
      ],
      correctAnswer: "Canada and the USA"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "libertyordeath",
      title: "What blood type qualifies as a universal donor?",
      choicesOrder: "random",
      choices: [
        "AB negative", "O negative", "B negative", "O positive"
      ],
      correctAnswer: "O negative"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "magnacarta",
      title: "What does the “R” stand for on the rating of a movie?",
      choicesOrder: "random",
      choices: [
        "Rated",
        "Restricted",
        "Ranked",
        "Radical"
      ],
      correctAnswer: "Restricted"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "civilwar",
      title: "What is the Jewish New Year called?:",
      choices: [
        "Rosh Hashanah", "B'ezrat HaShem", "Chag sameach", "Shana Tova"
      ],
      correctAnswer: "Rosh Hashanah"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "civilwar",
      title: "Which country was the Caesar salad invented in?:",
      choices: [
        "Spain", "Italy", "Mexico", "USA"
      ],
      correctAnswer: "Mexico"
    }]
  }],

  completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  completedHtmlOnCondition: [{
    expression: "{correctAnswers} == 0",
    html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
  }, {
    expression: "{correctAnswers} == {questionCount}",
    html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
  }]
};

function Quiz() {
  const survey = new Model(surveyJson);
  return (
    <div>
      <div className="container">
        <h1>Hey there!</h1>
        <h2>Let's start right away!</h2>
        <h2>Finish all questions and check your results in the end 😉</h2>
      </div>
      <div className="quiz">
      <Survey model={survey} id="surveyContainer" />
      </div>
    </div>
  )
}

export default Quiz
