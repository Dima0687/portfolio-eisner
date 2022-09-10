// hooks
import { useContext } from 'react';

// components
import WhoAmI  from '../components/rotatingWords/WhoAmI';
import Contact from './Contact';

// data
import portfolio from '../data/portfolioData';

// context
import { LangContext } from '../context/LangContext';

const Welcome = ({ sectionName, device }) => {
  const { lang } = useContext(LangContext);
  const { 
    welcomeText: {
      hello,
      name,
      sentencePart1,
      sentencePart2
    }
  } = portfolio;

  return (
    <>
      <div id={`${sectionName}-${device}-pic`}></div>
      <div id={`${sectionName}-${device}-text-container`}>
        <p>{ hello[lang] }</p>
        <h1>{ name }.</h1>
        <p id={`who-am-i-text`}>
          { sentencePart1[lang] }
            <WhoAmI/>          
          { sentencePart2[lang] }
        </p> 
      </div>
      <Contact 
        sectionName={sectionName}
        device={device}
      />
    </>
  );
};

export default Welcome;
