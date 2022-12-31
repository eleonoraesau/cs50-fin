import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>This is MINOR CHASE!</h2>
      <h3>Let's play a game and check your trivial knowledge!</h3>
      <div className="button">
        <Link to="quiz">
        <button>START THE QUIZ</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
