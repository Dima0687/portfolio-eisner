// hooks
import { useState, useEffect, useRef, useContext } from 'react';

// icons
import { FaBars } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';

// css
import './navbar.css';

// component
import CustomLink from '../links/CustomLink';

// context
import { DeviceContext } from '../../context/DeviceContext';
import { LangContext } from '../../context/LangContext';

// portfolio data
import portfolio from '../../data/portfolioData';

const NavBar = () => {
  const { mediaQuerys, identifiers:linkNames } = portfolio;
  const { device, setDevice } = useContext(DeviceContext);
  const { lang, setLang } = useContext(LangContext);
  const [show, setShow] = useState(false);
  const burgerMenu = useRef();

  function handleChangeDisplay(){
    if(show || window.innerWidth >= mediaQuerys.tablet){
      burgerMenu.current.style.display = 'flex';
    } else {
      burgerMenu.current.style.display = 'none';
    }
  }

  function handleSelect(e){
    setLang(e.target.value);
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
          Object.keys(linkNames).map( link => <CustomLink
            key={ link }
            link={ link }
            device={device}
            lang={lang}
            linkNames={linkNames}
            setShow={ setShow }
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
        value={lang}
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