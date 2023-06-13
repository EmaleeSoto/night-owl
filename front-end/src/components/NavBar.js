import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Nav = ({ signOutOfAccount, loggedIn, userVerified }) => {
  const navigate = useNavigate();
  return (
    <nav className="nav header" id={loggedIn && "nav-loggedin"}>
      <Link className="nav-link" to={loggedIn ? "/myhome" : "/"}>
        <div>
          <img
            className="nav-logo"
            alt="Worth a Shot logo"
            src={require("../assets/croppedLogo.png")}
          />
        </div>
      </Link>
      <ul>
        <li>
          <div className="trending-link">
            <Link className="nav-link" to={loggedIn ? "/myhome" : "/"}>
              {loggedIn ? "My Home" : "Home Page"}
            </Link>
          </div>
        </li>
        <li className="dropdown">
          <div>
            <Link className="nav-link">Safety</Link>
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link className="nav-link" to="/community-guidelines">
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/safety-tips">
                Safety Tips
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="about-link">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
        </li>
        <li>
          <Link
            className={loggedIn ? "show nav-link" : "hide"}
            to="/myfavorites"
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            className={loggedIn ? "show nav-link" : "hide"}
            to="/editprofile"
          >
            My Profile
            {loggedIn && !userVerified ? "❗" : null}
          </Link>
        </li>
      </ul>

      <button
        className={loggedIn ? "show tab" : "hide"}
        id="logout"
        onClick={() => {
          signOutOfAccount();
          navigate("/");
        }}
      >
        Log out
      </button>

      <div className={loggedIn ? "hide" : "show tab"} id="login-wrapper">
        <Link to="/sign-in" id="sign-in">
          <button>
            <span>Log in</span>
          </button>
        </Link>
        <Link to="/sign-up" id="sign-up">
          <button>
            <span>Sign up</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

// const Nav = ({ signOutOfAccount, loggedIn, userVerified }) => {
//   const navigate = useNavigate();
//   return (
//     <nav className="nav header" id={loggedIn && "nav-loggedin"}>
//       <Link className="nav-link" to={loggedIn ? "/myhome" : "/"}>
//         <div>
//           <img
//             className="nav-logo"
//             alt="Worth a Shot logo"
//             src={require("../assets/croppedLogo.png")}
//           />
//         </div>
//       </Link>
//       <div className="trending-link">
//         <Link className="nav-link" to={loggedIn ? "/myhome" : "/"}>
//           {loggedIn ? "My Home" : "Home Page"}
//         </Link>
//       </div>
//       <div>
//         <Link className="nav-link">Safety</Link>
//       </div>
//       <div className="about-link">
//         <Link className="nav-link" to="/about">
//           About
//         </Link>
//       </div>
//       <Link className={loggedIn ? "show nav-link" : "hide"} to="/myfavorites">
//         Favorites
//       </Link>
//       <Link className={loggedIn ? "show nav-link" : "hide"} to="/editprofile">
//         My Profile
//         {loggedIn && !userVerified ? "❗" : null}
//       </Link>
//       <button
//         className={loggedIn ? "show tab" : "hide"}
//         id="logout"
//         onClick={() => {
//           signOutOfAccount();
//           navigate("/");
//         }}
//       >
//         Log out
//       </button>

//       <div className={loggedIn ? "hide" : "show tab"} id="login-wrapper">
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
