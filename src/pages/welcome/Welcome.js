// hooks
import { useContext } from 'react';

import { Link } from 'react-router-dom';

// components
import WhoAmI  from '../../components/rotating-words/WhoAmI';
import Contact from '../contact/Contact';

// data
import portfolio from '../../data/portfolioData';

// context
import { LangContext } from '../../context/LangContext';

// css
import './welcome.css';

const Welcome = ({ sectionName, device }) => {
  const { lang } = useContext(LangContext);
  lang === 'en' && (document.title = 'Dietmar Eisner Portfolio | Welcome');
  lang === 'de' && (document.title = 'Dietmar Eisner Portfolio | Willkommen');
  lang === 'ru' && (document.title = 'Dietmar Eisner Portfolio | добро пожаловать');
  const {
    identifiers:pages,
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
      <Link to={`/${Object.keys(pages)[Object.keys(pages).length - 1]}`} id={`${sectionName}-anchor`}>
        <div id={`${sectionName}-${device}-${lang}-text-container`}>
          <p>{ hello[lang] }</p>
          <h1>{ name }.</h1>
          <p id={`who-am-i-text`}>
            { sentencePart1[lang] }
              <WhoAmI/>          
            { sentencePart2[lang] }
          </p> 
        </div>
      </Link>
      <a 
        className='license'
        href="https://unsplash.com/license" 
        rel='noopener noreferrer' 
        target='_blank'
      >unsplash.com</a>
      <Contact 
        sectionName={sectionName}
        device={device}
      />
    </>
  );
};

export default Welcome;
