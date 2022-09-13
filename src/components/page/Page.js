// hooks
import { useContext } from "react";

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

  console.log(queue);
  console.log(queue.find( p => p.props.id === page));
  
  return queue.find( p => p.props.id === page );
}
 
export default Page;