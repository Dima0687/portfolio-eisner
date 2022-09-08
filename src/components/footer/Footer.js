// css
import './footer.css';

// hooks
import { useContext, useState, useEffect } from 'react'; 

// context
import { LangContext } from '../../context/LangContext';
import { DeviceContext } from '../../context/DeviceContext';

const Footer = () => {
  const { filteredProfile: profile } = useContext(LangContext);
  const { device } = useContext(DeviceContext);
  const sinceYear = profile.copy;
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showYear, setShowYear] = useState(sinceYear);

  useEffect(() => {
    setCurrentYear(
      new Date().getFullYear()
    )
  }, []);

  useEffect(() => {
    setShowYear(
      (currentYear - sinceYear) === 0 ? 
        sinceYear : 
        `${sinceYear} - ${currentYear}`
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  return ( 
    <footer>
      <h3 id={`footer-h3-${device}`}>&copy; {showYear} {profile.welcomeText.name}</h3>
    </footer>
  );
}
 
export default Footer;