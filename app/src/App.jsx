import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { getCurrentMode } from 'Features/modes/selectors.js';
import { store } from './store.js';
import { Online } from 'Pages/Online/Online.jsx';
import { PowerOff } from 'Pages/PowerOff/PowerOff.jsx';
import { MenuPage } from './pages/Menu/Menu.jsx';
import { LoginPage } from './pages/Login/LoginPage.jsx';


const App = () => {
  const currentMode = useSelector(getCurrentMode);

  return (
    // currentMode?.power === true ? <Online/> : <PowerOff/>
    // currentMode?.power === true ? <MenuPage/> : <PowerOff/>
    currentMode?.power === true ? <LoginPage/> : <PowerOff/>
  );
}

export const renderApp = (root) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
