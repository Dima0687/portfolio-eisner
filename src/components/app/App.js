import { Routes, Route } from 'react-router-dom';

// css
import './app.css';

// components
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

// context
import { DeviceContextProvider } from '../../context/DeviceContext';

const App = () => {
  return ( 
    <div id='app'>
      <DeviceContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
        </Routes>
      </DeviceContextProvider>
      <Footer />
    </div>
  );
}
 
export default App;