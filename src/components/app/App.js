import { Routes, Route } from 'react-router-dom';

// css
import './app.css';

// components
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

const App = () => {
  return ( 
    <div id='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
      <Footer />
    </div>
  );
}
 
export default App;