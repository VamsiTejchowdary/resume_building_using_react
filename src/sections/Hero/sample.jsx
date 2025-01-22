import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Dabbar_Vamsi_Tej_Chowdary.pdf";
import { useTheme } from "../../common/ThemeContext";
import faDownloadWhite from "../../assets/downloadlight.svg";
import faDownloadDark from "../../assets/downloaddark.svg";

// Set the app element for accessibility (required for react-modal)
Modal.setAppElement("#root");

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const downloadIcone = theme === "light" ? faDownloadWhite : faDownloadDark;
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Pic of Hacker"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle Theme Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vamsi Tej<br></br>
          Chowdary
        </h1>
        <h2>FullStack Web Developer</h2>
        <span className={styles.socialLinks}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a
            href="https://github.com/VamsiTejchowdary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With over 3 years of experience as a dedicated full-stack web
          developer, including 2 years of specialized expertise in C# and the
          .NET framework, I bring a robust understanding of end-to-end
          application development. My passion lies in crafting scalable,
          user-friendly web solutions, leveraging modern technologies like
          React, Next and NodeJs. I thrive on creating efficient,
          well-designed systems that drive user engagement and business success.
        </p>
        <div className={styles.resumeContainer}>
          <button
            className={styles.resumeButton}
            onClick={openModal}
            title="View"
          >
            View Resume
          </button>
          <a
            className={styles.downloadResume}
            href={CV}
            target="_blank"
            title="Download"
            download
          >
            <img src={downloadIcone} alt="GitHub Icon" />
          </a>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Resume PDF Viewer"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        <iframe
          src={CV}
          title="Resume PDF Viewer"
          className={styles.pdfViewer}
          frameBorder="0"
        ></iframe>
      </Modal>
    </section>
  );
}

export default Hero;
