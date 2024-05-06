import React from 'react'
import './styles/Header.css'

function Header({playerScore, computerScore}) {
  return (
    <>
      <div className='header-container'>
        <div className="header-box">
          <div className="game-title">
            <div>ROCK</div>
            <div>PAPER</div>
            <div>SCISSORS</div>
          </div>
          <div className="score-container">
            <div className="score-box">
              <div className="score-title">PLAYER</div>
              <div className="score">{playerScore}</div>
            </div>
            <div className="score-box">
              <div className="score-title">COMPUTER</div>
              <div className="score">{computerScore}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
