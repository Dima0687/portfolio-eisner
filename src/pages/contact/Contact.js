// hooks
import { useContext, useState } from 'react';

// icons
import { BsLinkedin, BsGithub } from 'react-icons/bs';

// portfolio data
import portfolio from '../../data/portfolioData';

// css
import './contact.css';

// context
import { LangContext } from '../../context/LangContext';
import ContactForm from '../../components/form/ContactForm';

const Contact = ({ sectionName, device }) => {
  const [revealed, setRevealed] = useState(false);
  const [tel, setTel] = useState('tel:+');
  const [telString, setTelString] = useState('');
  const [mail, setMail] = useState('mailto:bb@bot.com');
  const [mailOutput, setMailOutput] = useState('');

  const { lang } = useContext(LangContext);
  const {
    identifiers:linkNames,
    address,
    contact: {
      info: {
        tel:{
          prefixTel,
          firstThree,
          middleThree,
          lastTwo
        },
        email,
        linkedIn,
        github
      }
   },
   pdfUrl,
   click,
   linkToContactTxt
  } = portfolio;

  function handleDownload() {
    const url = pdfUrl;
    window.open(url,  "Dietmar_Eisner_CV_Web_Dev, noopener, noreferrer");
  }

  function handleRevealInfo(){
    setRevealed(true);
    const _tel = {
      prefix: Number(prefixTel.split('').reverse().join('')),
      first: Number(firstThree.split('').reverse().join('')),
      middle: Number(middleThree.split('').reverse().join('')),
      last: Number(lastTwo.split('').reverse().join(''))
    }
    setTel(tel => tel+`${_tel.prefix}${_tel.first}${_tel.middle}${_tel.last}`);

    setTelString(`+${_tel.prefix} ${_tel.first} ${_tel.middle} ${_tel.last}`.replace('49','(49) '));
    let _mail = `${email.first}${String.fromCharCode(email.at)}${email.provider}.${email.domain}`;
    
    setMail(prevMail => prevMail.slice(0,7) + _mail);
    setMailOutput(_mail);
  }

  return (
    <div id={ `${sectionName}-info-container` }>
      { sectionName === Object.keys(linkNames)[0] ?
      
      <>
        <address 
          id={ `${sectionName}-${device}-info-address` }
          className={ revealed ? '': 'blur' }
        >
          <p 
            id={`${sectionName}-${device}-info-city`}
          >
            { `${address.zip} ${address.city}` }
          </p>
          <div  id={ `${sectionName}-${device}-info-contact-container` }>
            <a 
              href={ mail }
              id={ `${sectionName}-${device}-info-mailto` }
              rel='noopener noreferrer'
            >
              { mailOutput }
            </a>
            <a 
              href={`${ tel }`}
              id={ `${sectionName}-${device}-info-tel` }
              rel='noopener noreferrer'
            >
              { telString }
            </a>
            <a 
              href={ `/${Object.keys(linkNames)[Object.keys(linkNames).length - 1]}` }
              id='link' className={lang}
            >
              { linkToContactTxt[lang] }
            </a>
          </div>
          <div id={ `${sectionName}-${device}-social-media` }>
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
        {
          !revealed &&  <div 
          id='click-container'
          onClick={ handleRevealInfo }
        >
          <p id={lang}>
            {click[lang]}
          </p>
        </div>
        }
      </>

      : <ContactForm 
        lang={lang}
        device={device}
        sectionName={sectionName}
        portfolio={portfolio}
      />
    }
    </div>
  );
}

export default Contact;