/* eslint-disable no-unused-vars */
// hooks
import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// css
import './not-found.css';

// images
import goneMobile from '../../images/you-gone-to-far-640x640-black.jpg';
import goneTablet from '../../images/you-gone-to-far-1920x1920-black.jpg';
import goneDesktop from '../../images/you-gone-to-far-2400x2400-black.jpg';
import astronaut from '../../images/astronaut-only.png'

// context 
import { LangContext } from '../../context/LangContext';
import { DeviceContext } from '../../context/DeviceContext';

// portfolio data
import portfolio from '../../data/portfolioData';

const NotFound = () => {
  const astronautRef = useRef();
  const { lang } = useContext(LangContext);
  const { device } = useContext(DeviceContext);
  const { notFound } = portfolio;
  const [spinning, setSpinning] = useState([
    {
      transform: 'scale(2) rotateZ(-360deg)'
    },
    {
      transform: 'scale(.02) rotateZ(360deg)'
    }
  ]);
  const [timing, setTiming] = useState({
    duration: 10000,
    iterations: 1
  });

  const navigate = useNavigate();
  useEffect(() => {
    astronautRef.current.animate(spinning, timing);
    const redirect = setTimeout(() => {
      navigate('/');
    }, timing.duration);
    return () => clearTimeout(redirect); 
  }, [spinning, timing, lang, navigate]);
  return (
    <>
      <h2
        id={`not-found-heading`}
        className={device}
      >404</h2>
      <figure
        id='not-found-container'
        className={device}
      >
        <div id={`not-found-${device}-images-container`}>
          <img 
            src={
              device === 'mobile' ?
                goneMobile :
              device === 'tablet' ?
                goneTablet :
              device === 'desktop' ?
                goneDesktop : null
            }
            id={`not-found-pic-${device}`}
            alt='universe with the earth at the bottom'
          />
          <img
            ref={astronautRef}
            src={astronaut}
            alt="flying astronaut"
            id={`not-found-${device}-astronaut`}
          />
        </div>
        <figcaption id={`not-found-${device}-figcaption`}>
          <p 
            id={`not-found-${device}-text`}
          >{notFound[lang].text}</p>
        </figcaption>
      </figure>
    </>
  );
}
 
export default NotFound;