import React from "react";

const Development = () => {
  return (
    <>
      {/* Header Section */}
      <section className="service-section bg-grey padding">
        <div className="container ">
          <div
            className="section-heading text-center mb-40 wow fade-in-bottom"
            data-wow-delay="200ms"
            style={{
              visibility: "visible",
              animationDelay: "200ms",
              animationName: "fade-in-bottom",
            }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
              Web Development Services
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl">
              Crafting stunning, functional websites to meet your business
              needs.
            </p>
          </div>
        </div>
        <div className="container">
          {/* <div className="service-item"> */}
          <div className="">
            <img
              src="/assets/images/web.jpg"
              alt="dev"
              className="kenburns"
              style={{}}
            />
          </div>
        </div>
        {/* </div> */}
        <div className="container">
          <div className="service-item">
            {/* Content Section */}

            {/* Banner Image */}

            {/* Details Section */}
            <div className="">
              <h3>Why Choose Us?</h3>
              <p>
                At Somaxso, we specialize in creating beautiful, high-performing
                websites tailored to your business goals. From sleek designs to
                cutting-edge functionalities, we ensure that your online
                presence makes a lasting impression.
              </p>

              {/* Services Highlights */}
              <ul>
                <li>Custom website design and development</li>
                <li>Responsive and mobile-friendly websites</li>
                <li>E-commerce solutions with seamless integrations</li>
                <li>SEO-optimized web pages for better search rankings</li>
                <li>Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Development;
