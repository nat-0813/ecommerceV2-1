import React from "react";
// import { Link } from "react-router-dom";
import "../css/footer.css";
import pay from "../images/pay.png";
import appstore from "../images/appstore.jpeg";
import play from "../images/play.jpeg";
import Connoisseur from "../images/Connoisseur-International.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="col">
          <img
            src={Connoisseur}
            className="logo"
            alt="logo"
            height="90px"
            width="90px"
          />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> 2014 Forest Hills Drive, Fayetteville,
            North Carolina
          </p>
          <p>
            <strong>Phone:</strong> 704 222 1365 / (704) 234 6789
          </p>
          <p>
            <strong>Hours:</strong> 09:00 am - 06:00 pm, Mon - Sat
          </p>
          <div class="follow">
            <div class="follow i">
              <h4>Follow Us</h4>
              <div class="icon">
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://pinterest.com">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="https://youtube.com">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <p>About</p>
          <p>Delivery</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <p>Sign in</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Track my Order</p>
          <p>Help</p>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={appstore} alt="Apple store" />
            <img src={play} alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay} alt="Pay" />
        </div>
        <p>&copy; 2023, Connoisseur International E-Commerce</p>
      </div>
    </footer>
  );
};

export default Footer;
