// navigation
import { HashLink } from 'react-router-hash-link';


const Link = ({ id, lang, state, device }) => {
  const { 
    nameOfActiveLink, 
    setNameOfActiveLink, /* currently clicked and active */
    setShow 
  } = state;

  function fixUmlaut(id) {
    if(lang === 'ger'){
      const aUmlaut = new RegExp(/ae/gi);
      const uUmlaut = new RegExp(/ue/gi);
      let gerId = id.replace(aUmlaut, 'ä');
      gerId = gerId.replace(uUmlaut, 'ü');
      gerId = gerId.split('-').join(' ');
      return gerId
    } else {
      return id
    }
  }

  const wordWithCapital = fixUmlaut(id).split('')[0].toUpperCase() + fixUmlaut(id).slice(1);
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