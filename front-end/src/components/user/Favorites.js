import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.scss";
const API = process.env.REACT_APP_API_URL;

export default function Favorites({ user, Favorite }) {
  const [likedVenues, setLikedVenues] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/uservenues/${user.id}`)
      .then((response) => {
        setLikedVenues([...response.data.venues]);
      })
      .catch();
  }, [user]);

  return (
    <div className="favoritesPage">
      <h1>Your Favorite Places</h1>
      <div className="favoritesPage__container">
        {likedVenues.map((likedVenue, index) => {
          return (
            <div className="favoritesPage__container__cell" key={index}>
              <Link to={`/venue/${likedVenue.yelp_id}`}>
                <h1>{likedVenue.name}</h1>
                <img src={likedVenue.image} alt={likedVenue.name} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
