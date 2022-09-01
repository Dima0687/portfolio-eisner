// hooks
import { useEffect } from 'react';

// css
import './section-skills.css';


const Skills = ({ id, idCapital, profile, gerUmlautWord}) => {
  const { skills } = profile;

  useEffect(() => {
    
  }, [gerUmlautWord]);
  return (
    <>
      <h2>{gerUmlautWord}</h2>
      {
        skills.map( skill => (
          <figure 
            key={skill.name}
            className={id}
          >
          </figure>
        ))
      }
    </>
  );
}
 
export default Skills;