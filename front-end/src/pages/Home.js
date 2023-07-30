import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="home__firstPage">
        <div className="home__textContainer">
          <h1 className="home__header">
            Your Night.
            <br />
            Your Way.
          </h1>
          <div className="home____homeButtonContainer">
            <div className="home__buttonContainer">
              <Link to={`/sign-up`}>
                <button className="home__startButton">
                  <span>Let's get started</span>
                </button>
              </Link>
            </div>
          </div>

          <h4 className="home__quote">
            &ldquo;I feel sorry for people that don't drink, because when they
            wake up in the morning, that is the best they're going to feel all
            day.&rdquo; &#8211; Frank Sinatra
          </h4>
        </div>
      </div>
      <hr />
      <div className="home__nextPage" data-aos="fade-up">
        <section>
          <h1>Not just another social site</h1>
        </section>
        <div className="home__nextPage__gridContainer">
          <div className="home__nextPage__gridCell">
            <img src={require("../assets/map.png")} alt="Discover new places" />
            <h3>Discover new places</h3>
            <p>
              With Night Owl, you can discover new hangout spots that match your
              preferred vibes.
            </p>
          </div>
          <div className="home__nextPage__gridCell">
            <img
              src={require("../assets/alcohol.png")}
              alt="Learn your own tastes"
            />
            <h3>Experience new flavors</h3>
            <p>
              Night Owl provides an extesnvie guide on alcoholic beverages so
              you can explore a variety of drinks during your night out!
            </p>
          </div>
          <div className="home__nextPage__gridCell">
            <img
              src={require("../assets/dancing.jpeg")}
              alt="Meet new people"
            />
            <h3>Meet new people</h3>
            <p>
              What's nightlife without some company? Meet other night owls and
              expand your friend circle on our platform!
            </p>
          </div>
        </div>
        <div className="home__nextPage__summary" data-aos="fade-up">
          <h3>Why Night Owl?</h3>
          <p>
            Night Owl was developed with the goal of making nightlife navigation
            simple and seamless. Finding the perfect venue for you and your
            friends has never been easier. Join Night Owl and unlock a world of
            exciting experiences for the night owl in you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
