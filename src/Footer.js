import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer className="footer-wrapper">
      <div className="map-pattern light" />
      <div className="shape-pattern" />
      <div className="container">
        <div className="row footer-widgets">
          <div className="col-lg-3 col-md-6 footer-widget sm-padding">
            <h3 className="widget-title">About Somaxso</h3>
            <p className="para">
              We offer tailored IT coaching and consulting services designed to
              help you achieve your career goals and unleash your full
              potential.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 col-md-6 footer-widget sm-padding">
            <h3 className="widget-title">Company</h3>
            <ul>
              <li className="widget">
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/Projects">Projects</a>
              </li>
              {/* <li>
                <a href="#">Blog Standard</a>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-widget sm-padding">
            <h3 className="widget-title">Contact</h3>
            <ul>
              <li>
                SCO-5, 2nd Floor, Sector-14, <br />
                Near Civil Hospital
                <br />
                Hisar, 125001
              </li>
              <li>Mon-Fri: 10.00 am to 7.00pm</li>
              <li>
                +91 8607638096 <br />
                info@somaxso.com
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer-widget sm-padding">
            <h3 className="widget-title">Have a project in your mind?</h3>
            <Link to="/contact" className="contact-btn" onClick={scrollToTop}>
              Contact us
            </Link>
          </div>
        </div>
        {/* /.footer-widgets */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © <span id="currentYear" /> Somaxso, All Rights Reserved.
          </div>
          <ul>
            {/* <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li> */}
            {/* <li>
              <a href="#">Sales and Refunds</a>
            </li> */}
          </ul>
        </div>
        {/* /.footer-bottom */}
      </div>
      {/* /.container */}
    </footer>
  );
};
export default Footer;
