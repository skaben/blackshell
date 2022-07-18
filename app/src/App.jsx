import React from 'react';
import { Main } from './pages/Main/Main';
import { PowerOff } from 'Components/states/PowerOff/PowerOff.jsx';
import { useSelector, Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  const modes = useSelector(state => state.modes);
  const config = useSelector(state => state.config);

  const currentMode = modes[config.current] || modes[config.default];

  return (
    currentMode.power ? <Main/> : <PowerOff/>
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
