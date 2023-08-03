import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";

const Nav = ({
  signOutOfAccount,
  loggedIn,
  userVerified,
  setAccountModalOpen,
}) => {
  const navigate = useNavigate();

  const openModal = () => {
    setAccountModalOpen(true);
    console.log("Opened");
  };

  return (
    <nav className="navBar" id={loggedIn && "nav-loggedin"}>
      <Link className="navBar__link" to={loggedIn ? "/myhome" : "/"}>
        <div>
          <img
            className="navBar__navLogo"
            alt="Worth a Shot logo"
            src={require("../assets/appLogo.png")}
          />
        </div>
      </Link>
      <ul>
        {loggedIn && (
          <li>
            <div>
              <Link className="navBar__link" to={loggedIn ? "/myhome" : "/"}>
                "My Home"
              </Link>
            </div>
          </li>
        )}
        <li className="navBar__dropdown">
          <div>
            <Link className="navBar__link">Safety</Link>
          </div>
          <ul className="navBar__dropdownMenu">
            <li>
              <Link className="navBar__link" to="/">
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link className="navBar__link" to="/">
                Safety Tips
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="navBar__aboutLink">
            <Link className="navBar__link" to="/about">
              About
            </Link>
          </div>
        </li>
        <li>
          <Link
            className={loggedIn ? "navBar__show navBar__link" : "navBar__hide"}
            to="/myfavorites"
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            className={loggedIn ? "navBar__show navBar__link" : "navBar__hide"}
            to="/editprofile"
          >
            My Profile
            {loggedIn && !userVerified ? "❗" : null}
          </Link>
        </li>
      </ul>

      <button
        className={
          loggedIn ? "navBar__show navBar__loginButton" : "navBar__hide"
        }
        id="logout"
        onClick={() => {
          signOutOfAccount();
          navigate("/");
        }}
      >
        Log out
      </button>

      <div
        className={
          loggedIn ? "navBar__hide" : "navBar__show navBar__loginButtonWrapper"
        }
      >
        <button onClick={openModal} id="sign-in-button">
          <span>Log in</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;

// const Nav = ({ signOutOfAccount, loggedIn, userVerified }) => {
//   const navigate = useNavigate();
//   return (
//     <nav className="nav header" id={loggedIn && "nav-loggedin"}>
//       <Link className="navBar__link" to={loggedIn ? "/myhome" : "/"}>
//         <div>
//           <img
//             className="nav-logo"
//             alt="Worth a Shot logo"
//             src={require("../assets/croppedLogo.png")}
//           />
//         </div>
//       </Link>
//       <div className="trending-link">
//         <Link className="navBar__link" to={loggedIn ? "/myhome" : "/"}>
//           {loggedIn ? "My Home" : "Home Page"}
//         </Link>
//       </div>
//       <div>
//         <Link className="navBar__link">Safety</Link>
//       </div>
//       <div className="navBar__aboutLink">
//         <Link className="navBar__link" to="/about">
//           About
//         </Link>
//       </div>
//       <Link className={loggedIn ? "navBar__show navBar__link" : "navBar__hide"} to="/myfavorites">
//         Favorites
//       </Link>
//       <Link className={loggedIn ? "navBar__show navBar__link" : "navBar__hide"} to="/editprofile">
//         My Profile
//         {loggedIn && !userVerified ? "❗" : null}
//       </Link>
//       <button
//         className={loggedIn ? "navBar__show navBar__loginButton" : "navBar__hide"}
//         id="logout"
//         onClick={() => {
//           signOutOfAccount();
//           navigate("/");
//         }}
//       >
//         Log out
//       </button>

//       <div className={loggedIn ? "navBar__hide" : "navBar__show navBar__loginButton"} id="login-wrapper">
//         <Link to="/sign-in" id="sign-in">
//           <button>
//             <span>Log in</span>
//           </button>
//         </Link>
//         <Link to="/sign-up" id="sign-up">
//           <button>
//             <span>Sign up</span>
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
