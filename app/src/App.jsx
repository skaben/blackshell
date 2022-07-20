import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { store } from './store';
import { Online } from 'Pages/Online/Online.jsx';
import { PowerOff } from 'Pages/PowerOff/PowerOff.jsx';


const App = () => {
  const modes = useSelector(state => state.modes);
  const config = useSelector(state => state.config);

  const currentMode = modes[config.current] || modes[config.default];

  return (
    currentMode?.power === true ? <Online/> : <PowerOff/>
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
