import React, { useEffect } from 'react'
import './styles/Moves.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';

function Moves({setPlayerMove}) {

  const getPlayerMove = (e) => {
    const choice = e.target.dataset.id;
    setPlayerMove(choice);
  }

  useEffect(()=>{
    Aos.init();
   },[])

  return (
    <>
     <div className="moves-main-container">
      <div className="moves-container" data-aos="zoom-out" data-aos-duration="300" >
        <div className="moves-row-1">

          <Link to={'/result'}><div data-id="paper" className="move paper" onClick={(e)=>{getPlayerMove(e)}}></div></Link>

          <Link to={'/result'}><div data-id="scissors" className="move scissors" onClick={(e)=>{getPlayerMove(e)}}></div></Link>

        </div>

        <div className="moves-row-2">

          <Link to={'/result'}><div data-id="rock" className="move rock" onClick={(e)=>{getPlayerMove(e)}}></div></Link>

        </div>
      </div>
     </div>
    </>
  )
}

export default Moves



{/* <Link to={'/result'}>
<div data-id="rock" className="rock-btn" onClick={(e)=>{getPlayerMove(e)}}>
  ROCK
</div>
</Link>

<Link to={'/result'}>
<div data-id="paper" className="paper-btn" onClick={(e)=>{getPlayerMove(e)}}>
  PAPER
</div>
</Link>

<Link to={'/result'}>
<div data-id="scissors" className="scissors-btn" onClick={(e)=>{getPlayerMove(e)}}>
  SCISSORS
</div>
</Link> */}