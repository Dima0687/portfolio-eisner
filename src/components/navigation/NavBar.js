// hooks
import { useState, useEffect, useRef, useContext } from 'react';

// data
import { identifiers } from '../../data/identifiers';

// icons
import { FaBars } from 'react-icons/fa';

// css
import './navbar.css';

// component
import Link from '../links/Link';

// context
import { DeviceContext } from '../../context/DeviceContext';

const NavBar = () => {
  const { device, setDevice } = useContext(DeviceContext);
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
          identifiers.map( id => <Link
            key={ id }
            id={ id }
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
        <FaBars id="fabars" onClick={e => setShow(prev => !prev)}/>
      }
      <select id={`language-picker-${device}`}>
          <option 
            value="english"
          >EN</option>
          <option 
            value="german"
          >DE</option>
          <option
           value="russian"
          >RU</option>
        </select>
    </div>
  );
}
 
export default NavBar;