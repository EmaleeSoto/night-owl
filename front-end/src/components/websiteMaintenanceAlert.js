import React from "react";

export default function websiteMaintenanceAlert() {
  return <div>websiteMaintenanceAlert</div>;
}

/*
import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the pop-up has been shown before
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem('popupShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Welcome to our website!</h2>
            <p>This is a pop-up window that appears when you first visit our site.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;


*/
