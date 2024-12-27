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
      {/* <section className="project-section bg-grey padding">
        <div className="container">
          <div className="section-heading-wrap text-center mb-40 ">
            <div className="section-heading ">
              <h4 className="sub-heading">Our Complete Crafts</h4>
              <h2>
                Market-leading digital <br />
                expertise at your fingertips!
              </h2>
            </div>
          </div>
          <div>
            <div className="project-carousel">
              <div className="project-item">
                <div className="project-thumb">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h1>{project.title}</h1>
                  <h4>{project.category}</h4>
                  <p>{project.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
          </div>
          <div className="">
            <div className="project-carousel">
              <div className="project-item">
                <div className="project-thumb">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h1>{project.title}</h1>
                  <h4>{project.category}</h4>
                  <p>{project.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
