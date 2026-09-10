import { useState } from 'react'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-flex-container">
        <div className="spacecraft-stats-container hero-col">
          <p className="spacecraft-stats" id="v1">
            // voyager_1<br></br>
            v1.current_distance = UNDEFINED
          </p>
        </div>
        <div className="name-container hero-col">
          <h1 className="name-header">Aaron Hampson</h1>
          <h2 className="name-subheader">Full-Stack Developer</h2>
        </div>
        <div className="spacecraft-stats-container hero-col">
          <p className="spacecraft-stats" id="p11">
            // pioneer_11<br></br>
            p11.current_distance = UNDEFINED
          </p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Hero />
  )
}

export default App