import React, { useState } from 'react';

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const messageLines = message.split('\n');

  return (
    <div className="modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', zIndex: '9999', textAlign: 'justify' }}>
      <span className="close" onClick={onClose} style={{ position: 'absolute', top: '5px', right: '10px', cursor: 'pointer', fontSize: '20px' }}>&times;</span>
      {messageLines.map((line, index) => (
        <p key={index} style={{ textAlign: 'justify' }}>{line}</p>
      ))}
    </div>
  );
};

export default Modal;
