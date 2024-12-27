import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://somaxso-backend.vercel.app:8080/form_detail",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFormStatus(response.data.message || "Message sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      // Clear status after 3 seconds
      setTimeout(() => setFormStatus(""), 3000);
    } catch (error) {
      // Handle validation error or other errors
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setFormStatus(error.response.data.message); // Backend validation message
      } else {
        setFormStatus("An error occurred. Please try again."); // Fallback error message
      }

      // console.error("Error submitting the form:", error);

      // Clear status after 3 seconds
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  return (
    <>
      <section className="contact-section bd-bottom padding">
        <div className="map-pattern" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-details-wrap">
                <div className="section-heading mb-30">
                  <h4 className="sub-heading">Get In Touch</h4>
                  <h2>Have Any Questions?</h2>
                  <p>
                    Get in touch to discuss your employee wellbeing needs today.
                    Please give us a call, drop us an email or fill out the
                    contact form.
                  </p>
                </div>
                <ul className="contact-details">
                  <li>
                    <i className="las la-map-marked-alt" />
                    SFF-8, Neelkanth Complex,
                    <br /> Delhi Road, Hisar, Haryana 125001
                  </li>
                  <li>
                    <i className="las la-envelope-open" />
                    info@somaxso.com
                  </li>
                  <li>
                    <i className="las la-phone-volume" />
                    +91 8607638096
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <form
                  onSubmit={submitForm}
                  id="ajax_contact"
                  className="form-horizontal"
                >
                  <div className="section-heading mb-30">
                    <h4 className="sub-heading">Contact With Us</h4>
                    <h2>Contact Form!</h2>
                  </div>
                  <div className="contact-form-group">
                    <div className="form-field">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field message">
                      <textarea
                        id="message"
                        name="message"
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field submit-btn">
                      <button id="submit" className="default-btn" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                  {formStatus && (
                    <div
                      id="form-messages"
                      className="alert"
                      style={{
                        color: formStatus.includes("error") ? "red" : "blue",
                        marginTop: "1rem",
                        fontSize: "1.2rem",
                      }}
                    >
                      {formStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
