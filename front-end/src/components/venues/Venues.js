import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OneVenue from "./OneVenue";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Venues.scss";
const API = process.env.REACT_APP_API_URL;

const Venues = ({ user }) => {
  const [venueList, setVenueList] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    console.log(user);
    Aos.init({ duration: 3000 });
    axios
      .get(`${API}/users/${user.id}/preferences`)
      .then((response) => {
        setVenueList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  const handleLikes = () => {
    const likedSpot = setLikes([`${venueList.name}`]);
    return setLikes(likedSpot);
  };

  return (
    <div className="venuesWrapper">
      {user.age >= 21 ? (
        <Link to="/alcohols/categories">
          <button className="venuesWrapper__navToDrinksButton">
            Find Alcohol
          </button>
        </Link>
      ) : null}
      <h1 className="venuesWrapper__header">Recommended Venues for You</h1>
      <section className="venuesWrapper__venuesGrid" data-aos="fade-up">
        {venueList.map((venue) => {
          return <OneVenue venue={venue} handleLikes={handleLikes} />;
        })}
      </section>
    </div>
  );
};

export default Venues;
