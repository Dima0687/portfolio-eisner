// css
import './section.css';

// hooks
import { useContext, useState, useEffect } from 'react';

// context
import { DeviceContext } from '../../context/DeviceContext';

const Section = (props) => {
  const { id } = props;
  const { device } = useContext(DeviceContext);
  const [whoAmI, setWhoAmI] = useState([
    'employee',
    'web developer',
    'collegue'
  ]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    let interval = null;
    if( num < whoAmI.length){
      interval = setInterval(() => {
        setNum(num => num + 1);
      }, 3500);
    } else {
      setNum(0)
    }

    return () => clearInterval(interval);
  }, [num]);

  return (
    <section id={`${id}-${device}`}>
      { 
        device === 'mobile' && id === 'welcome' && <>
          <div id={`${id}-pic`}>
            
          </div>
          <div id={`${id}-text-container`}>
            <p>HELLO, I'M</p>
            <h1>Dietmar Eisner.</h1>
            <p id="who-am-i-text">Your new <br/>
              <span id="who-am-i">{whoAmI[num]}</span> 
            <br/> is just a click away!</p>
          </div>
          <div id={`${id}-info`}>
            <address>
              test
            </address>
          </div>
        </>
      }
    </section>
  );
}
 
export default Section;