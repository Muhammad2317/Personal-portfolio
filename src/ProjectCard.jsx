import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ image, title, description, onClick }) => {
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${image})`,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="overlay">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
