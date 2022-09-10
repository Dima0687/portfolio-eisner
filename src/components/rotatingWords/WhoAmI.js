// hooks
import { useContext, useState, useEffect } from 'react';

// portfolio data
import portfolio from '../../data/portfolioData';

// context
import { LangContext } from '../../context/LangContext';

const WhoAmI = () => {
  const { lang } = useContext(LangContext);
  const { whoAmI } = portfolio;
  const [num, setNum] = useState(0);
  const [whoAmIWord, setWhoAmIWord] = useState(whoAmI[lang][num]);
  // eslint-disable-next-line no-unused-vars
  const [timeInMs, setTimeInMs] = useState(3500);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--anim-duration', `${timeInMs/1000}s`);
    
    let interval = null;
    if( num < whoAmI[lang].length){
      interval = setInterval(() => {
        setNum(num => num + 1);
      }, timeInMs); /* This is why i set the time in ms */
    } else {
      setNum(0);
    }

    setWhoAmIWord(prev => whoAmI[lang][num]);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num, lang]);

  return (
    <span id="who-am-i"> {whoAmIWord} </span>
  );
}
 
export default WhoAmI;