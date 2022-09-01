// hooks
import { useContext } from 'react';

// css
import './main.css'

// context 
import { LangContext } from '../../context/LangContext';

// components
import Section from '../section/Section';

function Main() {
  const { filteredProfile: profile } = useContext(LangContext);
  return (
    <main className="main">
      {
        profile.identifiers.map( id => <Section 
          key={id}
          id={id}
          />
        )
      }
    </main>
  );
}

export default Main;
