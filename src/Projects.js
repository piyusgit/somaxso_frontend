import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      {" "}
      <section className="project-section bg-grey padding">
        <div className="container">
          <div className="section-heading-wrap mb-40">
            <div
              className="section-heading wow fade-in-left"
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDelay: "200ms",
                animationName: "fade-in-left",
              }}
            >
              <h4 className="sub-heading">Our Complete Crafts</h4>
              <h2>
                Market-leading digital <br />
                expertise at your fingertips!
              </h2>
            </div>
            <Link
              to="/projects"
              className="default-btn wow fade-in-right"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fade-in-right",
              }}
              onClick={scrollToTop}
            >
              View All Projects
            </Link>
          </div>
          <div className="project-carousel-wraper">
            <div className="project-carousel swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-4eda774a61fb5eb3"
                aria-live="off"
                style={{
                  transform: "translate3d(-2210px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-2.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Design
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          The Power of Web Development
                        </Link>
                      </h3>
                      {/* <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="read-more"
                      >
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-3.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Technology
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Emerging IT Technologies
                        </Link>
                      </h3>
                      {/* <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="read-more"
                      >
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-4.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Business
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          className="read-more"
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Innovative Business Ideas
                        </Link>
                      </h3>
                      {/* <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="read-more"
                      >
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-1.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Tech App
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Branding the Digital Age
                        </Link>
                      </h3>
                      {/* <Link to="" onClick={(e)=>{e.preventDefault()}} className="read-more">
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-2.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Hybrid Apps
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Hybrid & Native Apps
                        </Link>
                      </h3>
                      {/* <Link to="" onClick={(e)=>{e.preventDefault()}} className="read-more">
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-3.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Innovation
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Technology & Innovation
                        </Link>
                      </h3>
                      {/* <Link to="" onClick={(e)=>{e.preventDefault()}} className="read-more">
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-4.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          IT Consultancy
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          IT Consultancy Services
                        </Link>
                      </h3>
                      {/* <Link to="" onClick={(e)=>{e.preventDefault()}} className="read-more">
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-1.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Multitasking
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Multitasking on new features
                        </Link>
                      </h3>
                      {/* <Link to="" onClick={(e)=>{e.preventDefault()}} className="read-more">
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-2.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Quick Support
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Quick IT Support
                        </Link>
                      </h3>
                      {/* <Link to="" onClick={(e)=>{e.preventDefault()}} className="read-more">
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: 412, marginRight: 30 }}
                >
                  <div className="project-item">
                    <div className="project-thumb">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img src="assets/images/project-3.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <h4>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Branding
                        </Link>
                      </h4>
                      <h3>
                        <Link
                          to=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Companies branding
                        </Link>
                      </h3>
                      {/* <Link to="" onClick={(e)=>{e.preventDefault()}} className="read-more">
                        Read More
                        <i className="las la-long-arrow-alt-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
            {/* Carousel Dots */}
            <div className="carousel-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet"
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
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
