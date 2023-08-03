import "./App.css";

function App() {
  return (
    <div className="container">
      <Avatar />
      <Info />
      <Skills />
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="./navpreet.jpeg" alt="Navpreet Singh" />
    </div>
  );
}

function Info() {
  return (
    <div>
      <h3>Navpreet Singh</h3>
      <p>
        Full-stack developer working at Infosys India. When not coding, I like
        to play board games, and travel and experience new places.
      </p>
    </div>
  );
}

function Skills() {
  const skillsData = [
    { name: "Javascript", bgColor: "#ACFADF", level: "advanced" },
    { name: "Angular", bgColor: "#CECE5A", level: "advanced" },
    { name: "HTML + CSS", bgColor: "#91C8E4", level: "advanced" },
    { name: "NodeJs", bgColor: "#D8D9DA", level: "advanced" },
    { name: "GIT + GitHub", bgColor: "#A084E8", level: "intermediate" },
    { name: "React", bgColor: "#FFD1DA", level: "beginner" },
  ];

  return (
    <div className="skill-container">
      {skillsData.map((skill) => (
        <SkillBadge
          name={skill.name}
          bgColor={skill.bgColor}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function SkillBadge({ name, bgColor, level }) {
  return (
    <div className="skill-badge" style={{ background: bgColor }}>
      {name} <SkillLevelEmoji level={level} />
    </div>
  );
}

function SkillLevelEmoji({ level }) {
  return (
    <span>
      {level === "advanced" && "💪"}
      {level === "intermediate" && "👍"}
      {level === "beginner" && "👶"}
    </span>
  );
}

export default App;
