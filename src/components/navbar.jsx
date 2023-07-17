import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import Connoisseur from "../images/Connoisseur-International.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
// import { ShoppingCart } from "phosphor-react";

export const Nav = () => {
  //defines a functional component named Nav using an arrow function syntax. then exported using the export keyword, which allows other modules to import and use this component
  return (
    // inside the 'Nav' component we have JSX markup. which represents structure and content of the component that will be rendered
    //div element wrapping a ul element with the class name "navbar". It contains a list of navigation links represented by li elements. Each li contains a Link component from React Router, which renders a link to a specific route
    <>
      <div className="header">
        <img
          src={Connoisseur}
          className="logo"
          alt="logo"
          height="90px"
          width="90px"
        />
        <div>
          <ul className="navbar">
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <Link to="#" className="close">
              <i className="far fa-times"></i>
            </Link>
          </ul>
        </div>
        <div className="mobile">
          <i className="bar" class="fas fa-outdent"></i>
          <Link to="/cart">
            <i className="far fa-shopping-bag"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Nav;
