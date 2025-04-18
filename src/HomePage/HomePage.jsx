import React, { useState } from "react";
import "./HomePage.scss";
import { Tooltip, Box, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import project1_image from '../assets/project-1.png'
import project2_image from '../assets/project-2.png'
import ProjectCard from "../ProjectCard";
import ColorChanger from "../ColorChanger";

export const HomePage = () => {
  const projects = [
    {
      image:
        project1_image,
      title: "Redux ecom app",
      description:
        "An ecommerce store featuring a redux back-end.",
      onClick: () => console.log("Project 1 clicked"),
    },
    {
      image:
      project2_image,
      title: "Movie finder",
      description: "An app made using the tmdb API",
      onClick: () => console.log("Project 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Project 2",
      description: "This is a description for Project 2.",
      onClick: () => console.log("Project 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Project 2",
      description: "This is a description for Project 2.",
      onClick: () => console.log("Project 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Project 2",
      description: "This is a description for Project 2.",
      onClick: () => console.log("Project 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Project 2",
      description: "This is a description for Project 2.",
      onClick: () => console.log("Project 2 clicked"),
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("gullbhutta14@yahoo.com").catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="container">
      <div className="container__header">
        <p className="name">
          Muhammad Bhutta <br /> <span>Web Developer</span>
        </p>
        <div className="container__header__contacts">
          {/* copy start */}
          <Box
            display="flex"
            alignItems="center"
            color="white"
            width="fit-content"
          >
            <p style={{ marginRight: "3px" }}>gullbhutta14@yahoo.com</p>
            <Tooltip title="Copy">
              <button onClick={handleCopy}>
                <ContentCopyIcon sx={{ color: "#ffffff" }} />
              </button>
            </Tooltip>
          </Box>
          <div style={{ display: "flex" }}>
            <Tooltip title="LinkedIn">
              <button>
                <a
                  href="https://www.linkedin.com/in/muhammad-bhutta-2699b52ba/"
                  target="__blank"
                >
                  <i className="devicon-linkedin-plain"></i>
                </a>
              </button>
            </Tooltip>
            <Tooltip title="GitHub">
              <button>
                <a href="https://github.com/Muhammad2317" target="__blank">
                  <i className="devicon-github-original"></i>
                </a>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="skills section">
        <p className="title">Skills</p>
        <div className="skills__container">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JS</div>
          <div className="skill">Terminal</div>
          <div className="skill">Tailwind</div>
          <div className="skill">Bootstrap</div>
          <div className="skill">Python</div>
          <div className="skill">Git</div>
          <div className="skill">GitHub</div>
        </div>
      </div>
      <div className="projects section">
        <p className="title">Projects</p>
        <div className="projectCard__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              onClick={project.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
