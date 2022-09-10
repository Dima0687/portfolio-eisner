// css
import './footer.css';

// hooks
import { useContext, useState, useEffect } from 'react'; 

// context
import { DeviceContext } from '../../context/DeviceContext';

// portfolio data
import portfolio from '../../data/portfolioData';

const Footer = () => {
  const { copy:sinceYear, welcomeText } = portfolio;
  const { device } = useContext(DeviceContext);
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
      <h3 id={`footer-h3-${device}`}>&copy; {showYear} {welcomeText.name}</h3>
    </footer>
  );
}
 
export default Footer;