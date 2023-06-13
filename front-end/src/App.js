import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Onboarding from "./components/Onboarding";
import NavBar from "./components/NavBar";
import Drinks from "./components/Drinks";
import DrinksByPrefs from "./components/DrinksByPrefs";
import LandingPageSignedIn from "./pages/LandingPageSignedIn";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import IndividualDrink from "./components/IndividualDrink";
import DrinksCategories from "./components/DrinksCategories";
import Establishments from "./components/Establishments";
import Favorites from "./components/Favorites";
import EditProfile from "./components/EditProfile";
import ShowEstablishment from "./components/ShowEstablishment";
import FourOFour from "./pages/FourOFour";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [userVerified, setUserVerified] = useState(false);
  const [firebaseId, setFirebaseId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      setLogin(true);
      console.log(user.uid);
      setFirebaseId(user.uid); //firebase
      setUserEmail("");
    } else {
      // No user is signed in.
      setLogin(false);
    }
  });

  const deleteFirebaseAccount = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        // User deleted.
        alert("Your account has been deleted.");
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };
  const checkUserVerification = () => {
    const loggedInUser = auth.currentUser;
    if (loggedInUser !== null) {
      // The user object has basic properties such as display name, email, etc.
      setUserVerified(loggedInUser.emailVerified);
      setUserEmail(loggedInUser.email);
    }
  };
  const sendVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("A verification email has been sent to you!");
    });
  };

  const resetPassword = () => {
    if (userEmail === "" || !userEmail.includes("@")) {
      alert("Please enter your email.");
    } else if (
      window.confirm("Are you sure you want to reset your password?")
    ) {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          alert("An email has been sent for your password reset.");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  useEffect(() => {
    if (loggedIn) {
      axios
        .get(`${API}/users/firebase/${firebaseId}`)
        .then((response) => {
          setUser(response.data.oneUser);
        })
        .catch((error) => {
          console.log(error);
        });
      checkUserVerification();
    } else {
      setUser({});
    }
  }, [loggedIn, firebaseId]);

  const signOutOfAccount = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("You have signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  console.log("THIS IS USER: ", user);
  return (
    <div className="App">
      <Router>
        <NavBar
          signOutOfAccount={signOutOfAccount}
          loggedIn={loggedIn}
          userVerified={userVerified}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myhome" element={<LandingPageSignedIn user={user} />} />
          <Route
            path="/establishments"
            element={<Establishments user={user} />}
          />
          <Route
            path="/establishment/:id"
            element={<ShowEstablishment user={user} />}
          />
          <Route
            path="/onboarding"
            element={
              <Onboarding userFirebaseId={firebaseId} callback={setUser} />
            }
          />
          <Route
            path="/sign-in"
            element={<UserSignIn resetPassword={resetPassword} />}
          />
          <Route
            path="/sign-up"
            element={<UserSignUp userFirebaseId={firebaseId} />}
          />
          <Route path="/myfavorites" element={<Favorites user={user} />} />
          <Route
            path="/editprofile"
            element={
              <EditProfile
                user={user}
                setUser={setUser}
                signOutOfAccount={signOutOfAccount}
                sendEmailVerification={sendVerification}
                userVerified={userVerified}
                deleteFirebaseAccount={deleteFirebaseAccount}
              />
            }
          />
          <Route path="/alcohols/:id" element={<IndividualDrink />} />
          <Route
            path="/alcohols/categories"
            element={<DrinksCategories user={user} />}
          />
          <Route path="/alcohols/category/:category" element={<Drinks />} />
          <Route
            path="alcohols/drinksforyou"
            element={<DrinksByPrefs user={user} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FourOFour loggedIn={loggedIn} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
