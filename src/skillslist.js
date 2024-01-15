import React from "react";

import Skill from "./skill";
import skills from './skilldata';

function SkillsList() {
  return (
    <div>
      <ul className="skill-list">
        {skills.map((skill) => (
          <Skill skillObj={skill} />
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
