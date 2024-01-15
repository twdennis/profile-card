import React from "react";

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span >
        {skillObj.skill}
        {skillObj.level === "advanced"
          ? "🤩"
          : skillObj.level === "intermediate"
          ? "😃"
          : "🙂"}
      </span>
    </div>
  );
}

export default Skill;
