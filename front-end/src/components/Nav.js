import { Link, useNavigate } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ signOutOfAccount, loggedIn, userVerified, openModal }) => {
  const navigate = useNavigate();

  return (
    <nav className="nav" id={loggedIn && "nav-loggedin"}>
      <Link className="nav__link" to={loggedIn ? "/myhome" : "/"}>
        <div>
          <img
            className="nav__navLogo"
            alt="Worth a Shot logo"
            src={require("../assets/appLogo.png")}
          />
        </div>
      </Link>
      <ul>
        <li className="nav__dropdown">
          <div>
            <Link className="nav__link">Safety</Link>
          </div>
          <ul className="nav__dropdownMenu">
            <li>
              <Link className="nav__link" to="/">
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/">
                Safety Tips
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="nav__aboutLink">
            <Link className="nav__link" to="/about">
              About
            </Link>
          </div>
        </li>
        <li>
          <Link
            className={loggedIn ? "nav__show nav__link" : "nav__hide"}
            to="/myfavorites"
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            className={loggedIn ? "nav__show nav__link" : "nav__hide"}
            to="/editprofile"
          >
            My Profile
            {loggedIn && !userVerified ? "❗" : null}
          </Link>
        </li>
      </ul>

      <button
        className={loggedIn ? "nav__show nav__loginButton" : "nav__hide"}
        id="logout"
        onClick={() => {
          signOutOfAccount();
          navigate("/");
        }}
      >
        Log out
      </button>

      <div
        className={loggedIn ? "nav__hide" : "nav__show nav__loginButtonWrapper"}
      >
        <button onClick={openModal} id="sign-in-button">
          <span>Log in</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
