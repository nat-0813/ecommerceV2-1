import React from "react";
import "../css/home.css"; // Import the CSS file
import Slider from "../components/slider";

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
