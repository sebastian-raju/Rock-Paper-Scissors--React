import React from 'react'
import './styles/Modal.css'
import ReactDOM from 'react-dom';


function Modal({toggle}) {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="title-section">
          <div className="modal-title">
            RULES
          </div>
          <div className="close-button" onClick={toggle}><i className="fa-solid fa-square-xmark fa-2xl"></i></div>
        </div>
        <div className="image-container">
        </div>
      </div>
    </div>
    ,


    document.getElementById('modal')
  )
}

export default Modal
