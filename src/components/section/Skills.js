// hooks 
import { useContext, useEffect, useState } from 'react';

// context
import { LangContext } from '../../context/LangContext';

// css
import './section-skills.css';


const Skills = ({ id, device, profile }) => {
  const { fixUmlaut } = useContext(LangContext);
  const [heading, setHeading] = useState(
    fixUmlaut(id)[0].toUpperCase() + fixUmlaut(id).slice(1)
  );
  const { skills } = profile;
  
  useEffect(() => {
    setHeading(
      fixUmlaut(id)[0].toUpperCase() + fixUmlaut(id).slice(1)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <h2 id={`${id}-heading`}>{heading}</h2>
      <div  id={`${id}-${device}-container`}>
        {
          skills.map( skill => (
            <figure 
              key={skill.title}
              className={`${id}-${device}`}
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