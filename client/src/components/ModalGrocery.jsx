import React, { useState } from 'react';
import { FiCopy, FiTwitter, FiMail } from 'react-icons/fi'; // Importez les icônes nécessaires


const ModalGrocery = ({ isOpen, message, onClose, showIngredients = false }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Réinitialise l'état de copie après 2 secondes
  };

  const shareOnTwitter = () => {
    const tweetText = encodeURIComponent(message);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent('Check out this grocery list');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', zIndex: '9999' }}>
      <span className="close" onClick={onClose} style={{ position: 'absolute', top: '5px', right: '10px', cursor: 'pointer', fontSize: '20px' }}>&times;</span>
      {showIngredients && (
        <>
          <p>Voici les ingrédients dont vous aurez besoin :</p>
          {/* Affiche les ingrédients sous forme de liste à puce */}
          <ul>
            {message.split('\n').map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FiCopy onClick={copyToClipboard} style={{ cursor: 'pointer', marginRight: '10px' }} />
        <FiTwitter onClick={shareOnTwitter} style={{ cursor: 'pointer', marginRight: '10px' }} />
        <FiMail onClick={shareByEmail} style={{ cursor: 'pointer' }} />
      </div>
      {copied && <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: '#4CAF50', color: 'white', padding: '15px', borderRadius: '5px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', zIndex: '9999' }}>Copied!</div>}
    </div>
  );
};

export default ModalGrocery;
