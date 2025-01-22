import React from 'react';
import styles from './Popup.module.css';
import { useTheme } from '../../common/ThemeContext';
import { FaGithub, FaLink } from 'react-icons/fa';

function Popup({ project, closePopup }) {
  const { theme } = useTheme();

  return (
    <div className={styles.popupOverlay}>
      <div className={`${styles.popupContent} ${theme === 'dark' ? '' : styles.light}`}>
        <button className={`${styles.closeButton} ${theme === 'dark' ? '' : styles.light}`} onClick={closePopup}>X</button>
        <h2>{project.h3}</h2>
        <p>{project.description}</p>

        <div className={styles.techIcons}>
          {project.techIcons.map((icon, index) => (
            <img key={index} src={icon} alt="Tech Icon" className={styles.techIcon} />
          ))}
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