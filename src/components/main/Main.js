// hooks
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

// components
import Page from '../page/Page';

// css
import './main.css';

// context
import { DeviceContext } from '../../context/DeviceContext';

// portfolio data
import portfolio from '../../data/portfolioData';

function Main() {
  const { device } = useContext(DeviceContext);
  const { page } = useParams();
  const { identifiers } = portfolio;

  const pages = [...Object.keys(identifiers)];

  return (
    <main className="main">
      <section id={`${
          pages.includes(page) || page === 'impress' || page === 'privacy' ? 
            `${page}-${device}` : 
            'not-found' 
        }`}>
        <Page page={page} />
      </section>
    </main>
  );
}

export default Main;
