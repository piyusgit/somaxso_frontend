import React from "react";

const Development = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-10">
        <div className="container ">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
              Web Development Services
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl">
              Crafting stunning, functional websites to meet your business
              needs.
            </p>
            <div className="service-item">
              <div className="">
                <img src="/assets/images/web.jpg" alt="dev" className="" />
              </div>

              {/* Content Section */}
              <div>
                {/* Banner Image */}
                <div className="relative h-60 sm:h-80 lg:h-96">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                      Build Your Dream Website
                    </h2>
                  </div>
                </div>

                {/* Details Section */}
                <div className="mx-auto max-w-3xl p-6 lg:p-8 text-center">
                  <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
                    Why Choose Us?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At Somaxso, we specialize in creating beautiful,
                    high-performing websites tailored to your business goals.
                    From sleek designs to cutting-edge functionalities, we
                    ensure that your online presence makes a lasting impression.
                  </p>

                  {/* Services Highlights */}
                  <ul className="list-disc list-inside text-gray-700 mt-6 space-y-3 sm:max-w-xl mx-auto">
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
      </section>
    </>
  );
};

export default Development;
