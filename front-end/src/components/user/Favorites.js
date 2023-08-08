import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
const API = process.env.REACT_APP_API_URL;

export default function Favorites({ user, Favorite }) {
  const [likedVenues, setLikedVenues] = useState([]);
  console.log(user);

  useEffect(() => {
    axios
      .get(`${API}/uservenues/${user.id}`)
      .then((response) => {
        setLikedVenues([...response.data.venues]);
      })
      .catch();
    console.log("LIKED PLACES:", likedVenues);
  }, [user]);

  return (
    <div className="favorite-page">
      <h1>Your Favorite Places</h1>
      <div className="favorites-container">
        {likedVenues.map((likedVenue, index) => {
          return (
            <div className="favorites-cell" key={index}>
              <Link to={`/establishment/${likedVenue.yelp_id}`}>
                <h1 className="favorite-name">{likedVenue.name}</h1>
                <img src={likedVenue.image} alt={likedVenue.name} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
