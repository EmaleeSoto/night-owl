import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ShowReviews from "./ShowReviews.js";
import "./ShowVenue.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Aos from "aos";
import "aos/dist/aos.css";
const API = process.env.REACT_APP_API_URL;

//TODO: SHOW PAGE WORKS, FIX ADDRES1 ERROR (BEING UNDEFINED)
//SOMETIMES ADDRESS1 IS UNDEFINED AND CRASHES APP DESPITE CONDITIONAL
export default function ShowVenue({ user }) {
  const [venue, setVenue] = useState({});
  const [venueReviews, setVenueReviews] = useState([]);
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    axios
      .get(`${API}/yelpvenues/${id}`)
      .then((res) => {
        setVenue(res.data);
        console.log("YELP CHECK", res.data);
      })
      .catch(() => {
        navigate("/not found");
      });

    axios
      .get(`${API}/yelpvenues/reviews/${id}`)
      .then((res) => {
        setVenueReviews(res.data.reviews);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const militaryToUSD = (time) => {
    const hrs = String(time).substring(0, 2);
    const postScript = Number(hrs) > 12 ? "PM" : "AM";
    const mins = String(time).substring(2);
    return `${postScript === "PM" ? hrs - 12 : hrs}:${mins} ${postScript}`;
  };

  const handleLike = (event) => {
    event.preventDefault();
    setLike(true);
    axios
      .post(`${API}/uservenues/addfavorite`, {
        user_uid: user.id,
        yelp_id: venue.id,
        name: venue.name,
        image: venue.image_url,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="venue">
      <button className="venue__backButton">
        <Link to="/venues">Go back to venues</Link>
      </button>
      <h1>Check this place out!</h1>
      <br />
      <section className="venue__infoGrid" data-aos="fade-up">
        <div className="venue__infoGrid__firstCell">
          <h1 className="venue__infoGrid__firstCell__venueName">
            {venue.name}
          </h1>
          <h3>
            Address: {venue?.location?.display_address[0]},{" "}
            {venue?.location?.display_address[1]}
          </h3>
          <h4>Contact: {venue.display_phone}</h4>
          <h4>Rating: {venue.rating} / 5</h4>
          <button id="like-button" onClick={handleLike}>
            Like this bar? Save it! ⭐️
          </button>
        </div>
        <div className="venue__infoGrid__secondCell">
          <img
            alt="venue"
            className="venue__infoGrid__secondCell__venueImage"
            src={
              venue.image_url !== "" ? venue.image_url : "./images/no-image.png"
            }
          />
          <h3>
            Hours of Operation:{" "}
            {militaryToUSD(venue?.hours?.[0].open?.[0].start)} -{" "}
            {militaryToUSD(venue?.hours?.[0].open?.[0].end)}
          </h3>
        </div>
      </section>
      <div className="venue__reviewGrid" data-aos="fade-up">
        <ShowReviews name={venue.name} venueReviews={venueReviews} />
        <section className="venue__photoWrap">
          <h2>Photo Gallery</h2>
          <Carousel width={150} autoPlay={true} infiniteLoop={true}>
            {venue?.photos?.map((photo) => {
              return (
                <img
                  className="venue__photoWrap__photo"
                  src={photo}
                  alt="photo"
                />
              );
            })}
          </Carousel>
        </section>
      </div>
    </div>
  );
}

//javascript optional chaining
//? before array
