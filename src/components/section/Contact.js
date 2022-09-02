// icons
import { BsLinkedin, BsGithub } from 'react-icons/bs';

// css for contact section
import './section-contact.css';

const Contact = ({id, device, profile}) => {
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
   }
  } = profile;

  return (
    <div id={`${id}-${device}-info`}>
      { 
        (id === 'contact' || id === 'kontakt') &&
          <h2>{callToAction}</h2>
      }
      <address id={`${id}-${device}-info-address`}>
      { 
        !(id === 'contact' || id === 'kontakt') &&
          <p id={`${id}-${device}-info-city`}
          >
            {`${address.zip} ${address.city}`}
          </p>
      }
        <a 
          href={`mailto:${ email }`}
          id={`${id}-${device}-info-mailto`}
          rel='noopener noreferrer'
        >
          { email }
        </a>
        <a 
          href={`tel:${ tel }`}
          id={`${id}-${device}-info-tel`}
          rel='noopener noreferrer'
        >
          { telAsString }
        </a>
        <div id={`${id}-${device}-social-media`}>
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
        {/* TODO[] Download Button CV hinzufügen */}
      </address>
    </div>
  );
}

export default Contact;