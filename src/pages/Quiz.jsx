import React from 'react';
import { useCallback } from 'react';
import './Quiz.css';
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  // title: "MINOR CHASE",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 20,
  maxTimeToFinish: 60,
  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",
  pages: [{
    elements: [{
      type: "html",
      html: "You will have 20 seconds for every question and 50 seconds to end the quiz. Enter your name below and click <b>Start Quiz</b> to begin. Finish all questions and check your results in the end 😉"
    }, {
      type: "text",
      name: "username",
      titleLocation: "hidden",
      isRequired: true
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "border",
      title: "Which two countries share the longest international border?",
      choicesOrder: "random",
      choices: [
        "Russia and Kazakhstan", "Canada and the USA", "Argentina and Chile", "Mongolia and China"
      ],
      correctAnswer: "Canada and the USA"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "donor",
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
      name: "movie",
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
      name: "new",
      title: "What is the Jewish New Year called?",
      choicesOrder: "random",
      choices: [
        "Rosh Hashanah", "B'ezrat HaShem", "Chag sameach", "Shana Tova"
      ],
      correctAnswer: "Rosh Hashanah"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "salad",
      title: "Which country was the Caesar salad invented in?",
      choicesOrder: "random",
      choices: [
        "Spain", "Italy", "Mexico", "USA"
      ],
      correctAnswer: "Mexico"
    }]
  }],

  completedHtml: "<h4>Hey <b>{username}</b>! You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  completedHtmlOnCondition: [{
    expression: "{correctAnswers} == 0",
    html: "<h4>Unfortunately, none of your answers are correct. Please try again, <b>{username}</b>.</h4>"
  }, {
    expression: "{correctAnswers} == {questionCount}",
    html: "<h4>Congratulations, <b>{username}</b>! You answered all the questions correctly!</h4>"
  }]
};

function Quiz() {
  const survey = new Model(surveyJson);
  return (
    <div>
      <div className="container">
        <h1>Hey there!</h1>
        <h3>Let's start the MINOR CHASE!</h3>
      </div>
      <div>
      <Survey model={survey} id="surveyContainer" />
      </div>
    </div>
  )
}

export default Quiz;
