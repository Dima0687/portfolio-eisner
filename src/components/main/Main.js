// hooks
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

// components
import Page from '../page/Page';

// css
import './main.css';

// context
import { DeviceContext } from '../../context/DeviceContext';

function Main() {
  const { device } = useContext(DeviceContext);
  const { page } = useParams();
  console.log('main', page);
  return (
    <main className="main">
      <section id={`${page}-${device}`}>
        <Page page={page} />
      </section>
    </main>
  );
}

export default Main;
