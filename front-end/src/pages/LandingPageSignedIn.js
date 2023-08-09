import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingSignedIn.scss";

const LandingPageSignedIn = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect with a dependency on the 'user' prop
  useEffect(() => {
    // Simulate a delay to showcase the effect (you can replace this with actual data fetching)
    const delay = setTimeout(() => {
      // When the 'user' prop changes, update the component state
      setUserData(user);
      setIsLoading(false); // Mark loading as false after receiving the user data
    }, 1000); // 1 second delay (adjust this according to your needs)

    // Cleanup function to clear the timeout when the component unmounts or when 'user' changes
    return () => clearTimeout(delay);
  }, [user]);

  console.log(user);
  return (
    <div>
      {isLoading ? (
        <h1 className="loadingContainer">Loading...</h1>
      ) : (
        <div className="landingContainer">
          <h1>Hi {userData?.name}, what are your plans tonight?</h1>
          <div className="landingContainer__imageContainer">
            <div>
              <Link to={`/establishments`}>
                <img
                  src={require("../assets/stock_images/venue.jpeg")}
                  alt="Find Bars and Clubs"
                />
              </Link>
              <br></br>
              <Link to={`/establishments`}>
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
