// hooks 
import { useContext, useEffect, useState } from 'react';

// context
import { LangContext } from '../../context/LangContext';

// css
import './mobile/section-about.css';
import './tablet/section-about.css';
import './desktop/section-about.css';

const About = ({ id, device, profile }) => {
  const { fixUmlaut } = useContext(LangContext);
  const [heading, setHeading] = useState(
    fixUmlaut(id)[0].toUpperCase() + fixUmlaut(id).slice(1)
  );
  const { aboutMe } = profile;

  useEffect(() => {
    setHeading(
      fixUmlaut(id)[0].toUpperCase() + fixUmlaut(id).slice(1)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);



  return (
    <>
      <h2 id={`${id}-${device}-heading`}> { heading } </h2>
      <div id={`${id}-${device}-text-container`}>
        {
          aboutMe.map( (text, i) => (
            <p
              key={i}
              className={`${id}-${device}-text`}
            >
              {text}
            </p>
          ))
        }
      </div>
      <div id={`filler-${device}`}></div>
    </>
  );
}
 
export default About;