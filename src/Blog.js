import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  /* const [expandedPostIndex, setExpandedPostIndex] = useState(null);

 const showFullContent = (index) => {
   setExpandedPostIndex(index);
 }; */
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);

  const toggleContent = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const blogposts = [
    {
      url: "assets/images/post-1.jpg",
      date: "1 Dec 2024",
      tag: "IT Mastering",
      title: "Mastering IT Fundamentals",
      shortContent:
        " A Beginner's Guide Starting in IT? Focus on key concepts like networking, databases, ...",
      fullContent:
        "cloud computing,and basic programming. These fundamentals provide a strong foundation for your tech career and pave the  way for more advanced learning.",
    },
    {
      url: "assets/images/post-2.jpg",
      date: "21 Nov 2024",
      tag: "Web Development",
      title: "The Power of Web Development",
      shortContent:
        " Web development is the art of creating websites and applications that shape the digital world...",
      fullContent:
        "It combines front-end, design with HTML, CSS, and JavaScript, and back-end functionality using Node.js, PHP, and databases. By mastering both, you can build seamless,  interactive, and impactful digital experiences that drive innovation and connect people globally.",
    },
    {
      url: "assets/images/post-4.jpg",
      date: "4 Oct 2024",
      tag: "Technologies",
      title: "Emerging IT Technologies",
      shortContent:
        " Revolutionary IT trends include AI for automation,Blockchain for secure transactions, 5G for faster...",
      fullContent:
        "connectivity, and Quantum Computing for solving complex problems. Advances in IoT, Edge Computing, and Cybersecurity are also shaping the future of technology, driving innovation across industries.",
    },
    {
      url: "assets/images/post-3.jpg",
      date: "7 Aug 2024",
      tag: "Business",
      title: "Innovative Business Ideas",
      shortContent:
        " Ideas like sustainable products, subscription services, and tech-driven solutions (AI, blockchain) are ...",
      fullContent:
        "reshaping industries. With the rise of remote services and digital platforms, businesses can tap into new markets by addressing current needs and leveraging emerging technologies to create impactful solutions.",
    },
  ];
  return (
    <>
      <section className="page-header bg-grey">
        <div className="page-header-shape" />
        <div className="container">
          {/* <div className="page-header-info">
            <h4>Blog Grid!</h4>
            <h2>
              Get the updated news <br />
              from our <span>Somaxso blog!</span>
            </h2>
            <p>
              Everything your digital consulting business <br />
              needs is already here!{" "}
            </p>
          </div> */}
          <div
            className="section-heading text-center wow fade-in-bottom"
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
        </div>
      </section>
      <section className="blog-section blog-page bg-grey ">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-8 sm-padding"> */}
            <div className="row grid-post">
              {blogposts.map((item, index) => (
                <>
                  <div className="col-md-6 padding-15" key={index}>
                    <div className="post-card">
                      <div className="post-thumb">
                        <img src={item.url} alt="post" />
                      </div>
                      <div className="post-content-wrap">
                        <ul className="post-meta">
                          <li>
                            <i className="las la-calendar" />
                            {item.date}
                          </li>
                          <li>
                            <i className="las la-tags" />
                            {item.tag}
                            {/* <a href={`/Blog/${index}/posts`}>{item.tag}</a> */}
                          </li>
                        </ul>
                        <div className="post-content">
                          <h3>
                            <Link
                              to={`/Blog/${index}/posts`}
                              className="hover"
                              // onClick={(e) => {
                              //   e.preventDefault();
                              // }}
                              onClick={scrollToTop}
                            >
                              {item.title}
                            </Link>
                          </h3>
                          <p>
                            {expandedPostIndex === index
                              ? item.fullContent
                              : item.shortContent}
                          </p>
                          <span
                            className="read-more"
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleContent(index)}
                          >
                            {expandedPostIndex === index
                              ? "Show Less"
                              : "Read More"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className=" mb-40"></div>
            {/* <ul className="pagination-wrap text-left mt-30">
              <li>
                <a href="#">
                  <i className="las la-arrow-left" />
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#" className="active">
                  2
                </a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-arrow-right" />
                </a>
              </li>
            </ul> */}
            {/*Pagination*/}
            {/* </div> */}
            {/*Blog Grid*/}
            {/* <div className="col-lg-4 sm-padding">
              <div className="sidebar-widget">
                <form action="" className="search-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="search-btn" type="button">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              {/*Search Form*/}
            {/* <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Categories</h3>
              </div>
              <ul className="category-list">
                <li>
                  <a href="blog-grid.html">Business Strategy</a>
                  <span>23</span>
                </li>
                <li>
                  <a href="blog-grid.html">Project Management</a>
                  <span>05</span>
                </li>
                <li>
                  <a href="blog-grid.html">Digital Marketing</a>
                  <span>18</span>
                </li>
                <li>
                  <a href="blog-grid.html">Customer Experience</a>
                  <span>04</span>
                </li>
                <li>
                  <a href="blog-grid.html">Partnership System</a>
                  <span>15</span>
                </li>
              </ul>
            </div> */}
            {/*Categories*/}
            {/* <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Recent Articles</h3>
              </div>
              <ul className="thumb-post">
                {blogposts.map((item, index) => (
                  <>
                    <li>
                      <div className="thumb">
                        <img src={item.url} alt="thumb" />
                      </div>
                      <div className="thumb-post-info">
                        <h3>
                          <Link
                            to=""
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <Link
                          to=""
                          className="date"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          {item.title}
                        </Link>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div> */}
            {/*Recent Thumb Post*/}
            {/* <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Tags</h3>
              </div>
              <ul className="tags">
                <li>
                  <a href="#">business</a>
                </li>
                <li>
                  <a href="#">marketing</a>
                </li>
                <li>
                  <a href="#">startup</a>
                </li>
                <li>
                  <a href="#">design</a>
                </li>
                <li>
                  <a href="#">consulting</a>
                </li>
                <li>
                  <a href="#">strategy</a>
                </li>
                <li>
                  <a href="#">development</a>
                </li>
                <li>
                  <a href="#">tips</a>
                </li>
                <li>
                  <a href="#">Seo</a>
                </li>
              </ul>
            </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="call-back-section padding">
        <div className="map-pattern " />
        <div className="container">
          <div
            className="section-heading text-center mb-40 wow fade-in-bottom"
            data-wow-delay="200ms"
            style={{
              visibility: "hidden",
              animationDelay: "200ms",
              animationName: "none",
            }}
          >
            <h4 className="sub-heading">Get In Touch!</h4>
            <h2>
              Want to know why your website isn’t <br />
              getting the traffic it deserves?
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-4 d-none d-lg-block">
              <div className="callback-men">
                <img src="assets/images/callback-men.png" alt="images" />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 offset-lg-0 offset-md-2">
              <div className="callback-form ml-40">
                <h2>Request a Callback</h2>
                <form
                  action="quote.php"
                  method="post"
                  id="ajax_contact"
                  className="form-horizontal"
                >
                  <div className="callback-form-group">
                    <div className="form-field">
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        id="contactPhone"
                        name="contactPhone"
                        className="form-control"
                        placeholder="Phone"
                        required=""
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        className="form-control"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="form-field message">
                      <textarea
                        id="contactMessage"
                        name="contactMessage"
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-field">
                      <button id="submit" className="default-btn" type="submit">
                        Send Massage
                        <span />
                      </button>
                    </div>
                  </div>
                  <div id="form-messages" className="alert" role="alert" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
