import React from 'react';
import { Main } from './pages/Main/Main';
import { Offline } from './pages/Offline/Offline'
import { useSelector, Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  const modes = useSelector(state => state.modes);
  const config = useSelector(state => state.config);

  const currentMode = modes[config.current] !== true || modes[config.default];

  return (
    currentMode.power ? <Main/> : <Offline/>
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
