import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="body">
        <h1>Welcome!</h1>
        <h2>This is MINOR CHASE!</h2>
        <p>My name is Eleonora Esau and I have completed a coding bootcamp prior to taking the CS50x course. We learnt Ruby on Rails and some JavaScript.</p>
        <p>Since then I took a dive into react.js, which this website is built with.</p>
        <p>This website contains a couple multiple choice questions, to test your trivial knowledge. Solve them all to see your score!</p>
        <p>The name 'MINOR CHASE' is a random synonym of the game 'trivial persuit'.</p>
      </div>
      <div className="buttons">
        <Link to="quiz">
        <button className="button">START THE QUIZ!</button>
        </Link>
      </div>
      <div className="minor">
        <h2>MINOR CHASE MINOR CHASE MINOR CHASE MINOR CHASE MINOR CHASE</h2>
      </div>
    </div>
  )
}

export default Home
