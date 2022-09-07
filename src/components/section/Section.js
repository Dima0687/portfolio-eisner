// components 
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
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
          ( id === 'welcome' ||
            id === 'willkommen' ||
            id === 'добро-пожаловать'
          ) && 
            <Welcome 
              id={id}
              profile={profile}
              device={device}
            />
        }
        {
          ( id === 'about' ||
            id === 'ueber-mich' ||
            id === 'обо-мне'
          ) &&
            <About 
              id={id}
              profile={profile}
              device={device}
            />
        }
        {
          ( id === 'skills' ||
            id === 'faehigkeiten' ||
            id === 'навыки'
          ) && 
            <Skills
              id={id}
              device={device}
              profile={profile}
            />
        }
        {
          ( id === 'projects' ||
            id === 'projekte' || 
            id === 'проекты' 
          ) && 
            <Projects 
              id={id}
              device={device}
              profile={profile}
            />
        }
        {
          ( id === 'contact' ||
            id === 'kontakt' ||
            id === 'контакт'
          ) &&
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