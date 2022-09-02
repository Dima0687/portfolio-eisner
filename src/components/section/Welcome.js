// components
import WhoAmI  from './WhoAmI';
import Contact from './Contact';

// css
import './section-welcome.css';

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
      <div id={`${id}-pic`}></div>
      <div id={`${id}-text-container`}>
        <p>{hello}</p>
        <h1>{name}.</h1>
        <p id="who-am-i-text">
          {sentencePart1}
          <br />
            <WhoAmI/>
          <br />
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
