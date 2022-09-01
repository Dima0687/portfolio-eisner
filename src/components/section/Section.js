// components 
import Welcome from './Welcome';
import Skills from './Skills';

// hooks
import { useContext, useState, useEffect } from 'react';

// context
import { DeviceContext } from '../../context/DeviceContext';
import { LangContext } from '../../context/LangContext';

const Section = (props) => {
  const { id } = props;
  const { device } = useContext(DeviceContext);
  const { language, filteredProfile: profile, gerUmlautWord} = useContext(LangContext);
  const [num, setNum] = useState(0);
  const [whoAmI, setWhoAmI] = useState(profile?.whoAmI[num]);
  const [timeInMs, setTimeInMs] = useState(3500);
  const [idFirstLetterCapital, setIdFirstLetterCapital] = useState(null);
  useEffect(() => {
    const idWithCapital = id.split('')[0].toUpperCase() + id.slice(1);
    setIdFirstLetterCapital(prev => idWithCapital);
    const root = document.documentElement;
    root.style.setProperty('--anim-duration', `${timeInMs/1000}s`);
    
    let interval = null;
    if( num < profile?.whoAmI.length){
      interval = setInterval(() => {
        setNum(num => num + 1);
      }, timeInMs);
    } else {
      setNum(0);
    }

    setWhoAmI(prev => profile?.whoAmI[num]);
    return () => clearInterval(interval);
  }, [num, language]);

  return (
    <section id={`${id}-${device}`}>
        {
          (id === 'welcome' || id === 'willkommen') && 
            <Welcome 
              id={id}
              profile={profile}
              whoAmI={whoAmI}
            />
        }
        {
          (id === 'skills' || id === 'faehigkeiten') && 
            <Skills
              id={id}
              device={device}
              idCapital={idFirstLetterCapital}
              profile={profile}
              gerUmlautWord={gerUmlautWord}
            />
        }
    </section>
  );
}
 
export default Section;

 /* <>
  <div id={`${id}-pic`}>
    
  </div>
  <div id={`${id}-text-container`}>
    <p>{profile?.welcomeText?.hello}</p>
    <h1>{profile?.welcomeText?.name}.</h1>
    <p id="who-am-i-text">{profile?.welcomeText?.sentencePart1}<br/>
      <span id="who-am-i">{whoAmI}</span> 
    <br/>{profile?.welcomeText?.sentencePart2}</p>
  </div>
  <div id={`${id}-info`}>
    <address>
      test
    </address>
  </div>
</> */