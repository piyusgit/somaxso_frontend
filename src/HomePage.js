import React, { useState } from "react";
import Contact from "./Contact";
import Projects from "./Projects";
// import Blog from "./Blog";
import Services from "./Services";
import AboutUs from "./AboutUs";
const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 sm-padding">
              <div className="hero-content">
                <h3>
                  <i className="las la-bolt" />
                  Trusted Tech Agency !
                </h3>
                <h2>Innovative Ideas to Elevate Your Brand!</h2>
                <p>
                  Our success in delivering innovative IT and coaching solutions
                  <br />
                  is driven by our talented and dedicated team, focused on
                  <br />
                  empowering both businesses and individuals to reach their full
                  potential.
                </p>
                <div className="btn-holder">
                  <a href="/Services" className="default-btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="brands-circle">
                <div className="inner-icon">
                  <i className=" fa-brands fa-react" />

                  <i className="fa-solid fa-hashtag" />
                </div>
                <div className="center-icon">
                  <i className="fa-regular fa-lightbulb" />
                </div>
                <div className="outer-icon">
                  <i className="fa-solid fa-laptop-code"></i>
                  <i className="fa-regular fa-file-code" />
                  <i className="fa-solid fa-mobile-screen-button" />
                  <i className="fa-brands fa-codepen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* slider */}
      <div className="slider-section bg-grey padding-bottom">
        <div className="map-pattern" />
        <div className="container">
          <div className="main-slider slider-controler swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-127b5112ff1c59a6"
              aria-live="off"
              style={{ transitionDuration: "0ms" }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index={2}
                role="group"
                aria-label="3 / 3"
                style={{
                  width: 1296,
                  opacity: 1,
                  transform: "translate3d(0px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div className="slider-img">
                  <img
                    src="assets/imgslider-3.jpg"
                    alt="img"
                    className="kenburns"
                    style={{ animationDuration: "12000ms" }}
                  />
                </div>
                <div className="slider-content-wrap">
                  <div className="slider-content">
                    <div className="slider-caption medium">
                      <div className="inner-layer">
                        <div data-animation="fade-in-bottom" data-delay="0.3s">
                          Smart Business Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-caption big">
                      <div className="inner-layer">
                        <div data-animation="fade-in-bottom" data-delay="0.5s">
                          Modern Digital <br />
                          Agency Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-btn">
                      <a
                        href="/Contact"
                        className="default-btn"
                        data-animation="fade-in-bottom"
                        data-delay="0.9s"
                      >
                        Get Free Consulting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-next"
                data-swiper-slide-index={0}
                role="group"
                aria-label="1 / 3"
                style={{
                  width: 1296,
                  opacity: 1,
                  transform: "translate3d(-1296px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div className="slider-img">
                  <img
                    src="assets/images/slider-1.jpg"
                    alt="img"
                    className="kenburns"
                    style={{ animationDuration: "12000ms" }}
                  />
                </div>
                <div className="slider-content-wrap">
                  <div className="slider-content">
                    <div className="slider-caption medium">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.3s"
                          className=""
                          style={{ animationDelay: "0.3s" }}
                        >
                          Smart Business Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-caption big">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.5s"
                          className=""
                          style={{ animationDelay: "0.5s" }}
                        >
                          Modern Digital <br />
                          Agency Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-btn">
                      <a
                        href="/Contact"
                        className="default-btn"
                        data-animation="fade-in-bottom"
                        data-delay="0.9s"
                        style={{ animationDelay: "0.9s" }}
                      >
                        Get Free Consulting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                data-swiper-slide-index={1}
                role="group"
                aria-label="2 / 3"
                style={{
                  width: 1296,
                  opacity: 1,
                  transform: "translate3d(-2592px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div className="slider-img">
                  <img
                    src="assets/images/slider-2.jpg"
                    alt="img"
                    className="kenburns"
                    style={{ animationDuration: "12000ms" }}
                  />
                </div>
                <div className="slider-content-wrap">
                  <div className="slider-content">
                    <div className="slider-caption medium">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.3s"
                          className=""
                          style={{ animationDelay: "0.3s" }}
                        >
                          Smart Business Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-caption big">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.5s"
                          className=""
                          style={{ animationDelay: "0.5s" }}
                        >
                          Modern Digital <br />
                          Agency Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-btn">
                      <a
                        href="/Contact"
                        className="default-btn"
                        data-animation="fade-in-bottom"
                        data-delay="0.9s"
                        style={{ animationDelay: "0.9s" }}
                      >
                        Get Free Consulting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-visible swiper-slide-active"
                data-swiper-slide-index={2}
                role="group"
                aria-label="3 / 3"
                style={{
                  width: 1296,
                  opacity: 1,
                  transform: "translate3d(-3888px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div className="slider-img">
                  <img
                    src="assets/images/slider-3.jpg"
                    alt="img"
                    className="kenburns"
                    style={{ animationDuration: "12000ms" }}
                  />
                </div>
                <div className="slider-content-wrap">
                  <div className="slider-content">
                    <div className="slider-caption medium">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.3s"
                          className=""
                          style={{ animationDelay: "0.3s" }}
                        >
                          Smart Business Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-caption big">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.5s"
                          className=""
                          style={{ animationDelay: "0.5s" }}
                        >
                          Modern Digital <br />
                          Agency Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-btn">
                      <a
                        href="/Contact"
                        className="default-btn"
                        data-animation="fade-in-bottom"
                        data-delay="0.9s"
                        style={{ animationDelay: "0.9s" }}
                      >
                        Get Free Consulting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                data-swiper-slide-index={0}
                role="group"
                aria-label="1 / 3"
                style={{
                  width: 1296,
                  opacity: 0,
                  transform: "translate3d(-5184px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div className="slider-img">
                  <img
                    src="assets/images/slider-1.jpg"
                    alt="img"
                    className="kenburns"
                    style={{ animationDuration: "12000ms" }}
                  />
                </div>
                <div className="slider-content-wrap">
                  <div className="slider-content">
                    <div className="slider-caption medium">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.3s"
                          className=""
                          style={{ animationDelay: "0.3s" }}
                        >
                          Smart Business Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-caption big">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.5s"
                          className=""
                          style={{ animationDelay: "0.5s" }}
                        >
                          Modern Digital <br />
                          Agency Solution!
                        </div>
                      </div>
                    </div>
                    <div className="slider-btn">
                      <a
                        href="/Contact"
                        className="default-btn"
                        data-animation="fade-in-bottom"
                        data-delay="0.9s"
                        style={{ animationDelay: "0.9s" }}
                      >
                        Get Free Consulting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-paginat1ion-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
              />
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 3"
              />
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </div>

      <AboutUs />
      <Services />
      {/* <Blog /> */}
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
