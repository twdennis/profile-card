import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import Avatar from "./avatar";
import Intro from "./intro";
import SkillsList from "./skillslist";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
