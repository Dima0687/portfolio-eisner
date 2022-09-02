// hooks
import { useContext } from 'react';

// navigation
import { HashLink } from 'react-router-hash-link';

// context
import { LangContext } from '../../context/LangContext';

const Link = ({ id, lang, state, device }) => {
  const { fixUmlaut } = useContext(LangContext);

  const { 
    nameOfActiveLink, 
    setNameOfActiveLink,
    setShow 
  } = state;

  const wordWithCapital = fixUmlaut(id)[0].toUpperCase() + fixUmlaut(id).slice(1);
 
  function changeState(e) {
    setShow(false);
    const nameOfClickedLink = e.currentTarget.innerText;
    if(nameOfActiveLink !== nameOfClickedLink){
      setNameOfActiveLink(nameOfClickedLink);
    }
  }
  
  return (
      <HashLink 
        smooth
        to={`/#${id}-${device}`}
        className={ nameOfActiveLink === wordWithCapital ? 'selected' : null }
        onClick={ changeState }
      >{wordWithCapital}</HashLink>
  );
}
 
export default Link;