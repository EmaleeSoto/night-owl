import "./ShowReviews.scss";

export default function ShowReviews({ name, venueReviews }) {
  return (
    <section className="reviewSection">
      <h2>
        Reviews on <span>{name}</span>
      </h2>
      {venueReviews?.map((review) => {
        return (
          <div className="reviewSection__reviewInfo">
            <section>
              <h4>{review.user?.name}</h4>
              <p>'{review.text}'</p>
              <p>Rating: {review.rating} / 5 ⭐</p>
            </section>
          </div>
        );
      })}
    </section>
  );
}
