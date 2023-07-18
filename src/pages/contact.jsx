import React from "react";
import "../css/contact.css";
import people1 from "../images/people1.jpg";
import people2 from "../images/people2.jpeg";
import people3 from "../images/people3.png";

//a new class component named FormDetails that extends the React.Component class.
class FormDetails extends React.Component {
  handleSubmit = (event) => {
    //defines an arrow function handleSubmit as a class property.
    //It takes an event object as a parameter. It prevents the default form submission behavior by calling event.preventDefault().
    event.preventDefault(); // Prevent form submission

    //document.querySelector to select the input elements and textarea element with specific names in the DOM and assign them to the corresponding variables.
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const subjectInput = document.querySelector('input[name="subject"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    //These lines extract the values of the input elements and textarea, and store them in variables after trimming any leading or trailing whitespace using the trim() method.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    //This condition checks if the name value is empty.
    //If it is, it calls the displayErrorMessage method with the nameInput element and an error message, and then returns from the function.
    if (name === "") {
      this.displayErrorMessage(nameInput, "Please enter your name.");
      return;
    }

    //These lines check if the email value is empty.
    //If it is, it displays an error message.
    //If the email value is not empty, it further checks if the email is valid using the isValidEmail method.
    //If the email is not valid, it displays an error message.
    if (email === "") {
      this.displayErrorMessage(emailInput, "Please enter your email.");
      return;
    } else if (!this.isValidEmail(email)) {
      this.displayErrorMessage(
        emailInput,
        "Please enter a valid email address."
      );
      return;
    }

    //This condition checks if the subject value is empty.
    // If it is, it calls the displayErrorMessage method with the subjectInput element and an error message, and then returns from the function.
    if (subject === "") {
      this.displayErrorMessage(subjectInput, "Please enter the subject.");
      return;
    }

    //This condition checks if the message value is empty.
    //If it is, it calls the displayErrorMessage method with the messageInput element and an error message, and then returns from the function.
    if (message === "") {
      this.displayErrorMessage(messageInput, "Please enter your message.");
      return;
    }

    // If all validations pass, you can submit the form or perform any desired action here
    event.target.submit();
  };

  //This is a method definition for displayErrorMessage.
  // It creates a new <p> element, sets its class and text content based on the error message, and appends it to the parent element of the inputElement.
  // If there's already an existing error message, it removes it before appending the new one.
  displayErrorMessage(inputElement, message) {
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.textContent = message;

    const parentElement = inputElement.parentElement;
    const existingError = parentElement.querySelector(".error-message");
    if (existingError) {
      parentElement.removeChild(existingError);
    }

    parentElement.appendChild(errorElement);
  }

  //This is a method definition for isValidEmail.
  //It takes an email parameter and uses a regular expression to check if the email is valid.
  //It returns true if the email matches the regex pattern, and false otherwise.

  isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  // the render method of the FormDetails component
  render() {
    return (
      <div>
        <section className="contact-details" class="section-p1">
          <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
              <ul>
                <li>
                  <i className="fal fa-map"></i>
                  <p>2014 Forest Hills Drive, Fayetteville, North Carolina</p>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  <p>conossisseurinternational@gmail.com</p>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <p>704 222 1365 /(704) 234 6789</p>
                </li>
                <li>
                  <i className="far fa-clock"></i>
                  <p>09:00 am - 06:00 pm, Mon - Sat</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9748.176331541152!2d-78.92849060334703!3d35.0874975551973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ab6c9bf4221f87%3A0xde400b89fc7f8096!2s2014%20Forest%20Hills%20Dr%2C%20Fayetteville%2C%20NC%2028303!5e0!3m2!1sen!2sus!4v1683476684247!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="form-details">
          <form action="https://formsubmit.co/el/wacodi" method="POST">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" name="name" required />
            <input type="text" placeholder="E-mail" name="email" required />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button className="normal">Submit</button>
          </form>

          <div className="people">
            <div>
              <img
                src={people1}
                className="people1"
                alt="Natalie"
                height="90px"
                width="90px"
              />
              <p>
                <span>Natalie Aguilar Hernandez</span> Associate Software
                Developer
                <br /> Phone: +786 510 7782 <br />
                Email: aguilarnatalie376@gmail.com
              </p>
            </div>
            <div>
              <img
                src={people2}
                className="people2"
                alt="Gordon Ramsey"
                height="90px"
                width="90px"
              />
              <p>
                <span>Gordon Ramsay</span> Senior Marketing Manager
                <br /> Phone: +000 123 4567 <br />
                Email: GordonRamsay@gmail.com
              </p>
            </div>
            <div>
              <img
                src={people3}
                className="people3"
                alt="Gabriel Iglesias"
                height="90px"
                width="90px"
              />
              <p>
                <span>Gabriel Iglesias</span> Senior Marketing Manager
                <br /> Phone: +000 789 1970 <br />
                Email: GabrielIglesias@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FormDetails;
