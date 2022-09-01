// icons
import { BsLinkedin, BsGithub } from 'react-icons/bs';

// css
import './section-welcome.css';

const Welcome = ({ id, profile, whoAmI }) => {
  const { 
    welcomeText: { 
      hello, 
      name, 
      sentencePart1, 
      sentencePart2
    },
    address,
    contact
  } = profile;

  return (
    <>
      <div id={`${id}-pic`}></div>
      <div id={`${id}-text-container`}>
        <p>{hello}</p>
        <h1>{name}.</h1>
        <p id="who-am-i-text">
          {sentencePart1}
          <br />
          <span id="who-am-i">{whoAmI}</span>
          <br />
          {sentencePart2}
        </p>
      </div>
      <div id={`${id}-info`}>
        <address id={`${id}-info-address`}>
          <p
            id={`${id}-info-city`}
          >{`${address.zip} ${address.city}`}</p>
          <a 
            href={`mailto:${contact.email}`}
            id={`${id}-info-mailto`}
            rel='noopener noreferrer'
          >
            {contact.email}
          </a>
          <a 
            href={`tel:${contact.tel}`}
            id={`${id}-info-tel`}
            rel='noopener noreferrer'
          >
            {contact.telAsString}
          </a>
          <div id={`${id}-social-media`}>
            <a 
              href={contact.linkedIn}
              rel="noopener noreferrer" 
              target='_blank'
            >
              <BsLinkedin/>
            </a>
            <a
             href={contact.github}
             rel="noopener noreferrer" 
             target='_blank'
            >
              <BsGithub/>
            </a>
          </div>
          {/* TODO[] Download Button CV hinzufügen */}
        </address>
      </div>
    </>
  );
};

export default Welcome;
