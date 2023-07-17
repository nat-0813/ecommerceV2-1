import React, { useRef } from "react";
import preBtn from "../images/left-arrow.png";
import nxtBtn from "../images/right-arrow.png";
import fpro1 from "../images/fpro1.webp";
import fpro2 from "../images/fpro2.jpeg";
import fpro3 from "../images/fpro3.webp";
import fpro4 from "../images/fpro4.jpeg";
import fpro5 from "../images/fpro5.jpeg";
import fpro6 from "../images/fpro6.webp";

const Slider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <section>
      <section className="slideshow-header">
        <h2>Our Featured Products</h2>
        <p>Anime Summer Collection</p>
      </section>

      <button className="pre-btn" onClick={scrollLeft}>
        <img src={preBtn} alt="previous arrow" height="40px" width="40px" />
      </button>
      <button className="nxt-btn" onClick={scrollRight}>
        <img src={nxtBtn} alt="next arrow" height="40px" width="40px" />
      </button>

      <div className="product-container" ref={sliderRef}>
        {/* Render each product card */}
        <div className="product-card">
          {/* Render product image and other information */}
          <div className="product-image">
            <img
              src={fpro1}
              className="Featured-product"
              alt="Featured product 1"
            />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Dragon Ball Z</h2>
            <p className="product-short-description">Dragon Ball Z Gummies</p>
          </div>
          <h4>$6.50</h4>
        </div>

        {/* Render other product cards */}
        <div className="product-card">
          {/* Render product image and other information */}
          <div className="product-image">
            <img
              src={fpro2}
              className="Featured-product"
              alt="Featured product 2"
            />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="">Attack on Titan</h2>
            <p className="product-short-description">
              Attack on Titan chocolate bar
            </p>
          </div>
          <h4>$4.50</h4>
        </div>

        <div className="product-card">
          <div className="Featured-product">
            <img
              src={fpro3}
              className="product-image"
              alt="My Hero Academia Chocolate Wafer with sticker"
            />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">My Hero Academia</h2>
            <p className="product-short-description">
              Chocolate Wafer with Sticker
            </p>
          </div>
          <h4>$3.50</h4>
        </div>

        <div className="product-card">
          <div className="Featured-product">
            <img
              src={fpro4}
              className="product-image"
              alt="Dragon Ball Super Gummies"
            />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Dragon Ball Z </h2>
            <p className="product-short-description">
              Dragon Ball Super Gummies
            </p>
          </div>
          <h4>$6.50</h4>
        </div>

        <div className="product-card">
          <div className="Featured-product">
            <img
              src={fpro5}
              className="product-image"
              alt="Dragon Ball Z Energy Drinks"
            />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Dragon Ball Z</h2>
            <p className="product-short-description">
              Bundle of 3 Drinks: Spirit Bomb, Power Boost, Warrior Power
            </p>
          </div>
          <h4>$10.50</h4>
        </div>

        <div className="product-card">
          <div className="Featured-product">
            <img src={fpro6} className="product-image" alt="pokemon wafer" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Pokemon</h2>
            <p className="product-short-description">Chocolate wafer</p>
          </div>
          <h4>$6.50</h4>
        </div>
      </div>
    </section>
  );
};

export default Slider;
