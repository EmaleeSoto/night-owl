import { Link } from "react-router-dom";

export default function OneEstablishment({ venue }) {
  const array = [];
  console.log(venue);
  const formatCategories = () => {
    venue.categories.forEach((pref) => {
      array.push(pref.title);
    });
    return array.join(" | ");
  };
  return (
    <div className="one-establishment" key={venue.id}>
      <div>
        <Link to={`/establishment/${venue.id}`}>
          <h1 className="establishment-name">{venue.name}</h1>
          <img id="index-image" src={venue.image_url} alt={venue.name} />
        </Link>
        <p>
          {venue.location.display_address[0]}
          {", "}
          {venue.location.display_address[1]}
        </p>
        <p>Rating: {venue.rating} / 5</p>

        <p className="pref-category"> Categories: {formatCategories()}</p>
      </div>
    </div>
  );
}
