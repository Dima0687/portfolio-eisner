import { Routes, Route } from 'react-router-dom';

// css
import './app.css';

// components
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Page from '../page/Page';


// pages
import Welcome from '../../pages/Welcome';

// context
import { DeviceContextProvider } from '../../context/DeviceContext';
import { LangContextProvider } from '../../context/LangContext';

// data
/* import portfolio from '../../data/portfolioData' */

const App = () => {
  /* const { identifiers:pages } = portfolio; */

  return ( 
    <div id='app'>
      <LangContextProvider>
        <DeviceContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/:page' element={
              <Main>
                <Page />
              </Main>
            }/>
            {/* {
              Object.keys(pages).map( pageName => {
                const upperCasePageName = pageName[0].toUpperCase() + pageName.slice(1);
                
                return <Route
                  key={pageName}
                  path={`/${pageName}`} 
                  element={
                    {upperCasePageName}
                  }
                />
              })
            } */}
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