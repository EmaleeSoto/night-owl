import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import app from "../../firebase";
import "./UserSignIn.scss";

export default function UserSignIn({ resetPassword }) {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      signIn();
    }
  };

  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, profile.email, profile.password)
      .then((userCredential) => {
        // Action when user is signed in
        const user = userCredential.user;
        if (user) {
          //get firebase id
          alert("Welcome back! You're now logged in!");
          // Navigates to a USER Splash Page (this should be personal to each user)
          navigate("/myhome");
        }
        // ...
      })
      .catch((error) => {
        console.log(profile.email, profile.password);
        const errorCode = error.code;
        console.log(errorCode);

        if (error.code === "auth/user-not-found") {
          alert(
            "User not found! Please enter a valid email address and password or sign up if you don't have an account."
          );
        } else {
          alert(
            `${errorCode} - Please enter a valid email address and password.`
          );
        }
      });
  };
  return (
    <div className="signIn">
      <form className="signIn__container" onSubmit={signIn}>
        <h1 className="signIn__header">Welcome Back!</h1>
        <div className="signIn__inputLabelWrap">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="user@example.com"
            onChange={handleTextChange}
            autoComplete="off"
            required
            onKeyDown={handlePress}
          />
        </div>
        <br></br>
        <div className="signIn__inputLabelWrap">
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleTextChange}
            autoComplete="off"
            required
            onKeyDown={handlePress}
          />
        </div>
        <br></br>
        <input
          type="submit"
          className="signIn__container__loginSubmitInput"
          value="Log In"
        />
        <h4
          className="signIn__container__authLink"
          id="forgot-password"
          onClick={resetPassword}
        >
          Forgot Password?
        </h4>
        <p>
          Need an Account?{" "}
          <Link
            className="signIn__container__authLink signIn__container__navLink"
            to="/sign-up"
          >
            Create an Account here.
          </Link>
        </p>
      </form>
    </div>
  );
}
