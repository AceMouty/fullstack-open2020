import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// components
import ButtonGood from './components/ButtonGood'
import ButtonNeutral from './components/ButtonNeutral'
import ButtonBad from './components/ButtonBad'
import StatsPanel from './components/StatsPanel'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState([])
  const [avg, setAvg] = useState()
  const [positive, setPositive] = useState()

  // Run anytime allFeedback state updates
  useEffect(() => {
    setAvg(allFeedback.reduce((total, num) => total + num, 0) / allFeedback.length)
    setPositive(`${Number(good / allFeedback.length * 100).toFixed(8)}%`)
  }, [allFeedback])

  function goodHandler() {
    setAllFeedback([...allFeedback, 1])
    setGood(good + 1)
  }

  function neutralHandler() {
    setAllFeedback([...allFeedback, 0])
    setNeutral(neutral + 1)
  }

  function badHandler() {
    setAllFeedback([...allFeedback, -1])
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <ButtonGood goodHandler={goodHandler} />
      <ButtonNeutral neutralHandler={neutralHandler} />
      <ButtonBad badHandler={badHandler} />
      <h2>Statistics</h2>
      <StatsPanel good={good} neutral={neutral} bad={bad} avg={avg} positive={positive} all={allFeedback.length} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)