

// navigation
import { NavLink } from 'react-router-dom';

const CustomLink = ({ link, lang, setShow, device, linkNames }) => {
  const linkName = linkNames[link][lang];

  return (
      <NavLink
        to={`/${link}`}
        onClick={ () => setShow(false) }
      >
        {linkName}
      </NavLink>
  );
}
 
export default CustomLink;