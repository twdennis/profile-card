import React from "react";

function Skill(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        borderRadius: "10%",
        padding: "5px",
      }}
    >
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}

export default Skill;
