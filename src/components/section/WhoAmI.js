// hooks
import { useContext, useState, useEffect } from 'react';

// context
import { LangContext } from '../../context/LangContext';

const WhoAmI = () => {
  const { language, filteredProfile: profile } = useContext(LangContext);
  const [num, setNum] = useState(0);
  const [whoAmI, setWhoAmI] = useState(profile?.whoAmI[num]);
  // eslint-disable-next-line no-unused-vars
  const [timeInMs, setTimeInMs] = useState(3500);

  useEffect(() => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num, language]);

  return (
    <span id="who-am-i">{whoAmI}</span>
  );
}
 
export default WhoAmI;