import React from "react";
import { Link } from "react-router-dom";
import "./LoginMethod.scss";

export default function LoginMethod({ closeModal, loginOption, icon }) {
  function loginMethodBackgroundColor(loginOption) {
    if (loginOption.includes("Create")) {
      return "rose";
    } else {
      return "default";
    }
  }
  return (
    <div className="loginMethod">
      <button
        className={`loginMethod__loginButton loginMethod__${loginMethodBackgroundColor(
          loginOption
        )}`}
        onClick={closeModal}
      >
        <Link
          className="loginMethod__loginButton__loginLink"
          to={loginOption.includes("Email") ? "/sign-in" : "/sign-up"}
        >
          <div className="loginMethod__loginButton__loginLink__contentWrapper">
            {icon && <img src={icon} />}
            <h5>{loginOption}</h5>
          </div>
        </Link>
      </button>
    </div>
  );
}
