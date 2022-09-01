// hooks
import { useState, useEffect, useRef, useContext } from 'react';

// icons
import { FaBars } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';

// css
import './navbar.css';

// component
import Link from '../links/Link';

// context
import { DeviceContext } from '../../context/DeviceContext';
import { LangContext } from '../../context/LangContext';

const NavBar = () => {
  const { device, setDevice } = useContext(DeviceContext);
  const { language, setLanguage, filteredProfile:profile } = useContext(LangContext);
  const [nameOfActiveLink, setNameOfActiveLink] = useState('');
  const [show, setShow] = useState(false);
  const burgerMenu = useRef();

  const mediaQuerys = {
    mobile: 320,
    tablet: 768,
    desktop: 1200
  }

  function handleChangeDisplay(){
    if(show || window.innerWidth >= mediaQuerys.tablet){
      burgerMenu.current.style.display = 'flex';
    } else {
      burgerMenu.current.style.display = 'none';
    }
  }

  function handleSelect(e){
    setLanguage(e.target.value);
  }

  function handleResize(){
    handleChangeDisplay();

    if(window.innerWidth < mediaQuerys.tablet){
      setDevice('mobile');
    }

    if(window.innerWidth >= mediaQuerys.tablet && window.innerWidth <= mediaQuerys.desktop){
      setDevice('tablet');
      setShow(false);
    }

    if(window.innerWidth >= mediaQuerys.desktop) {
      setDevice('desktop');
      setShow(false);
    }
  }

  useEffect(() => {
    handleResize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={`navbar-container-${device}`}>
      <nav id={`navbar-${device}`} ref={burgerMenu}>
        { 
          profile?.identifiers.map( id => <Link
            key={ id }
            id={ id }
            lang={language}
            state={{ 
              nameOfActiveLink, 
              setNameOfActiveLink, 
              setShow 
            }}
            device={device}
          />)
        }
      </nav>
      {
        device === 'mobile' && 
        !show &&
        <FaBars className="menu-button" onClick={e => setShow(true)}/>
      }
      {
        device === 'mobile' && 
        show &&
        <VscChromeClose className="menu-button" onClick={e => setShow(false)}/>
      }
      <select 
        id={`language-picker-${device}`}
        value={language}
        onChange={ e => handleSelect(e)}
      >
          <option 
            value="en"
          >EN</option>
          <option 
            value="ger"
          >GER</option>
          <option
           value="ru"
          >RU</option>
        </select>
    </div>
  );
}
 
export default NavBar;