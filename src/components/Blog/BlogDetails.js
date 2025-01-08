import React from "react";
import { useParams } from "react-router-dom";
import { blogposts } from "./blogposts";

const BlogDetails = () => {
  const { id } = useParams();
  const posts = blogposts[id];
  console.log(posts);

  return (
    <>
      <section className="service-section bg-grey padding">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
          style={{
            visibility: "visible",
            animationDelay: "200ms",
            animationName: "fade-in-bottom",
          }}
        >
          <h4 className="sub-heading white">Blog Grid</h4>
          <h2>
            Get the updated news <br />
            from our somaxso blog
          </h2>
        </div>
        {/* <section className="blog-section blog-page bg-grey "> */}
        <div className="container">
          <div className="post-card">
            <div className="post-thumb">
              <img src={posts.url} alt={posts.title} className="blog-image" />
            </div>
          </div>
          <div className="project-content">
            <span className="blog-tag">{posts.tag}</span>
            <h3 className="blog-title">{posts.title}</h3>
            <p className="blog-date">{posts.date}</p>
            <p className="blog-short-content">{posts.shortContent}</p>

            <p className="blog-full-content">{posts.fullContent}</p>

            {/* <button onClick={toggleFullContent} className="read-more-btn">
          {isFullContentVisible ? "Show Less" : "Read More"}
        </button> */}
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default BlogDetails;
