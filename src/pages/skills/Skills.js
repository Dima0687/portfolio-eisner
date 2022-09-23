// hooks 
import { useContext, useEffect, useState } from 'react';

// css
import './skills.css';

// portfolio data
import portfolio from '../../data/portfolioData';

// context
import { LangContext } from '../../context/LangContext';


const Skills = ({ sectionName, device }) => {
  const { lang } = useContext(LangContext);
  lang && (document.title = 'Dietmar Eisner Portfolio | Skills');
  lang && (document.title = 'Dietmar Eisner Portfolio | Fähigkeiten');
  lang && (document.title = 'Dietmar Eisner Portfolio | навыки');
  const { 
    identifiers,
    skills 
  } = portfolio;
  const [heading, setHeading] = useState(sectionName);
  
  useEffect(() => {
    setHeading(identifiers[sectionName][lang]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <>
      <h2 id={`${sectionName}-${device}-${lang}-heading`}>{heading}</h2>
      <div  id={`${sectionName}-${device}-container`}>
        {
          skills.map( skill => (
            <figure 
              key={skill.title}
              className={`${sectionName}-${device}-figure`}
            >
              <h3>{skill.title}</h3>
              {skill.icon}
            </figure>
          ))
        }
      </div>
    </>
  );
}
 
export default Skills;