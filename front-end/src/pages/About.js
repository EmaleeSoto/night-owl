import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="aboutSection" data-aos="fade-up">
      <h1 className="aboutSection__header">Why Night Owl?</h1>
      <div className="aboutSection__text">
        <p>
          Welcome to Night Owl, the ultimate social app for those who crave
          unforgettable nights filled with the perfect ambiance, tantalizing
          libations, and delightful connections. We're here to guide you through
          the nocturnal wonders of your city and help you craft extraordinary
          experiences that will leave you yearning for more.
        </p>
        <p>
          With Night Owl, finding your ideal nightlife destination has never
          been easier. Our integration with the Yelp API allows you to
          effortlessly discover venues that align with your desired atmosphere,
          whether you seek the cozy intimacy of a speakeasy or the vibrant
          energy of a bustling nightclub.
        </p>
        <p>
          That's not all. Our extensive database of alcoholic beverages enables
          you to dive into the world of mixology, empowering you to make
          informed choices about the libations that tickle your taste buds.
          Discover new cocktails, learn about their ingredients, and get
          inspired to try something new when you arrive at your chosen
          establishment.
        </p>
        <p>
          What truly sets Night Owl apart is our commitment to fostering
          connections. Connect with fellow night owls who share your passion for
          memorable experiences, and together, create memories that will last a
          lifetime. Night Owl is the catalyst for forging meaningful connections
          during your nocturnal escapades.
        </p>
        <p>
          Join us on Night Owl, where the night comes alive, friendships are
          forged, and the possibilities are endless. Unleash your inner night
          owl and embark on an extraordinary journey.
        </p>
      </div>
      <h1 className="aboutSection__bioHeader">Meet Our Dev</h1>
      <section className="aboutSection__bioSection">
        <article>
          <img
            className="aboutSection__headshot"
            src={require("../assets/headshot.jpeg")}
            alt="Headshot of Emalee Soto"
          />
          <h3 className="aboutSection__name">Emalee Soto</h3>
          <h3 className="aboutSection__title">Back-End/Team Lead</h3>
          <a
            href="https://github.com/EmaleeSoto"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="aboutSection__icon"
              alt="GitHub"
              title="GitHub"
              src={require("../assets/logos/github.png")}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/emalee-soto/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="aboutSection__icon"
              alt="LinkedIn"
              title="LinkedIn"
              src={require("../assets/logos/linkedin.png")}
            />
          </a>
          <p className="aboutSection__bio">
            I'm a full-stack Junior Web Developer at the Pursuit Fellowship. I
            have studied Computer Science at Hunter College, and plan to finish
            my Bachelor's within the next two years. I love coding, gaming, and
            music!
          </p>
          <p>
            I was inspired to create Night Owl because, as a young adult, I find
            that navigating the night life scene can be sometimes intimidating.
            I wanted to use my engineering abilities to create an app that would
            make socializing and exploring easier for night owls such as myself.
          </p>
        </article>
      </section>
      <div className="aboutSection__sourceText">
        <p>
          <a
            href="https://github.com/EmaleeSoto/capstone-worth-a-shot"
            target="_blank"
            rel="noreferrer"
          >
            Technical information and source code
          </a>{" "}
          available on GitHub.
        </p>
        <p className="aboutSection__sourceText">
          Made with love in New York City. The greatest city in the world.
        </p>
      </div>
    </section>
  );
};

export default About;

/*

I shot an arrow into the air,
It fell to earth, I knew not where;
For, so swiftly it flew, the sight
Could not follow it in its flight.

― Henry Wadsworth Longfellow

*/
