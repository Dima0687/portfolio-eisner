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
  
  return ( 
    <div id='app'>
      <LangContextProvider>
        <DeviceContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to="/welcome" replace />}/>
            <Route path='/:page' element={<Main />}/>
            <Route path='*' element={<h1 style={{
              width: '100%',
              color: "black"
              }}> 404</h1>}
            />
          </Routes>
          <Footer />
        </DeviceContextProvider>
      </LangContextProvider>
    </div>
  );
}
 
export default App;