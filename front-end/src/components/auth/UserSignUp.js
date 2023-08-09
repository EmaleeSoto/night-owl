import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../firebase";
import "./UserSignUp.scss";

export default function SignUp() {
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
      signUp();
    }
  };

  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, profile.email, profile.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          alert(
            "Welcome to Night Owl! You're now signed into your new account."
          );
          navigate("/onboarding");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        if (error.code === "auth/email-already-in-use") {
          alert(
            "There's already an account associated with this email address. Please try logging in instead."
          );
        } else if (error.code === "auth/invalid-email") {
          alert(
            "That's not a valid email address! Please enter a valid email address and password."
          );
        } else if (error.code === "auth/internal-error") {
          alert(
            "That's not a valid password! Please enter a valid email address and password."
          );
        } else {
          alert(
            `${errorCode} - Please enter a valid email address and password.`
          );
        }
      });
  };

  return (
    <div className="signUp">
      <form className="signUp__container" onSubmit={signUp}>
        <h1 className="signUp__header">Create an Account</h1>
        <div className="signUp__inputLabelWrap">
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
        <div className="signUp__inputLabelWrap">
          <label htmlFor="password">Password:</label>
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
          className="signUp__signUpButton"
          value="Create Account"
        />
        <h3>
          Our quick and easy onboarding experience will allow our algorithm to
          find the right nightlife venues for you!
        </h3>
      </form>
    </div>
  );
}
