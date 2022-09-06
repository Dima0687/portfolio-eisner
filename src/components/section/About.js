// hooks 
import { useContext, useEffect, useState } from 'react';

// context
import { LangContext } from '../../context/LangContext';

// css
import './section-about.css';

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

    </>
  );
}
 
export default About;