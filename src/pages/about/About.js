// hooks 
import { useContext, useEffect, useState } from 'react';

// css
import './about.css';

// portfolio data
import portfolio from '../../data/portfolioData';

// context
import { LangContext } from '../../context/LangContext';

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
      <h2 id={`${sectionName}-${device}-${lang}-heading`}> { heading } </h2>
      <div id={`${sectionName}-${device}-${lang}-text-container`}>
        {
          aboutMe[lang].map( (text, i) => (
            <div 
              className={`${sectionName}-${device}-text-border`}
              key={text}
            >
              <p
                key={i}
                className={`${sectionName}-${device}-${lang}-text`}
              >
                {text}
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
}
 
export default About;