import { useEffect } from "react";
import Aos from "aos";
import "./HomePageTwo.scss";

export default function HomePageTwo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="secondPage" data-aos="fade-up">
      <section>
        <h1>Not just another social media site</h1>
      </section>
      <div className="secondPage__gridContainer">
        <div className="secondPage__gridCell">
          <img
            src={require("../../assets/home_page_images/newplaces.jpeg")}
            alt="Discover new places"
          />
          <h3>Discover new places</h3>
          <p>
            With Night Owl, you can discover new hangout spots that match your
            preferred vibes by choosing between venue categories. Save your
            favorites so you can revisit them anytime, creating a personalized
            profile of your go-to places for future adventures.
          </p>
        </div>
        <div className="secondPage__gridCell">
          <img
            src={require("../../assets/home_page_images/newflavors.png")}
            alt="Experience new flavors"
          />
          <h3>Experience new flavors</h3>
          <p>
            Unlock an extensive guide to a wide variety of beverages that you
            can order at any bar! Dive into the world of drinks curated to your
            favorite flavors, complete with detailed ingredient lists and
            tantalizing descriptions to help you make informed choices and savor
            the perfect drink for your taste
          </p>
        </div>
        <div className="secondPage__gridCell">
          <img
            src={require("../../assets/home_page_images/newpeople.png")}
            alt="Meet new people"
          />
          <h3>Meet new people</h3>
          <p>
            Whether you're looking for a friend or a partner in crime, our user
            profiling system allows you to expand your social circle. Send
            friend requests and engage in direct messaging to make exciting new
            connections. Engage in forum discussions to stay in the know about
            the hottest spots and events in town!
          </p>
        </div>
      </div>
    </div>
  );
}
