import React from 'react';
import { portfolioData } from '../data';
import { 
  SiFigma, SiHtml5, SiCss, SiJavascript, SiReact, 
  SiNodedotjs, SiPhp, SiMongodb, SiPython, SiCplusplus, 
  SiAndroid, SiPostman, SiGithub, SiEclipseide, SiSpringboot, SiMysql, SiAngular,
  SiAndroidstudio, SiDocker, SiRstudioide, SiXampp, SiPostgresql, SiXml, SiProbot, SiOpenai
} from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { VscVscode } from 'react-icons/vsc';

// Helper function to map skill names to icons
const getIcon = (skillName) => {
  const iconProps = { size: 32, className: "skill-icon" };
  switch(skillName.toLowerCase()) {
    case 'figma': return <SiFigma {...iconProps} color="#F24E1E" />;
    case 'html': return <SiHtml5 {...iconProps} color="#E34F26" />;
    case 'css': return <SiCss {...iconProps} color="#1572B6" />;
    case 'javascript': return <SiJavascript {...iconProps} color="#F7DF1E" />;
    case 'react': return <SiReact {...iconProps} color="#61DAFB" />;
    case 'node.js': return <SiNodedotjs {...iconProps} color="#339933" />;
    case 'php': return <SiPhp {...iconProps} color="#777BB4" />;
    case 'mongodb': return <SiMongodb {...iconProps} color="#47A248" />;
    case 'python': return <SiPython {...iconProps} color="#3776AB" />;
    case 'c++': return <SiCplusplus {...iconProps} color="#00599C" />;
    case 'spring boot': return <SiSpringboot {...iconProps} color="#6DB33F" />;
    case 'mysql': return <SiMysql {...iconProps} color="#4479A1" />;
    case 'mean stack': return <SiAngular {...iconProps} color="#DD0031" />;
    case 'vs code': return <VscVscode {...iconProps} color="#007ACC" />;
    case 'antigravity ai': return <SiProbot {...iconProps} color="#2dd4bf" />;
    case 'cursor ai': return <SiOpenai {...iconProps} color="#74AA9C" />;
    case 'xml': return <SiXml {...iconProps} color="#FFA500" />;
    case 'android studio': return <SiAndroidstudio {...iconProps} color="#3DDC84" />;
    case 'docker desktop': return <SiDocker {...iconProps} color="#2496ED" />;
    case 'rstudio': return <SiRstudioide {...iconProps} color="#75AADB" />;
    case 'pgadmin4': return <SiPostgresql {...iconProps} color="#336791" />;
    case 'oracle sql developer': return <GrOracle {...iconProps} color="#F80000" />;
    case 'xampp': return <SiXampp {...iconProps} color="#FB7A24" />;
    case 'android': return <SiAndroid {...iconProps} color="#3DDC84" />;
    case 'postman': return <SiPostman {...iconProps} color="#FF6C37" />;
    case 'github': return <SiGithub {...iconProps} color="#ffffff" />;
    case 'eclipse': return <SiEclipseide {...iconProps} color="#2C2255" />;
    default: return null;
  }
};

const Skills = () => {
  const { skills } = portfolioData;

  const renderCategory = (title, skillArray) => (
    <div className="skill-section-block">
      <h3 className="skill-section-title">{title}</h3>
      <div className="skill-cards-grid">
        {skillArray.map(skill => (
          <div key={skill.name} className="horizontal-skill-card">
            <div className="skill-icon-wrapper">
              {getIcon(skill.name)}
            </div>
            <div className="skill-details">
              <h4 className="skill-name">{skill.name}</h4>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="about-subtitle" style={{textAlign: 'center', marginBottom: '60px', marginTop: '-40px'}}>
        Technologies and tools I work with
      </p>
      
      <div className="skills-vertical-layout">
        {renderCategory("UI/UX Design", skills.design)}
        {renderCategory("Frontend Development", skills.frontend)}
        {renderCategory("Backend & Database", skills.backend)}
        {renderCategory("Tools & Mobile", skills.tools)}
      </div>
    </section>
  );
};

export default Skills;
