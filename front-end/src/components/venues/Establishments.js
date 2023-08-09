import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OneEstablishment from "./OneEstablishment";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Establishments.css";
const API = process.env.REACT_APP_API_URL;

const Establishments = ({ user }) => {
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
    <div className="establishmentWrapper">
      {user.age >= 21 ? (
        <Link to="/alcohols/categories">
          <button id="index-button">Find Alcohol</button>
        </Link>
      ) : null}
      <h1 className="establishment-header">
        Here are some great places to try.
      </h1>
      <section className="establishment-grid" data-aos="fade-up">
        {venueList.map((venue) => {
          return <OneEstablishment venue={venue} handleLikes={handleLikes} />;
        })}
      </section>
    </div>
  );
};

export default Establishments;
