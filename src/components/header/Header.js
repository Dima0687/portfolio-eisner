import { Outlet } from 'react-router-dom';
import NavBar from "../navigation/NavBar";

// css
import './header.css';

const Header = () => {
  return ( 
    <header>
      <NavBar />
      <Outlet />
    </header>
  );
}
 
export default Header;