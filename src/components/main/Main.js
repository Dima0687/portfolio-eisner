// css
import './main.css'

// data
import { identifiers } from '../../data/identifiers';

// components
import Section from '../section/Section';

function Main() {
  return (
    <main className="main">
      {
        identifiers.map( id => <Section 
          key={id}
          id={id}
          />
        )
      }
    </main>
  );
}

export default Main;
