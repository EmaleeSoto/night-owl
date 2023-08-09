import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Onboarding.scss";
const API = process.env.REACT_APP_API_URL;

//TODO: LET FLAVORS HAVE MULTIPLE INPUTS

export default function Onboarding({ userFirebaseId, callback }) {
  let [displayNextForm, setDisplayNextForm] = useState(false);
  let [user, setUser] = useState({
    name: "",
    age: 0,
    gender: "",
    zip_code: "",
    personality: "",
    flavors: "",
    atmosphere: "",
    firebase_id: "",
  });
  let [atmospheres, setAtmospheres] = useState([]);
  let [flavorPrefs, setFlavorPrefs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("FIREBASE UID: ", userFirebaseId);
    setUser({ firebase_id: userFirebaseId });
  }, []);

  const addUser = async (user) => {
    // let finalFlavors = flavorPrefs.join(", ");
    // user.flavors = finalFlavors;
    await axios
      .post(`${API}/users`, user)
      .then((response) => {
        callback(response.data.oneUser);
        navigate("/myhome");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateAge = (birthdate) => {
    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();
    const years = currentDate.getFullYear() - birthDateObj.getFullYear();

    if (
      currentDate.getMonth() < birthDateObj.getMonth() ||
      (currentDate.getMonth() === birthDateObj.getMonth() &&
        currentDate.getDate() < birthDateObj.getDate())
    ) {
      return years - 1;
    }

    return years;
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleAgeChange = (event) => {
    const usersAge = calculateAge(event.target.value);
    setUser({ ...user, [event.target.id]: Number(usersAge) });
  };

  const handleAtmosphere = (event) => {
    event.preventDefault();
    event.target.className ===
    "onboarding__formContainer__buttonWrapper__clicked"
      ? (event.target.className =
          "onboarding__formContainer__buttonWrapper__notClicked")
      : (event.target.className =
          "onboarding__formContainer__buttonWrapper__clicked");
    if (atmospheres.indexOf(event.target.value) > 0) {
      atmospheres.splice(atmospheres.indexOf(event.target.value), 1);
      setAtmospheres(atmospheres);
    } else {
      setAtmospheres((atmospheres) => [...atmospheres, event.target.value]);
    }
  };

  const handleFlavorsAdding = (event) => {
    const flavorsString = user.flavors;
    if (user.flavors !== undefined) {
      const newArray = user.flavors.split(", ");
      console.log(newArray);
      if (newArray.indexOf(event.target.value) >= 0) {
        newArray.splice(newArray.indexOf(event.target.value), 1);
        console.log("REMOVED: ", user.flavors);
        setUser({ ...user, flavors: newArray.join(", ") });
      } else {
        setUser({
          ...user,
          flavors: `${flavorsString}, ` + event.target.value,
        });
      }
    } else {
      setUser({
        ...user,
        flavors: event.target.value,
      });
    }
  };

  //Check validity of Zip Code
  const zipCodeCheck = (zipCode) => {
    if (zipCode.length !== 5) {
      return false;
    }
    for (const num of zipCode) {
      if (typeof Number(num) !== "number") {
        return false;
      }
    }
    return true;
  };

  //Check User Age
  const handleAgeCheck = (age) => {
    return age < 18 ? false : true;
  };

  const goToNextForm = (event) => {
    event.preventDefault();
    setDisplayNextForm(true);
  };
  const goToPreviousForm = (event) => {
    event.preventDefault();
    setDisplayNextForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    user.atmosphere = atmospheres.join(", ");

    if (user.name === undefined) {
      alert("Please enter your name");
    } else if (user.age === undefined) {
      alert(
        "Sorry, you need to be over 18 to create an account with our site!"
      );
    } else if (!handleAgeCheck(user.age)) {
      alert(
        "Sorry, you need to be over 18 to create an account with our site!"
      );
    } else if (user.gender === undefined) {
      alert("Please select your gender!");
    } else if (user.zip_code === undefined) {
      alert("Please enter a valid Zip Code!");
    } else if (!zipCodeCheck(user.zip_code)) {
      alert("Please enter a valid Zip Code!");
    } else if (user.personality === undefined) {
      alert("Please describe yourself");
    } else if (user.flavors === undefined) {
      alert("Please choose at least one flavor preference");
    } else if (user.atmosphere === undefined) {
      alert("Please choose at least one atmospheric vibe!");
    } else {
      addUser(user);
    }
  };

  console.log(user);
  //TODO: Add age validity check
  return (
    <div className="onboarding">
      <form className="onboarding__formContainer" onSubmit={handleSubmit}>
        <div
          className={
            !displayNextForm
              ? "onboarding__formContainer__show"
              : "onboarding__formContainer__hidden"
          }
        >
          <h1 className="onboarding__formContainer__header">
            Let's get to know you better.
          </h1>
          <section className="onboarding__formContainer__contentWrapper">
            <div className="onboarding__formContainer__contentWrapper__inputLabelWrap">
              <label htmlFor="name">What's your name? </label>
              <input
                id="name"
                type="text"
                onChange={handleTextChange}
                autoComplete="off"
                novalidate
              />
            </div>
            <br />
            <div className="onboarding__formContainer__contentWrapper__inputLabelWrap">
              <label htmlFor="age">Age? </label>
              <input
                id="age"
                name="age"
                type="date" //TODO: Change to calendar and calculate age later
                onChange={handleAgeChange}
                autoComplete="off"
                novalidate
              />
            </div>
            <br />
            <h3>What is your gender identity?</h3>
            <div className="onboarding__formContainer__contentWrapper__radio">
              <label htmlFor="male">Male</label>
              <input
                id="gender"
                type="radio"
                name="gender"
                onChange={handleTextChange}
                value="Male"
              />
            </div>
            <div className="onboarding__formContainer__contentWrapper__radio">
              <label htmlFor="female">Female</label>
              <input
                id="gender"
                type="radio"
                name="gender"
                onChange={handleTextChange}
                value="Female"
              />
            </div>
            <div className="onboarding__formContainer__contentWrapper__radio">
              <label htmlFor="other">Other</label>
              <input
                id="gender"
                type="radio"
                name="gender"
                onChange={handleTextChange}
                value="Other"
              />
            </div>
            <br />
            <div className="onboarding__formContainer__contentWrapper__inputLabelWrap">
              <label htmlFor="zip_code">Zip Code: </label>
              <input
                id="zip_code"
                type="text"
                size="5"
                maxLength="5"
                onChange={handleTextChange}
                autoComplete="off"
                novalidate
              />
            </div>
          </section>
          <button
            className="onboarding__formContainer__nextButton"
            type="button"
            onClick={goToNextForm}
          >
            Next
          </button>
        </div>
        <div
          className={
            displayNextForm
              ? "onboarding__formContainer__show"
              : "onboarding__formContainer__hidden"
          }
        >
          <h1 className="onboarding__formContainer__header">
            Let's get to know you
          </h1>
          <section className="onboarding__formContainer__contentWrapper">
            <label
              className="onboarding__formContainer__contentWrapper__description"
              htmlFor="personality"
            >
              Which trait best describes you?
            </label>
            <br />
            <select id="personality" onChange={handleTextChange}>
              <option hidden disabled selected value>
                -- select an option --
              </option>
              <option value="Extrovert">Extrovert</option>
              <option value="Introvert">Introvert</option>
              <option value="Ambivert">Ambivert</option>
            </select>

            <br />
            <h3>Choose your favorite beverage flavors: </h3>
            <div className="onboarding__formContainer__contentWrapper__checkbox">
              <label>Sweet</label>
              <input
                id="flavors"
                type="checkbox"
                onChange={handleFlavorsAdding}
                name="flavor-1"
                value="Sweet"
              />
            </div>
            <div className="onboarding__formContainer__contentWrapper__checkbox">
              <label>Bitter</label>
              <input
                id="flavors"
                type="checkbox"
                onChange={handleFlavorsAdding}
                name="flavor-2"
                value="Bitter"
              />
            </div>
            <div className="onboarding__formContainer__contentWrapper__checkbox">
              <label>Sour</label>
              <input
                id="flavors"
                type="checkbox"
                onChange={handleFlavorsAdding}
                name="flavor-3"
                value="Sour"
              />
            </div>
            <div className="onboarding__formContainer__contentWrapper__checkbox">
              <label>Tangy</label>
              <input
                id="flavors"
                type="checkbox"
                onChange={handleFlavorsAdding}
                name="flavor-4"
                value="Tangy"
              />
            </div>
            <div className="onboarding__formContainer__contentWrapper__checkbox">
              <label>Dry</label>
              <input
                id="flavors"
                type="checkbox"
                onChange={handleFlavorsAdding}
                name="flavor-5"
                value="Dry"
              />
            </div>
          </section>
          <h2 className="onboarding__formContainer__venueVibes">
            Pick your venue vibes
          </h2>
          <br />
          <div className="onboarding__formContainer__buttonWrapper">
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="adultentertainment"
            >
              Adult Entertainment
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="stripclubs"
            >
              Strip Club
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="cocktailbars"
            >
              Cocktails
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="champagne_bars"
            >
              Fancy
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="divebars"
            >
              Casual and Social
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="gaybars"
            >
              LGBTQ+
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="hookah_bars"
            >
              Hookah
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="lounges"
            >
              Lounge
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="pubs"
            >
              Pubs
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="sakebars"
            >
              Sake
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="sportsbars"
            >
              Sports
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="coffeeshops"
            >
              Coffee & Cafe
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="comedyclubs"
            >
              Comedy
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="danceclubs"
            >
              Dancing
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="jazzandblues"
            >
              Jazz and Blues
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="karaoke"
            >
              Karaoke
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="musicvenues"
            >
              Music
            </button>
            <button
              className="onboarding__formContainer__buttonWrapper__atmosphere"
              id="atmosphere"
              onClick={handleAtmosphere}
              value="poolhalls"
            >
              Pool Hall
            </button>
          </div>
          <br />
          <br />
          <button
            className="onboarding__formContainer__backButton"
            onClick={goToPreviousForm}
          >
            Back
          </button>
          <input
            className="onboarding__formContainer__submitInput"
            id="submit-new-user"
            type="submit"
            value="Create Profile"
          />
        </div>
      </form>
    </div>
  );
}
