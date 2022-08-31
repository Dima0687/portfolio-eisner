// navigation
import { HashLink } from 'react-router-hash-link';

const Link = ({ id, state, device }) => {
  const { 
    nameOfActiveLink, 
    setNameOfActiveLink,
    setShow 
  } = state;
  const wordWithCapital = id.split('')[0].toUpperCase() + id.slice(1);
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