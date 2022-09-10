// hooks 
import { useContext, useEffect, useState } from 'react';

// css

// portfolio data
import portfolio from '../data/portfolioData';

// context
import { LangContext } from '../context/LangContext';

const About = ({ sectionName, device }) => {
  const { 
    identifiers,
    aboutMe
  } = portfolio;
  const { lang } = useContext(LangContext);
  const [heading, setHeading] = useState(sectionName);

  useEffect(() => {
    setHeading(
      identifiers[sectionName][lang]
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);



  return (
    <>
      <h2 id={`${sectionName}-${device}-heading`}> { heading } </h2>
      <div id={`${sectionName}-${device}-text-container`}>
        {
          aboutMe[lang].map( (text, i) => (
            <p
              key={i}
              className={`${sectionName}-${device}-text`}
            >
              {text}
            </p>
          ))
        }
      </div>
    </>
  );
}
 
export default About;