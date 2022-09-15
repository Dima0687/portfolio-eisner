import { Routes, Route, Navigate } from 'react-router-dom';

// css
import './app.css';

// components
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

// pages
import NotFound from '../../pages/not-found/NotFound';

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
            <Route path='/not-found' element={
              <main className="main">
                <section id='not-found'>
                  <NotFound/>
                </section>
              </main>
            }/>
          </Routes>
          <Footer />
        </DeviceContextProvider>
      </LangContextProvider>
    </div>
  );
}
 
export default App;