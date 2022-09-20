// hooks
import { useContext } from "react";

// pages
import Welcome from "../../pages/welcome/Welcome";
import About from '../../pages/about/About';
import Skills from '../../pages//skills/Skills';
import Projects from '../../pages/projects/Projects';
import Contact from "../../pages/contact/Contact";

import NotFound from "../../pages/not-found/NotFound";

// context
import { DeviceContext } from "../../context/DeviceContext";
import Impress from "../../pages/impress/Impress";
import Privacy from "../../pages/privacy/Privacy";

const Page = ({ page }) => {
  const { device } = useContext(DeviceContext);
  const queue = [ 
    <Welcome 
      sectionName={page}
      device={device}
      id='welcome'
    />, 
    <About 
      sectionName={page}
      device={device}
      id='about'
    />, 
    <Skills 
      sectionName={page}
      device={device}
      id='skills'
    />, 
    <Projects 
      sectionName={page}
      device={device}
      id='projects'
    />, 
    <Contact 
      sectionName={page}
      device={device}
      id='contact'
    />,
    <Impress
      sectionName={page}
      device={device}
      id='impress'
    />,
    <Privacy
      sectionName={page}
      device={device}
      id='privacy'
    />
  ];

  const component = queue.find( p => p.props.id === page );
  return component ? component : <NotFound />;
}
 
export default Page;