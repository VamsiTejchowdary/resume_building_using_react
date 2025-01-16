import { useState } from 'react';
import ProjectCard from '../../common/ProjectCard';
import Popup from '../popup/Popup';
import styles from './ProjectStyles.module.css';
import whiteresume from '../../assets/finalresume.png';
import blackresume from '../../assets/finalresume.png';
import hipsster from '../../assets/hipsster.png';
import hourstracker from '../../assets/hourstracker.png';
import cinema from '../../assets/cinema2.jpg';

import { useTheme } from '../../common/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import GitHub and Website icons

function Projects() {
  const { theme } = useTheme();
  const resumeIcon = theme === 'light' ? whiteresume : blackresume;

  const [showPopup, setShowPopup] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleCardClick = (event, project) => {
    event.preventDefault(); // Prevent the default action (i.e., redirecting)
    setCurrentProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const projects = [
    {
      src: cinema,
      h3: "Telugu Film Insights",
      description: "A website for Telugu cinema reviews and insights.",
      githubLink: "https://github.com/VamsiTejchowdary/telugumoviesreviews",
      websiteLink: "https://telugufilminsights.com",
    },
    {
      src: hourstracker,
      h3: "Hours Tracker",
      description: "An app for tracking work hours and shifts.",
      githubLink: "https://github.com/VamsiTejchowdary/hourstracker",
      websiteLink: "https://hourstracker.onrender.com/login",
    },
    {
      src: resumeIcon,
      h3: "Digital Resume",
      description: "A digital resume built using React.",
      githubLink: "https://github.com/VamsiTejchowdary/resume_building_using_react",
      websiteLink: "https://vamsitejchowdary.com",
    },
    {
      src: hipsster,
      h3: "Big Mart Sales Prediction",
      description: "Sales prediction model for Big Mart data.",
      githubLink: "https://github.com/VamsiTejchowdary/Big-mart-sales-predection",
      websiteLink: "https://github.com/VamsiTejchowdary/Big-mart-sales-predection",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} onClick={(event) => handleCardClick(event, project)}>
            <ProjectCard
              src={project.src}
              h3={project.h3}
              // Don't pass the description here; it's not needed in the card
            />
          </div>
        ))}
      </div>

      {showPopup && <Popup project={currentProject} closePopup={closePopup} />}
    </section>
  );
}

export default Projects;