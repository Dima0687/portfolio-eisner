import { Routes, Route, Navigate } from 'react-router-dom';

// css
import './app.css';

// components
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

// context
import { DeviceContextProvider } from '../../context/DeviceContext';
import { LangContextProvider } from '../../context/LangContext';

const App = () => {
  // window.addEventListener('contextmenu', e => e.preventDefault());
  return ( 
    <div id='app'>
      <LangContextProvider>
        <DeviceContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to="/welcome" replace />}/>
            <Route path='/:page' element={<Main />}/>
          </Routes>
          <Footer />
        </DeviceContextProvider>
      </LangContextProvider>
    </div>
  );
}
 
export default App;