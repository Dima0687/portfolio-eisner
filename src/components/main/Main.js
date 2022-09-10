// hooks
import { useParams } from 'react-router-dom';

// css
import './main.css'


function Main({ children }) {
  const { page:sectionName } = useParams();

  return (
    <main className="main">
      <section id={sectionName}>
        { children }
      </section>
    </main>
  );
}

export default Main;
