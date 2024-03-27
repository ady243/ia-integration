import React from 'react';

const Modal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default Modal;
