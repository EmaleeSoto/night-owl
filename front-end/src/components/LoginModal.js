import { useEffect } from "react";
import "./LoginModal.scss";

const LoginModal = ({ accountModalOpen, setAccountModalOpen }) => {
  //Extremely unsure how to do this without using document selector
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = () => {
    setAccountModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modalWrapper">
      <div
        className="modalWrapper__modalBackdrop"
        onClick={handleOutsideClick}
      />
      <div className="modalWrapper__modalBox">
        <h1>400 error</h1>
        <p>Sent bad request</p>
        <button
          className="modalWrapper__modalBox__modalCloseButton"
          onClick={closeModal}
        >
          Close
        </button>
        <img
          className="modalWrapper__modalBox__modalImage"
          src="https://c.tenor.com/eDchk3srtycAAAAj/piffle-error.gif"
          alt="Error!"
        />
      </div>
    </div>
  );
};

export default LoginModal;
