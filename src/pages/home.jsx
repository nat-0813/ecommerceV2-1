import React from "react";
import "../css/home.css"; // Import the CSS file
import Slider from "../components/slider"; //imports the Slider component from the ../components/slider file. The Slider component is a custom component that handles the rendering of a slider section on the home page
//Overall, this defines the Home component, which represents the content of the home page. It includes a hero image section and a slider section, making use of the Slider component.
function Home() {
  return (
    <>
      <section className="heroImage">
        <div className="hero-text">
          <h2>Welcome</h2>
          <h2>Feeling adventurous?</h2>

          <button>Shop Now</button>
        </div>
      </section>

      <Slider />
    </>
  );
}
export default Home;
