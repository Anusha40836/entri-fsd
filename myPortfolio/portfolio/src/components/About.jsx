import React from "react";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="lead">
              Hello! I'm <strong>Anusha A</strong>, a passionate MERN Stack
              Developer dedicated to building responsive and dynamic web
              applications.
            </p>
            <p>
              I'm skilled in MongoDB, Express.js, React.js, and Node.js, and I'm
              constantly learning new technologies to improve my craft.
            </p>
            <a href="#contact" className="btn btn-primary mt-3">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
