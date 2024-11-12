import styles from './ProjectStyles.module.css';
import whiteresume from '../../assets/finalresume.png';
import blackresume from '../../assets/finalresume.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import hourstracker from '../../assets/hourstracker.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import { useTheme } from '../../common/ThemeContext';

function Projects() {
  const { theme, toggleTheme } = useTheme();
  const resumeIcon = theme === 'light' ? whiteresume : blackresume;
  return (
    
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={hourstracker}
          link="https://hourstracker.onrender.com/login"
          h3="Hours Tracker"
          //p="Resume "
        />
        <ProjectCard
          src={resumeIcon}
          link="https://github.com/VamsiTejchowdary/resume_building_using_react"
          h3="Digital Resume"
          //p=""
        />
        {/* <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        /> */}
        <ProjectCard
          src={hipsster}
          link="https://github.com/VamsiTejchowdary/Big-mart-sales-predection"
          h3="Big Mart Sales Predection"
          //p="Resume "
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
