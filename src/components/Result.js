import React, { useEffect, useState } from 'react'
import './styles/Result.css'
import { Link } from 'react-router-dom';



function Result({playerMove, setPlayerScore, setComputerScore, playerScore, computerScore}) {

  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");
  const [counter, setCounter] = useState(3);

  const getComputerMove = () => {
    const choices =['rock','paper','scissors'];
    setComputerMove(choices[Math.floor(Math.random() * 3)]);
  }

  const finalResult = () => {
    console.log(playerMove, computerMove);
    if((playerMove === 'rock' && computerMove === 'scissors') || 
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')){
        setResult(value => value = 'YOU WIN');
        setPlayerScore(value => value + 1);
      }
    else if((playerMove === 'rock' && computerMove === 'paper') ||
            (playerMove === 'paper' && computerMove === 'scissors') ||
            (playerMove === 'scissors' && computerMove === 'rock')){
              setResult(value => value ='YOU LOSE');
              setComputerScore(value => value + 1);
              
            }
    else if(playerMove === computerMove){
      setResult(value => value = 'DRAW');
    } 
  }

  // const updateScore = () => {
  //   if(result === 'You win'){
  //         setScore(value => value + 1);
  //   }
  //   else if(result === 'You lose'){
  //         setScore(value => value - 1);
  //   }

  // }

  const checkingScore = () => {
    if(playerScore === 5 || computerScore === 5){
      setPlayerScore(value => value = 0);
      setComputerScore(value => value = 0);
    }
  }


  useEffect(()=>{
    getComputerMove();
  },[]);

  useEffect(()=>{
    const timer = counter>0? setInterval(()=>{
      setCounter(counter - 1);
    },1000)
    :
    finalResult();

    return ()=> {
      clearInterval(timer);
    };
  },[counter, computerMove]);

  // useEffect(()=> {
  // updateScore();
  // },[result])

  // useEffect(()=>{
    
  //  },[]);


  return (
   <>
    <div className="result-main-container">
      <div className="result-container">
        <div className="result-grid">

          <div className="player-choice">
            <div className="player-choice-title">YOU PICKED</div>
            <div className={`noHover playerMove ${playerMove} ${result === "YOU WIN"?"boxShadow":""}`}></div>
          </div>
          
          <div className="final-outcome-container">
            <div className="final-outcome">{result}</div>
            <Link to={'/'} style={{textDecoration:"none"}}><div className={`play-again-btn ${result !== ""? "displayBlock": "displayNone"}`} onClick={checkingScore}>PLAY AGAIN</div></Link>
            {
              playerScore === 5?
              <div className={`match-outcome ${result !== ""? "displayBlock": "displayNone"}`} >
                YOU WON THE GAME !!!
              </div>: computerScore === 5?
              <div className={`match-outcome ${result !== ""? "displayBlock": "displayNone"}`} > 
              COMPUTER WON THE GAME 
              </div> : <div className={`match-outcome ${result !== ""? "displayBlock": "displayNone"}`} > KEEP PLAYING !</div>
            }
          </div>

          <div className="computer-choice">
            <div className="computer-choice-title">COMPUTER PICKED</div>
            {
              counter === 0 ?
              <div className={`noHover computerMove ${computerMove} ${result === "YOU LOSE"?"boxShadow":""}`}></div>
              :
              <div className='timer-container'>{counter}</div>
            }
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Result



{/* <>
<div className='player-move'>player move : {playerMove}</div>
<div className='computer-move'>computer move : {computerMove}</div>
<div className='result'>Result : {result}</div>

<Link to={'/'}><button>play again</button></Link>
</> */}