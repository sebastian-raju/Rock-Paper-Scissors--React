import React, { useState } from 'react'
import './styles/Home.css'
import Moves from '../components/Moves'
import Result from '../components/Result'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'

function Home() {

  const [playerMove, setPlayerMove] = useState("");
  let [playerScore, setPlayerScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);


  return (
    <>
      <Header playerScore={playerScore} computerScore={computerScore}/>
      
      <Routes>
        <Route path='/' element={<Moves setPlayerMove = {setPlayerMove}/>}/>
        <Route path='/result' element={<Result setPlayerScore={setPlayerScore} setComputerScore={setComputerScore} playerScore={playerScore} computerScore ={computerScore} playerMove={playerMove} />}/>
      </Routes>
      
      <Footer setPlayerScore={setPlayerScore} setComputerScore={setComputerScore}/>
    </>
  )
}

export default Home
