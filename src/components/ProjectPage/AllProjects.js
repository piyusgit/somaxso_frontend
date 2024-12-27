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
          <div className="section-heading-wrap text-center mb-40 ">
            <div className="section-heading ">
              <h4 className="sub-heading">Our Complete Crafts</h4>
              <h2>
                Market-leading digital <br />
                expertise at your fingertips!
              </h2>
            </div>
            {/* <Link to="/projects" className="default-btn">
            View All Projects
          </Link> */}
          </div>
          <div className="">
            <div className="project-carousel">
              {projects.map((project) => (
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
