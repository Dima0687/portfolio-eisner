// components
import WhoAmI  from './WhoAmI';
import Contact from './Contact';

// css
import './mobile/section-welcome.css';
import './tablet/section-welcome.css';
import './desktop/section-welcome.css';

const Welcome = ({ id, profile, device }) => {
  const { 
    welcomeText: { 
      hello, 
      name, 
      sentencePart1, 
      sentencePart2
    }
  } = profile;

  return (
    <>
      <div id={`${id}-${device}-pic`}></div>
      <div id={`${id}-${device}-text-container`}>
        <p>{hello}</p>
        <h1>{name}.</h1>
        <p id={`who-am-i-text`}>
          {sentencePart1}
            <WhoAmI/>          
          {sentencePart2}
        </p>
      </div>
      <Contact 
        id={id}
        profile={profile}
        device={device}
      />
    </>
  );
};

export default Welcome;
