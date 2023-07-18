// first, had to install React, useEffect, and useState these were necessary for creating a React component and managing state and side effects
//// THE CODE BELOW FETCHES THE PRODUCTS FROM THE DATABASE WHEN THE SERVER IS RUNNING

import React, { useEffect, useState } from "react";
import "../css/shop.css";
import pro1 from "../images/pro1.webp";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.jpeg";
import pro4 from "../images/pro4.jpeg";
import pro5 from "../images/pro5.jpeg";
import pro6 from "../images/pro6.jpeg";
import pro7 from "../images/pro7.webp";
import pro8 from "../images/pro8.jpeg";
import pro9 from "../images/pro9.jpeg";
import pro10 from "../images/pro10.webp";
import pro11 from "../images/pro11.webp";
import pro12 from "../images/pro12.webp";

// import { response } from "express";

const Shop = () => {
  // will be used to store the product data from the api
  const [products, setProducts] = useState([]);
  // store the filtered products based on their filter
  const [filteredProducts, setFilteredProducts] = useState([]);
  // will be used to keep track of the current filter selected
  const [selectedFilter, setSelectedFilter] = useState("all");

  // fetching the data from the json data at the api endpoint connected to the mysql database

  // when the page is loaded it will fetch ALL products from the api
  // the response is converted to json
  // the data that we receive updates the state of the products and filtered products using
  // setProducts and setFilteredProducts
  useEffect(() => {
    fetch("http://localhost:3000/productsjson")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // this function handles the filter

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    // if/else statement used to determine what products to show
    if (filter === "all") {
      setFilteredProducts(products);
    } else if (filter === "cookies") {
      const filtered = products.filter((product) =>
        product.ProductName.toLowerCase().includes("cookie")
      );
      setFilteredProducts(filtered);
    } else if (filter === "chips") {
      const filtered = products.filter((product) =>
        product.ProductName.toLowerCase().includes("chip")
      );
      setFilteredProducts(filtered);
    } else if (filter === "price-less-than-10") {
      const filtered = products.filter((product) => product.Price < 10);
      setFilteredProducts(filtered);
    }
  };

  // whenever a filter button is clicked, the handlefilter function will be called.
  // Based on the selected filter, the function filters the products array to create a new filtered array using the filter method.
  // We are able to filter through the products through the product name property
  return (
    <div>
      <div className="filter-buttons">
        <button
          className={selectedFilter === "all" ? "active" : ""}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={selectedFilter === "cookies" ? "active" : ""}
          onClick={() => handleFilter("cookies")}
        >
          Cookies
        </button>
        <button
          className={selectedFilter === "chips" ? "active" : ""}
          onClick={() => handleFilter("chips")}
        >
          Chips
        </button>
        <button
          className={selectedFilter === "price-less-than-10" ? "active" : ""}
          onClick={() => handleFilter("price-less-than-10")}
        >
          Price less than $10
        </button>
      </div>
      <ul id="products">
        {filteredProducts.map((product) => (
          <li key={product.Id}>
            <img src={product.ProductImage} alt={product.ProductName} />
            <h2>{product.ProductName}</h2>
            <h4>{product.Description}</h4>
            <p>${product.Price.toFixed(2)}</p>
          </li>
        ))}
      </ul>

      <section className="page-header">
        <h1>Stay Adventurous </h1>
        <ul class="product-list">
          <section className="shop shoppro">
            <div class="shop-container">
              <div class="pro">
                <img src={pro1} className="pro1" alt="Mexican Street Corn" />
                <div class="des">
                  <span>Cheetos</span>
                  <h5>Mexican Street Corn Chips</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$3.50</h4>
                </div>
              </div>
              <div class="pro">
                <img
                  src={pro2}
                  className="pro2"
                  alt="Miang Kham Flavor Chips"
                />
                <div class="des">
                  <span>Lays</span>
                  <h5>Traditional Miang Kham flavor Chips</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$3.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img
                  src={pro3}
                  className="pro3"
                  alt="Strawberry Flavored Cookies"
                />
                <div class="des">
                  <span>Hello Panda</span>
                  <h5>Strawberry Flavored Cookies</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$2.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img
                  src={pro4}
                  className="pro4"
                  alt="hotdog and corn flavored chips"
                />
                <div class="des">
                  <span>Fandango</span>
                  <h5>Hotdog and Regular corn flavored chips</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$4.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img src={pro5} className="pro5" alt="brazilian sour candies" />
                <div class="des">
                  <span>Ooh! Chews</span>
                  <h5>Brazilian Sour candies</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$3.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img
                  src={pro6}
                  className="pro6"
                  alt="japanese chocolate sticks"
                />
                <div class="des">
                  <span>Riska</span>
                  <h5>Japanese Chocolate Sticks</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$11.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img src={pro7} className="pro7" alt="japanese potato sticks" />
                <div class="des">
                  <span>Karamucho</span>
                  <h5>Japanese Spicy Potato sticks</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$3.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img src={pro8} className="pro8" alt="spicy shrimp crackers" />
                <div class="des">
                  <span>Nongshim</span>
                  <h5>Spicy Shrimp Crackers</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$3.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img
                  src={pro9}
                  className="pro9"
                  alt="indian masala munch chips"
                />
                <div class="des">
                  <span>KurKure</span>
                  <h5>Indian Masala Munch Chips</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$6.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img src={pro10} className="pro10" alt="potato chips & KFC" />
                <div class="des">
                  <span>Calbee</span>
                  <h5>Potato Chips & KFC</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$6.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img src={pro11} className="pro11" alt="tre marie cookies" />
                <div class="des">
                  <span>Tre Marie</span>
                  <h5>Hazelnut Cookies</h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$6.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
              <div class="pro">
                <img src={pro12} className="pro12" alt="japanese kit kat" />
                <div class="des">
                  <span>Nestle Japan</span>
                  <h5>
                    Variety Pack KitKat: Rich Green Tea, Dark Chocolate, and
                    White Chocolate flavors
                  </h5>
                  <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>$15.50</h4>
                </div>
                {/* <a href="#">
                  <i class="fal fa-shopping-cart cart"></i>
                </a> */}
              </div>
            </div>
          </section>
        </ul>
      </section>
    </div>
  );
};

export default Shop;
