import React from "react";


const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <div className="loading-bar"></div>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
