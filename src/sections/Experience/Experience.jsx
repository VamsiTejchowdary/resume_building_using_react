import styles from './ExperienceStyle.module.css';

const experiences = [
  {
    company: "West Pharmaceuticals Services",
    title: " Associate Software Engineer",
    location: "Bangalore, India",
    duration: "Oct 2022 - Jul 2023",
    description: "Managed the upkeep of the vendor management project, simplifying the process for external employees to submit timesheets and leave requests. Collaborated on the bot framework for the West Alert System endeavor, enhancing employee engagement by enabling them to receive alerts and reminders from a user-friendly chatbot interface."
  },
  {
    company: "West Pharmaceuticals Services",
    title: "Trainee Software Engineer",
    location: "Bangalore, India",
    duration: "Jan 2022 - Sep 2022",
    description: "Developed a stock market portfolio application during my internship, offering users the functionality to effortlessly manage their stock selections. The app enables users to easily add or remove stocks from their portfolio before proceeding to a streamlined checkout process. And also worked on second phase of vendor management system which helps HRs from vendors approve and send system generated report to WEST company HR’s eliminating human work."
  },
 {
    company: "TechCiti Software Consulting PVT LTD",
    title: "Software Developer Intern",
    location: "Bangalore, India",
    duration: "Jan 2021 - Mar 2021",
    description: "Worked on complaint registration portal which helps users to file a complaint through web app without reporting to police station."
  }
];

function Experience() {
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}><h1>Experience</h1></h1>
      <div className={styles.experienceList}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <div className={styles.companyName}><h2>{experience.company}</h2></div>
              <div className={styles.duration}><p>{experience.duration}</p></div>
            </div>
            <div className={styles.title}><h5>{experience.title}</h5></div>
            <div className={styles.location}><p>{experience.location}</p></div>
            <div className={styles.description}><p>{experience.description}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;