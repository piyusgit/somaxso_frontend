import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import HomePage from "./HomePage";
// import AboutUs from "./AboutUs";
// import Services from "./Services";
// import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./components/About/About";
import AllServices from "./components/ServicesPage/AllServices";
import AllProjects from "./components/ProjectPage/AllProjects";
import Development from "./components/ServicesPage/Development";
import AppDevelopment from "./components/ServicesPage/AppDev";
import Design from "./components/ServicesPage/Design";
import ServicesDetail from "./components/ServicesPage/ServicesDetail";
import ProjectDetails from "./components/ProjectPage/ProjectDetails";
import BlogDetails from "./components/Blog/BlogDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Services" element={<Services />} /> */}

        <Route path="/Projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:id/posts" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/Services" element={<AllServices />} />
        <Route path="/Services/detail" element={<ServicesDetail />} />
        <Route path="/Services/development" element={<Development />} />
        <Route path="/Services/AppDevelopment" element={<AppDevelopment />} />
        <Route path="/Services/Design" element={<Design />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <AboutUs />
      /* <Services />
      <Contact /> */}
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
