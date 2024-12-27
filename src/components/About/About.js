import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="bg-gray-100 py-10 px-5 lg:px-20">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
          <p className="text-gray-600 mt-2">
            Discover who we are and what drives us.
          </p>
        </div>

        {/* Company Details Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-gray-700 mt-4">
            We are a forward-thinking company dedicated to providing innovative
            solutions that make life easier and businesses more efficient.
            Founded in 2015, our journey has been marked by growth, creativity,
            and a commitment to excellence.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-blue-800">Our Vision</h2>
          <p className="text-blue-700 mt-4">
            To be a global leader in our industry, setting standards for
            innovation, sustainability, and customer satisfaction. We envision a
            future where technology empowers every individual and organization
            to achieve their goals.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-green-50 shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-green-800">Our Mission</h2>
          <p className="text-green-700 mt-4">
            Our mission is to deliver exceptional value through high-quality
            products and services while fostering a culture of collaboration,
            integrity, and respect. We aim to empower our customers and create
            lasting positive impacts in the communities we serve.
          </p>
        </div>

        {/* Key Highlights Section */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Over 10 years of experience in the industry</li>
            <li>A dedicated team of experts with a passion for innovation</li>
            <li>Customer-focused approach with 24/7 support</li>
            <li>Commitment to sustainability and ethical practices</li>
            <li>Proven track record of delivering successful projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
