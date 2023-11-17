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
      <div className="aboutSection__firstPage">
        <h1 className="aboutSection__header">
          Reinventing the Night Life Experience
        </h1>
        <div className="aboutSection__firstPage__contentWrapper">
          <img
            src={require("./../assets/about_page_images/nightowlgirl.png")}
            alt="Night Owl Girl"
          />
          <div className="aboutSection__firstPage__contentWrapper__text">
            <div>
              <p>
                <span>Why Night Owl is Important</span> - Embraced by many, the
                nightlife holds a significant place in people's lives. Night Owl
                serves as a friendly guide for those who want to experience the
                nightlife in their city. Navigating new experiences is seamless
                and easy!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutSection__secondPage" data-aos="fade-up">
        <h1 className="aboutSection__bioHeader">Meet Our Dev</h1>
        <section className="aboutSection__bioSection">
          <article>
            <img
              className="aboutSection__headshot"
              src={require("../assets/headshot.jpeg")}
              alt="Headshot of Emalee Soto"
            />
            <h3 className="aboutSection__name">Emalee Soto</h3>
            <h3 className="aboutSection__title">
              Junior Fullstack Web Developer
            </h3>
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
              I'm a full-stack Junior Web Developer who has completed the
              year-long Pursuit Fellowship bootcamp in New York City. I have
              studied Computer Science at Hunter College, and plan to finish my
              Bachelor's Degree once I acquire my first engineering position. I
              love coding, gaming, and music!
            </p>
            <p className="aboutSection__bio">
              I was inspired to create Night Owl because, as a young adult, I
              find that navigating the night life scene can be sometimes
              intimidating. I wanted to use my engineering abilities to create
              an app that would make socializing and exploring easier for night
              owls such as myself.
            </p>
          </article>
        </section>
      </div>
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
