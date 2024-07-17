// Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <h2 className="modal-title">{content.title}</h2>
        <p className="modal-detail">Date: {content.date}</p>
        {content.time && <p className="modal-detail">Time: {content.time}</p>}
        {content.venue && <p className="modal-detail">Venue: {content.venue}</p>}
        <p className="modal-detail">More Information: {content.description}</p>
      </div>
    </div>
  );
};

export default Modal;
