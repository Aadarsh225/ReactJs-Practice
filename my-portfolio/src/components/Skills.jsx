const skills = [
  "Java",
  "C",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "AWS",
  "Linux",
];

function Skills() {
  return (
    <section className="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;