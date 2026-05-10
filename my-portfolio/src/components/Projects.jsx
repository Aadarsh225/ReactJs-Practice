const projects = [
  {
    title: "Food Delivery App",
    description: "React based food ordering application",
  },

  {
    title: "Weather App",
    description: "Weather app using API",
  },

  {
    title: "Quiz App",
    description: "Interactive React quiz application",
  },
];

function Projects() {
  return (
    <section className="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;