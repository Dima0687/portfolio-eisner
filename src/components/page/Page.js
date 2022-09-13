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
    <About 
      sectionName={page}
      device={device}
    />, 
    <Welcome 
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

  console.log(queue);
  console.log(queue.find( p => p.props.sectionName === page));
  
  return queue.find( p => p.props.sectionName === page );
}
 
export default Page;