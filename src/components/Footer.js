import React, { useState } from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom';
import Modal from './Modal';


function Footer({setPlayerScore, setComputerScore}) {

  const [modal, setModal] = useState(false);

  const resetScore = () => {
    setPlayerScore(value => value = 0);
    setComputerScore(value => value = 0);
  }

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <>
      <div className='main-footer-container'>
        <div className='footer-container'>
          <div className='btn-container'>
            <Link to={'/'}>
              <button onClick={resetScore} className='reset-btn'>RESET
              </button>
            </Link>
            <button className='rules-btn' onClick={toggle}>RULES
            </button>
          </div>
        </div>
      </div>
      
      {
        modal?
        <Modal toggle = {toggle}/>
        :
        null
      }
     
    </>
  )
}

export default Footer
