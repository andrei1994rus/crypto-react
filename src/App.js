import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadTheme } from './reduxFeature/actions';

import NavigationBar from './components/NavigationBar';
import SwitchTheme from './components/SwitchTheme';
import Footer from './components/footer';

import Home from './pages/Home';
import ListCrypto from './pages/listCrypto';
import FindCrypto from './pages/FindCrypto';
import NotFound from './pages/notFound';

import StylesContent from './styledComponents/StylesContent';

const stickyTopStyle = {
  div: {
    position: 'sticky',
    top: '0px',
    zIndex: '2',
  },
};

const paddingStyle = {
  div: {
    paddingTop: '5px',
  },
};

const contentStyle = {
  div: {
    zIndex: '0',
    flex: '1 1 auto',
    paddingBottom: '25.5vh',
    marginBottom: '20.5vh',
  },
};

const contentDesktopStyle = {
  div: {
    zIndex: '0',
    flex: '1 1 auto',
    paddingBottom: '15vh',
    marginBottom: '15vh',
  },
};

const App = () => {
  const isDark = useSelector((state) => state.theme_redux.isDark);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  const [widthScreen, setWidthScreen] = useState(window.screen.width);

  useEffect(() => {
    if (localStorage.getItem('isDark')) {
      dispatch(loadTheme());
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      console.log('width:' + event.target.window.screen.width);
      setWidthScreen(event.target.window.screen.width);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="div_sticky_top" style={stickyTopStyle.div}>
          <NavigationBar />
        </div>
        <div className="div_switchTheme">
          {isLoaded && <SwitchTheme isDark={isDark ? isDark : false} />}
        </div>
        <div className="div_padding" style={paddingStyle.div}></div>
        <div
          className="div_index_content"
          style={
            widthScreen >= 1024 ? contentDesktopStyle.div : contentStyle.div
          }
        >
          <StylesContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list_crypto" element={<ListCrypto />} />
              <Route path="/find_crypto" element={<FindCrypto />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </StylesContent>
        </div>
        <div className="div_footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
