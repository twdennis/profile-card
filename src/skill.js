import React from "react";

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, padding: "7px" }}
    >
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}

export default Skill;
