import "./HomePageOne.scss";

export default function HomePageOne({ openModal }) {
  return (
    <div className="firstPage">
      <div className="firstPage__firstContainer">
        <div className="firstPage__firstContainer__middleContainer">
          <h1 className="firstPage__header">Your Night. Your Way.</h1>
          <h4 className="firstPage__quote">
            Start exploring your city's vibrant nightlife scene. Sign in or
            create an account with us here!
          </h4>
          <div className="firstPage__buttonContainer">
            <button
              className="firstPage__buttonContainer__startButton"
              onClick={openModal}
            >
              <span>Sign Up</span>
            </button>
            <button
              onClick={openModal}
              className="firstPage__buttonContainer__loginButton"
            >
              <span>Log in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
