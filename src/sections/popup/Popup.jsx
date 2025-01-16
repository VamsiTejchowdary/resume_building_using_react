import React from 'react';
import styles from './Popup.module.css';
import reactIcon from '../../assets/React-Dark.svg'; // Add correct path
import mongodbIcon from '../../assets/mongodb.svg'; // Add correct path
import git from '../../assets/Git.svg'; 
import { useTheme } from '../../common/ThemeContext'; // Assuming you're using this for theme
import { FaGithub, FaLink } from 'react-icons/fa';  // Importing icons from react-icons

function Popup({ project, closePopup }) {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  return (
    <div className={styles.popupOverlay}>
      <div className={`${styles.popupContent} ${theme === 'dark' ? '' : styles.light}`}>
        <button className={`${styles.closeButton} ${theme === 'dark' ? '' : styles.light}`} onClick={closePopup}>X</button>
        {/* <img className={styles.popupImage} src={project.src} alt={project.h3} /> */}
        <h2>{project.h3}</h2>
        <p>{project.description}</p>

        <div className={styles.techIcons}>
          <img src={reactIcon} alt="React" className={styles.techIcon} title="React" />
          <img src={mongodbIcon} alt="MongoDB" className={styles.techIcon} title="MongoDB" />
          <img src={git} alt="Git" className={styles.techIcon} title="Git" />
        </div>

        <div className={styles.links}>
          <a className={styles.linkButton} href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: '8px' }} />
            GitHub
          </a>
          <a className={styles.linkButton} href={project.websiteLink} target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: '8px' }} />
            Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;