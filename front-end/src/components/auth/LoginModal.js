import { useEffect } from "react";
import LoginMethod from "./LoginMethod";
import "./LoginModal.scss";

const LoginModal = ({ setHomeModalOpen }) => {
  //TODO: Extremely unsure how to do this without using document selector. How do I target the whole body?
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = () => {
    setHomeModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
      document.body.style.overflow = "auto"; // Enable scrolling again
    }
  };

  return (
    <div className="modalWrapper">
      <div
        className="modalWrapper__modalBackdrop"
        onClick={handleOutsideClick}
      />
      <div className="modalWrapper__modalBox">
        <div>
          <img
            className="modalWrapper__modalBox__modalImage"
            src={require("../../assets/owlLogo.png")}
            alt="Error!"
          />
        </div>
        <div className="modalWrapper__modalBox__headingWrapper">
          <h3>Get Started</h3>
        </div>
        <div className="modalWrapper__modalBox__modalTextContent">
          <p>
            By clicking Login, you agree to our <a>Terms.</a> Learn how we
            process your data in our <a>Privacy Policy</a> and{" "}
            <a>Cookie Policy</a>
          </p>
        </div>
        <div className="modalWrapper__modalBox__modalCloseWrapper">
          <img onClick={closeModal} src={require("../../assets/cross.png")} />
        </div>
        <div className="modalWrapper__modalBox__loginOptions">
          <LoginMethod
            closeModal={closeModal}
            loginOption={"Email and Password"}
          />
          <LoginMethod
            closeModal={closeModal}
            loginOption={"Continue with Google"}
            icon={require("../../assets/logos/google.png")}
          />
          <LoginMethod
            closeModal={closeModal}
            loginOption={"Login with Facebook"}
          />
          <LoginMethod closeModal={closeModal} loginOption={"Sign Up"} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
