import React from "react";
import { Link } from "react-router-dom";
import "./LoginMethod.scss";

export default function LoginMethod({ closeModal, loginOption, icon }) {
  return (
    <div className="loginMethod">
      <button className="loginMethod__loginButton" onClick={closeModal}>
        <Link
          className="loginMethod__loginButton__loginLink"
          to={loginOption.includes("Email") ? "/sign-in" : "/sign-up"}
        >
          {icon && (
            <img className="loginButton__loginLink__loginIcon" src={icon} />
          )}
          <h5>{loginOption}</h5>
        </Link>
      </button>
    </div>
  );
}
