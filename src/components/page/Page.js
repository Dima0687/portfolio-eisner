// hooks
import { useContext } from "react";
import { useParams } from "react-router-dom";

// pages
import Welcome from "../../pages/welcome/Welcome";
import About from '../../pages/about/About';
import Skills from '../../pages//skills/Skills';
import Projects from '../../pages/projects/Projects';
import Contact from "../../pages/contact/Contact";

// context
import { DeviceContext } from "../../context/DeviceContext";

const Page = () => {
  const { device } = useContext(DeviceContext);
  const { page } = useParams();
  const pageName = page[0].toUpperCase() + page.slice(1);
  const queue = [ 
    <Welcome 
      sectionName={page}
      device={device}
    />, 
    <About 
      sectionName={page}
      device={device}
    />, 
    <Skills 
      sectionName={page}
      device={device}
    />, 
    <Projects 
      sectionName={page}
      device={device}
    />, 
    <Contact 
      sectionName={page}
      device={device}
    /> 
  ];
  
  return queue.find( p => p.type.name === pageName );
}
 
export default Page;