// first, had to install React, useEffect, and useState these were necessary for creating a React component and managing state and side effects
//// CODE BELOW FETCHES THE PRODUCTS FROM THE DATABASE WHEN THE SERVER IS RUNNING

import React, { useEffect, useState } from "react";
import "../css/shop.css";

// import pro1 from "../images/pro1.webp";
// import pro2 from "../images/pro2.png";
// import pro3 from "../images/pro3.jpeg";
// import pro4 from "../images/pro4.jpeg";
// import pro5 from "../images/pro5.jpeg";
// import pro6 from "../images/pro6.jpeg";
// import pro7 from "../images/pro7.webp";
// import pro8 from "../images/pro8.jpeg";
// import pro9 from "../images/pro9.jpeg";
// import pro10 from "../images/pro10.webp";
// import pro11 from "../images/pro11.webp";
// import pro12 from "../images/pro12.webp";

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
    fetch("http://localhost:5000/productsjson")
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
    } else if (filter === "candies") {
      const filtered = products.filter((product) =>
        product.ProductName.toLowerCase().includes("candies")
      );
      setFilteredProducts(filtered);
    } else if (filter === "chips") {
      const filtered = products.filter((product) =>
        product.ProductName.toLowerCase().includes("chips")
      );
      setFilteredProducts(filtered);
    } else if (filter === "price-less-than-10") {
      const filtered = products.filter((product) => product.Price < 10);
      setFilteredProducts(filtered);
    }
  };

  // whenever a filter button is clicked, the handlefilter function will be called.
  // Based on that selected filter, the function filters the products array to create a new filtered array using the filter method.
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
          className={selectedFilter === "candies" ? "active" : ""}
          onClick={() => handleFilter("candies")}
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
    </div>
  );
};

export default Shop;
