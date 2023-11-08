import { useEffect } from "react";
import Aos from "aos";
import "./HomePageThree.scss";

export default function HomePageThree() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="thirdPage" data-aos="fade-up">
      <img src={require("../../assets/home_page_images/blurbimage.jpeg")} />
      <div className="thirdPage__textWrap">
        <h2>Why Night Owl?</h2>
        <p>
          Night Owl was developed with the goal of making nightlife navigation
          simple and seamless. Whether you are a young adult who is new to the
          nightlife scene in need of guidance, or you are a veteran night owl
          looking for new experiences, Night Owl will hook you up with the best
          places, drinks, and people in your city! Finding the perfect venue for
          you and your friends has never been easier. Join Night Owl and unlock
          a world of exciting experiences for the night owl in you!
        </p>
      </div>
    </div>
  );
}
