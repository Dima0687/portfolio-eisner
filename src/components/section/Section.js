// components 
import Welcome from './Welcome';
import Skills from './Skills';
import Contact from './Contact';

// hooks
import { useContext } from 'react';

// context
import { DeviceContext } from '../../context/DeviceContext';
import { LangContext } from '../../context/LangContext';

const Section = (props) => {
  const { id } = props;
  const { device } = useContext(DeviceContext);
  const { filteredProfile: profile } = useContext(LangContext);

  return (
    <section id={`${id}-${device}`}>
        {
          (id === 'welcome' || id === 'willkommen') && 
            <Welcome 
              id={id}
              profile={profile}
              device={device}
            />
        }
        {
          (id === 'skills' || id === 'faehigkeiten') && 
            <Skills
              id={id}
              device={device}
              profile={profile}
            />
        }
        {
          (id === 'contact' || id === 'kontakt') &&
           <Contact
              id={id}
              device={device}
              profile={profile}
           />
        }
    </section>
  );
}
 
export default Section;