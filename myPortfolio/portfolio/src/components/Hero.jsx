import React from "react";

function Hero() {
  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="text-center">
        <h1 className="display-4">Hi, I'm Anusha A</h1>
        <p className="lead">A Passionate MERN Stack Developer</p>
        <div className="mt-4">
          <a href="#projects" className="btn btn-primary me-3">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
