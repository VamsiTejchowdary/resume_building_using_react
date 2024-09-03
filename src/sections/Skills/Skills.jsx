import './SkillSection.css';
import cs from '../../assets/CS.svg';
import java from '../../assets/Java-Dark.svg';
import python from '../../assets/Python-Dark.svg';
import html from '../../assets/HTML.svg'; 
import css from '../../assets/CSS.svg'; 
import js from '../../assets/JavaScript.svg'; 
import jquery from '../../assets/JQuery.svg'; 
import react from '../../assets/React-Dark.svg'; 
import dotnet from '../../assets/DotNet.svg'; 
import git from '../../assets/Git.svg'; 
import sqllite from '../../assets/SQLite.svg'; 
import azure from '../../assets/Azure-Dark.svg'; 
import mysql from '../../assets/MySQL-Dark.svg';

const skillsData = [
  {
    category: 'Languages',
    icons: [
      cs,
      java,
      python
    ],
    names: [
      'C#',
      'Java',
      'Python'
    ]
  },
  {
    category: 'Web Development',
    icons: [
      html,
      css,
      js,
      jquery,
      react
    ],
    names: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'React'
    ]
  },
  {
    category: 'Cloud and Frameworks',
    icons: [
      dotnet,
      git,
      sqllite,
      azure,
      mysql
    ],
    names: [
      '.Net',
      'Git',
      'SQLite',
      'Azure',
      'MySQL'
    ]
  }
];

const SkillsSection = () => {
  return (
    <center>
      <section className='skills-header'>
        <div className='header-name'><h1>SKILLS</h1></div> 
        <div className="skills-section">
          <div className="skills-container">
            {skillsData.map((skill, index) => (
              <div key={index} className='skill-category'>
                <div className='skill-category-name'>
                  <h2>{skill.category}</h2>
                </div>
                <div className="icons-container">
                  {skill.icons.map((icon, i) => (
                    <img 
                      key={i} 
                      src={icon} 
                      title={skill.names[i]} 
                      className="skill-icon" 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </center>
  );
};

export default SkillsSection;