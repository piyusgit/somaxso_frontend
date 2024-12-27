import React from "react";

const Design = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <section className="">
      {/* <div className="corner-pattern" />
        <div className="corner-pattern bottom" /> */}
      <div className="container ">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
            UI/UX Design Services
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            Crafting stunning, functional websites to meet your business needs.
          </p>
          <div className="service-item">
            <div className="service-icon">
              <i className="dl dl-stats" />
            </div>

            {/* Content Section */}
            <div className="">
              {/* Banner Image */}
              <div className="relative h-60 lg:h-96">
                {/* <img
                  src="https://via.placeholder.com/1920x1080"
                  alt="Web Development"
                  className="object-cover w-full h-full"
                /> */}
                <div className="">
                  <h2
                    className=""
                    style={{
                      textAlign: "center !important",
                      justifyContent: "center !important",
                    }}
                  >
                    Build Your Dream Website
                  </h2>
                </div>
              </div>

              {/* Details Section */}
              <div
                className="mx-auto max-w-3xl"
                style={{ textAlign: "center", padding: "20px" }}
              >
                <div
                  className="p-6 lg:p-8"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                    Why Choose Us?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    At Somaxso, we specialize in creating beautiful,
                    high-performing websites tailored to your business goals.
                    From sleek designs to cutting-edge functionalities, we
                    ensure that your online presence makes a lasting impression.
                  </p>

                  {/* Services Highlights */}
                  <ul className="list-disc list-inside text-gray-700 mt-6 space-y-3">
                    <li>Custom website design and development</li>
                    <li>Responsive and mobile-friendly websites</li>
                    <li>E-commerce solutions with seamless integrations</li>
                    <li>SEO-optimized web pages for better search rankings</li>
                    <li>Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
