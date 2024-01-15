import React from "react";
import Skill from "./skill";

function SkillsList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="👋" color="red" />
      <Skill skill="CSS" emoji="🎨" color="lightblue" />
      <Skill skill="JavaScript" emoji="🤖" color="yellow" />
      <Skill skill="React" emoji="⚛️" color="purple" />
      <Skill skill="Ruby" emoji="💎" color="hotpink" />
      <Skill skill="Github" emoji="🐙" color="green" />
    </div>
  );
}

export default SkillsList;
