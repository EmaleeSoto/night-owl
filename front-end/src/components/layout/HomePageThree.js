import { useEffect } from "react";
import Aos from "aos";
import "./HomePageThree.scss";

export default function HomePageThree() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="thirdPage" data-aos="fade-up">
      <img src={require("../../assets/home_page_images/blurbimage.png")} />
      <div className="thirdPage__textWrap">
        <h2>Why Night Owl?</h2>
        <p>
          Night Owl was created the with the goal of making nightlife navigation
          more easily accessible to everyone. Now, our web application connects
          users with nightlife activities in their city. Whether you're seeking
          new venues, looking to try new beverages, or simply wanting to connect
          with other night owls, our tools will allow you to engage with your
          surroundings for the night. We've created a user-friendly platform
          that makes it easy to channel your inner night owl.
        </p>
      </div>
    </div>
  );
}
