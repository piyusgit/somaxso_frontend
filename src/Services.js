import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="service-section bg-grey padding">
      <div className="corner-pattern" />
      <div className="corner-pattern bottom" />
      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
          style={{
            visibility: "visible",
            animationDelay: "200ms",
            animationName: "fade-in-bottom",
          }}
        >
          <h4 className="sub-heading white">Our Services</h4>
          <h2>
            Elevating Your Business with <br />
            Cutting-Edge Technology
          </h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 sm-padding wow fade-in-bottom"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fade-in-bottom",
            }}
          >
            <div className="service-item">
              <div className="service-icon">
                <i className="dl dl-presentation" />
              </div>
              <h3>Web Development</h3>
              <p>
                Somaxso is your one-stop shop for crafting stunning, functional
                websites and delivering top-notch web development solutions.
              </p>
              <Link
                to="/Services/development"
                className="las la-long-arrow-aly-right"
                onClick={scrollToTop}
              >
                Explore Services <i className="las la-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 sm-padding wow fade-in-bottom"
            data-wow-delay="400ms"
            style={{
              visibility: "visible",
              animationDelay: "400ms",
              animationName: "fade-in-bottom",
            }}
          >
            <div className="service-item">
              <div className="service-icon">
                <i className="dl dl-analysis-1" />
              </div>
              <h3>App Deveopment</h3>
              <p>
                Somaxso is your partner in bringing ideas to life, delivering
                user-friendly, high-performance mobile apps.
              </p>
              <Link
                to="/Services/AppDevelopment"
                className="las la-long-arrow-aly-right"
                onClick={scrollToTop}
              >
                Explore Services <i className="las la-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 sm-padding wow fade-in-bottom"
            data-wow-delay="500ms"
            style={{
              visibility: "visible",
              animationDelay: "500ms",
              animationName: "fade-in-bottom",
            }}
          >
            <div className="service-item">
              <div className="service-icon">
                <i className="dl dl-stats" />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Somaxso is your expert in crafting exceptional UI/UX designs
                that are both visually appealing and user-friendly.
              </p>
              <Link
                to="/Services/Design"
                className="las la-long-arrow-aly-right"
                onClick={scrollToTop}
              >
                Explore Services <i className="las la-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-40 text-center wow fade-in-bottom"
          data-wow-delay="600ms"
          style={{
            visibility: "visible",
            animationDelay: "600ms",
            animationName: "fade-in-bottom",
          }}
        >
          <Link
            to="/Services/detail"
            className="default-btn"
            onClick={scrollToTop}
          >
            Explore all Services
          </Link>
        </div>
      </div>
      <div className="bg-half-color">
        <div className="shape-pattern" />
      </div>
    </section>
  );
};

export default Services;
