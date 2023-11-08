import { useEffect } from "react";
import Aos from "aos";
import "./Home.scss";

const Home = ({ openModal }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="home__firstPage">
        <div className="home__firstContainer">
          <div className="home__firstContainer__middleContainer">
            <h1 className="home__header">Your Night. Your Way.</h1>
            <h4 className="home__quote">
              Start exploring your city's vibrant nightlife scene. Sign in or
              create an account with us here!
            </h4>
            <div className="home__buttonContainer">
              <button
                className="home__buttonContainer__startButton"
                onClick={openModal}
              >
                <span>Sign Up</span>
              </button>
              <button
                onClick={openModal}
                className="home__buttonContainer__loginButton"
              >
                <span>Log in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home__nextPage" data-aos="fade-up">
        <section>
          <h1>Not just another social site</h1>
        </section>
        <div className="home__nextPage__gridContainer">
          <div className="home__nextPage__gridCell">
            <img
              src={require("../assets/home_page_images/newplaces.jpeg")}
              alt="Discover new places"
            />
            <h3>Discover new places</h3>
            <p>
              With Night Owl, you can discover new hangout spots that match your
              preferred vibes.
            </p>
          </div>
          <div className="home__nextPage__gridCell">
            <img
              src={require("../assets/home_page_images/newflavors.png")}
              alt="Experience new flavors"
            />
            <h3>Experience new flavors</h3>
            <p>
              Night Owl provides an extensive guide on alcoholic beverages so
              you can explore a variety of drinks during your night out!
            </p>
          </div>
          <div className="home__nextPage__gridCell">
            <img
              src={require("../assets/home_page_images/newpeople.png")}
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
