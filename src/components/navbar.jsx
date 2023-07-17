import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import Connoisseur from "../images/Connoisseur-International.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
// import { ShoppingCart } from "phosphor-react";

export const Nav = () => {
  return (
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
