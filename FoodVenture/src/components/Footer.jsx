import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-2 mt-5">
      <section className="container text-center ">
        <div className="m-0">
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>
        <div className="mt-3">
          <NavLink to="/">
            <button className="btn btn btn-danger btn-gradient">Get Started</button>
          </NavLink>
        </div>
      </section>
     <div className="d-flex justify-content-center">
      <div className="container m-0 py-2 ">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="footer-about">
              <h5>Thapa Technical</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="footer-subscribe">
              <h5>Subscribe to get important updates</h5>
              <form action="#">
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                  className="form-control mb-2"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="btn btn-danger btn-gradient"
                />
              </form>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="footer-social">
              <h3 className="mx-4">Follow Us</h3>
              <div className="footer-social-icons px-4">
                <FaDiscord className="icon mr-2 mx-3" />
                <FaInstagram className="icon mr-2 mx-2 " />
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <FaYoutube  className="mx-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="footer-contact">
              <h5>Call Us</h5>
              <h5>+91 12345678978</h5>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="footer-bottom-section py-2 bg-dark">
        <div className="container d-flex justify-content-between text-white">
          <p className="m-0">&copy;{new Date().getFullYear()} ThapaTechnical. All Rights Reserved</p>
          <div>
            <p className="m-0">PRIVACY POLICY</p>
            <p className="m-0">TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
