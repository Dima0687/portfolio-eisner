// hooks
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

// css
import './main.css';

// context
import { DeviceContext } from '../../context/DeviceContext';

function Main({ children }) {
  const { device } = useContext(DeviceContext);
  const { page:sectionName } = useParams();
  console.log('main', sectionName);
  return (
    <main className="main">
      <section id={`${sectionName}-${device}`}>
        { children }
      </section>
    </main>
  );
}

export default Main;
