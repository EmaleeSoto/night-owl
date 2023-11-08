import HomePageOne from "../components/layout/HomePageOne";
import HomePageTwo from "../components/layout/HomePageTwo";
import HomePageThree from "../components/layout/HomePageThree";
import "./Home.scss";

const Home = ({ openModal }) => {
  return (
    <div className="home">
      <HomePageOne openModal={openModal} />
      <HomePageTwo />
      <HomePageThree />
    </div>
  );
};

export default Home;
