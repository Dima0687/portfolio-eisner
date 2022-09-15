// hooks
import { useContext } from "react";

// react router dom
import { Navigate } from 'react-router-dom';

// pages
import Welcome from "../../pages/welcome/Welcome";
import About from '../../pages/about/About';
import Skills from '../../pages//skills/Skills';
import Projects from '../../pages/projects/Projects';
import Contact from "../../pages/contact/Contact";

// context
import { DeviceContext } from "../../context/DeviceContext";

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
    /> 
  ];

  const component = queue.find( p => p.props.id === page )
  
  return component ? component : <Navigate to='/not-found'/>;
}
 
export default Page;