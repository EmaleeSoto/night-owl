import { Link } from "react-router-dom";
import "./OneVenue.scss";

export default function OneEstablishment({ venue }) {
  const array = [];
  const formatCategories = () => {
    venue.categories.forEach((pref) => {
      array.push(pref.title);
    });
    return array.join(" | ");
  };
  return (
    <div className="oneVenue" key={venue.id}>
      <Link to={`/venue/${venue.id}`}>
        <h1 className="oneVenue__venueName">{venue.name}</h1>
        <img
          className="oneVenue__venueImage"
          src={venue.image_url}
          alt={venue.name}
        />
        <p>
          {venue.location.display_address[0]}
          {", "}
          {venue.location.display_address[1]}
        </p>
        <p>{venue.rating} / 5 ⭐</p>

        <p className="pref-category">{formatCategories()}</p>
      </Link>
    </div>
  );
}
