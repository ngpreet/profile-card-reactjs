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
    { name: "Javascript", bgColor: "#ACFADF", emoji: "💪" },
    { name: "Angular", bgColor: "#CECE5A", emoji: "💪" },
    { name: "HTML + CSS", bgColor: "#91C8E4", emoji: "💪" },
    { name: "NodeJs", bgColor: "#A1CCD1", emoji: "💪" },
    { name: "React", bgColor: "#FFD1DA", emoji: "👶" },
  ];

  return (
    <div className="skill-container">
      {skillsData.map((skill) => (
        <SkillBadge name={skill.name} bgColor={skill.bgColor} emoji={skill.emoji} />
      ))}
    </div>
  );
}

function SkillBadge(props) {
  return (
    <div className="skill-badge" style={{ background : props.bgColor}}>
      {props.name} {props.emoji}
    </div>
  );
}

export default App;
