import React from "react";
import { useParams } from "react-router-dom";

import { projectData } from "./projectData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <>
      <section className="project-section bg-grey padding">
        <div className="container">
          {/* <div className="section-heading-wrap text-center mb-40 ">
            <div className="section-heading ">
              <h4 className="sub-heading">Our Complete Crafts</h4>
              <h2>
                Market-leading digital <br />
                expertise at your fingertips!
              </h2>
            </div> */}

          <div
            class="section-heading text-center mb-40 wow fade-in-bottom"
            data-wow-delay="200ms"
          >
            <h4 class="sub-heading">Our Complete Crafts</h4>
            <h2>
              Market-leading digital <br />
              expertise at your fingertips!
            </h2>
          </div>
        </div>
        <div className="container">
          {/* <div className="project-carousel"> */}
          {/* <div className="service-item"> */}
          {/* <div className="slider-img"> */}
          <img src={project.image} alt={project.title} />
        </div>
        {/* </div> */}
        <div className="container">
          <div className="project-content">
            <h1>{project.title}</h1>
            <h4>{project.category}</h4>
            <p>{project.details}</p>
          </div>
        </div>

        {/* </div> */}
      </section>
    </>
  );
};

export default ProjectDetails;
