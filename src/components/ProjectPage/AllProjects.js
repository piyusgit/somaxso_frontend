import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./projects";

const AllProjects = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <section className="project-section bg-grey padding">
        <div className="container">
          <div
            class="section-heading text-center mb-40 wow fade-in-bottom"
            data-wow-delay="200ms"
          >
            <h4 class="sub-heading">Our Services</h4>
            <h2>Elevating Your Business with Cutting-Edge Technology</h2>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div
                className="col-lg-4 col-md-6 sm-padding wow fade-in-bottom"
                data-wow-delay="300ms"
                style={{
                  visibility: "visible",
                  animationDelay: "300ms",
                  animationName: "fade-in-bottom",
                }}
              >
                <div key={project.id} className="project-item">
                  <div className="project-thumb">
                    <Link to={`/project/${project.id}`}>
                      <img src={project.image} alt={project.title} />
                    </Link>
                  </div>
                  <div className="project-content">
                    <h4>{project.category}</h4>
                    <h3>
                      <Link to={`/project/${project.id}`}>{project.title}</Link>
                    </h3>
                    <Link
                      to={`/project/${project.id}`}
                      className="read-more"
                      onClick={scrollToTop}
                    >
                      Read More <i className="las la-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
