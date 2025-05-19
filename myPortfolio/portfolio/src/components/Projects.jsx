import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Book Management System",
      description:
        "A personal portfolio website built with React and Bootstrap showcasing my projects and skills.",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "Task Tracker App",
      description:
        "An online store web application with product listings, cart functionality, and checkout process.",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "Basic Auth App",
      description:
        "A blog platform where users can read, write, edit, and delete blog posts. Built using the MERN stack.",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href="#" className="btn btn-primary mt-auto">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
