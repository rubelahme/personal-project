import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 id="Contact">Contact Me</h1>
        <div>
          <div className="row">
            <div className="col-md-7">
              <Fade left duration={2000} distance="40px">
                <form>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label for="validationServer01">First name</label>
                      <input
                        type="text"
                        class="form-control Info"
                        id="validationServer01"
                        name="first name"
                        required
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="validationServer02">Last name</label>
                      <input
                        type="text"
                        class="form-control Info"
                        id="validationServer02"
                        name="last name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-12 mb-3">
                      <label for="validationServer03">Email</label>
                      <input
                        type="email"
                        class="form-control Info"
                        id="validationServer03"
                        name="email"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="col-md-12 mb-3">
                      <label for="validationTextarea">Message</label>
                      <textarea
                        class="form-control Message"
                        id="validationTextarea"
                        name="textarea"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button class="btn submit  my-3" type="submit">
                    Submit form
                  </button>
                </form>
              </Fade>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <Fade right duration={2000} distance="40px">
                <h3>Contact Info</h3>
                <p className="address">
                  <span>
                    <FontAwesomeIcon className="github" icon={faMapMarkerAlt} />
                  </span>{" "}
                  Madhupur, Tangail, Dhaka, Bangladesh
                </p>
                <p className="address-1">
                  <span>
                    <FontAwesomeIcon className="github" icon={faPhone} />
                  </span>{" "}
                  +880-1762-678333
                </p>
                <p className="address-2">
                  <span>
                    <FontAwesomeIcon className="github" icon={faPhone} />
                  </span>{" "}
                  +880-1306-649925{" "}
                </p>
                <p className="address-3">
                  <span>
                    <FontAwesomeIcon className="github" icon={faEnvelope} />
                  </span>{" "}
                  <a
                    href="https://mail.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    rubelahme3303@gmail.com
                  </a>
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
