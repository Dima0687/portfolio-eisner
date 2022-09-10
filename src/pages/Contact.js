// hooks
import { useContext } from 'react';

// icons
import { BsLinkedin, BsGithub } from 'react-icons/bs';

// portfolio data
import portfolio from '../data/portfolioData';

// css

// context
import { LangContext } from '../context/LangContext';

const Contact = ({sectionName, device }) => {
  const { lang } = useContext(LangContext);
  const {
    address,
    contact: {
      callToAction,
      info: {
        email,
        tel,
        telAsString,
        linkedIn,
        github
      }
   },
   pdfUrl
  } = portfolio;

  function handleDownload() {
    const url = pdfUrl;
    window.open(url,  "Dietmar_Eisner_CV_Web_Dev, noopener, noreferrer");
  }

  return (
    <div id={`${sectionName}-${device}-info`}>
      { 
        ( sectionName === 'contact' ) &&
          <h2 id={`${sectionName}-${device}-heading`}>{callToAction[lang]}</h2>
      }
      <address id={`${sectionName}-${device}-info-address`}>
      { 
        !( sectionName === 'contact' ) &&
          <p id={`${sectionName}-${device}-info-city`}
          >
            {`${address.zip} ${address.city}`}
          </p>
      }
        <a 
          href={`mailto:${ email }`}
          id={`${sectionName}-${device}-info-mailto`}
          rel='noopener noreferrer'
        >
          { email }
        </a>
        <a 
          href={`tel:${ tel }`}
          id={`${sectionName}-${device}-info-tel`}
          rel='noopener noreferrer'
        >
          { telAsString }
        </a>
        <div id={`${sectionName}-${device}-social-media`}>
          <a 
            href={ linkedIn }
            rel="noopener noreferrer" 
            target='_blank'
          >
            <BsLinkedin/>
          </a>
          <a
            href={ github }
            rel="noopener noreferrer" 
            target='_blank'
          >
            <BsGithub/>
          </a>
        </div>
        {
          <button
            onClick={ handleDownload }
            id={`${sectionName}-${device}-download-button`}
          >
            download cv
          </button>
        }
      </address>
    </div>
  );
}

export default Contact;