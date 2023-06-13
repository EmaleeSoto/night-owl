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
          <div className="home__buttonSplashContainer">
            <div className="home__buttonContainer">
              <Link to={`/sign-up`}>
                <button className="home__startButton">
                  <span>Let's get started</span>
                </button>
              </Link>
            </div>

            <img
              className="home__splashImage"
              src={require("../assets/owlLogo.png")}
              alt="Group of people partying"
            />
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
          Night Owl is a platform designed for night owls who love to explore
          the nightlife scene. Whether you're looking for new hangout spots,
          want to learn about different alcoholic beverages, or wish to connect
          with like-minded individuals, Night Owl has got you covered. Join
          Night Owl and unlock a world of exciting experiences for the nocturnal
          adventurers
        </section>
        <div className="home__nextPage__gridContainer">
          <div className="home__nextPage__gridCell">
            <img src={require("../assets/map.png")} alt="Discover new places" />
            <h3>Discover new places</h3>
            <p>
              With Night Owl, you can find new hangout spots that match your
              preferred vibes.
            </p>
          </div>
          <div className="home__nextPage__gridCell">
            <img
              src={require("../assets/alcohol.png")}
              alt="Learn your own tastes"
            />
            <h3>Learn your own tastes</h3>
            <p>
              Night Owl provides a guide on alcoholic beverages so you can
              explore new drinks to try on your night out!
            </p>
          </div>
          <div className="home__nextPage__gridCell">
            <img
              src={require("../assets/dancing.jpeg")}
              alt="Meet new people"
            />
            <h3>Meet new people</h3>
            <p>
              What's a good night out without some company? Meet likeminded
              people to connect with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
