import React from "react";

const Common = () => {
  return (
    <>
      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h4 className="sub-heading">About Our Company</h4>
          <h2>
            Deploy creative design to unlock your business's <br />
            potential and drive lasting impact.
          </h2>
        </div>
      </div>
      {/* <main className="about-section"> */}
      {/* <section className="section-1"> */}
      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <div className="row">
            <div
              className="col-lg-6 col-md-6 sm-padding wow fade-in-bottom"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fade-in-bottom",
              }}
            >
              <div className="service-item">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                cumque cupiditate magnam odio ea beatae eum aperiam vitae
                repellat voluptatem laborum odit quos voluptates eveniet sunt
                porro consequatur, nulla impedit?
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 sm-padding wow fade-in-bottom"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fade-in-bottom",
              }}
            >
              <div className="service-item">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis, laboriosam pariatur tempore inventore rerum, quam
                adipisci autem esse soluta ea exercitationem sit doloremque
                minima magnam, tenetur quidem quibusdam voluptatum voluptas!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}

      {/* second section */}

      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h2>Our Mission &amp; Values</h2>
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
                <div>
                  <i class="fas fa-music text-4xl"></i>
                </div>
                <h3>Preserve Tradition</h3>
                <p>
                  Keeping the spirit of traditional jazz alive while embracing
                  modern interpretations
                </p>
              </div>
            </div>
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
                <div>
                  <i class="fas fa-users text-4xl"></i>
                </div>
                <h3>Build Community</h3>
                <p>
                  Creating a welcoming space for jazz lovers to connect and
                  share their passion
                </p>
              </div>
            </div>

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
                <div>
                  <i class="fas fa-star text-4xl"></i>
                </div>
                <h3>Support Artists</h3>
                <p>
                  Providing a platform for both established and emerging jazz
                  talents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}

      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h2>What People Say About Us</h2>
          <div className="row">
            <div
              className="col-lg-6 col-md-6 sm-padding wow fade-in-bottom"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fade-in-bottom",
              }}
            >
              <div className="service-item">
                <p>
                  A fantastic venue for jazz lovers! The atmosphere is always
                  welcoming and the quality of music is consistently high. It's
                  become a monthly highlight for me.
                </p>
                <footer>- Sarah Thompson, Regular Attendee</footer>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 sm-padding wow fade-in-bottom"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fade-in-bottom",
              }}
            >
              <div className="service-item">
                <p>
                  One of the best jazz clubs in the North East. The dedication
                  to preserving and promoting jazz music is evident in every
                  event they organize.
                </p>
                <footer>- James Wilson, Jazz Musician</footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container" style={{ backgroundColor: "#f4f4f4" }}>
          <div
            className="section-heading text-center mb-40 wow fade-in-bottom"
            data-wow-delay="200ms"
          >
            <h2>Join Our Community</h2>
            <p>
              Whether you're a longtime jazz enthusiast or new to the genre,
              we'd love to welcome you to our next event. Get in touch to learn
              more about membership and upcoming performances.
            </p>
            <a href="contact.html">Contact Us Today</a>
          </div>
        </div>
      </section>
      {/* </main> */}
    </>
  );
};

export default Common;
