import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./LandingSignedIn.scss";

const LandingPageSignedIn = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const delay = setTimeout(() => {
      setUserData(user);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, [user]);

  return (
    <div>
      {isLoading ? (
        <h1 className="loadingContainer">Loading...</h1>
      ) : (
        <div className="landingContainer" data-aos="fade-up">
          <h1>
            Hi <span>{userData?.name}</span>, what are your plans tonight?
          </h1>
          <div className="landingContainer__imageContainer">
            <div>
              <Link to={`/venues`}>
                <img
                  src={require("../assets/stock_images/venue.jpeg")}
                  alt="Find Bars and Clubs"
                />
              </Link>
              <br></br>
              <Link to={`/venues`}>
                <button className="landingContainer__imageContainer__exploreButton">
                  Find Bars and Clubs
                </button>
              </Link>
            </div>
            <div>
              <Link to="/alcohols/categories">
                <img
                  src={require("../assets/stock_images/alcohols.jpeg")}
                  alt="Find Drinks"
                />
              </Link>
              <br></br>
              {userData?.age < 21 ? (
                <h2>
                  Sorry, the legal drinking age in the US is 21. Come back soon!
                </h2>
              ) : (
                <Link to="/alcohols/categories">
                  <button className="landingContainer__imageContainer__exploreButton">
                    Find Drinks
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageSignedIn;
