import React from 'react';
import { Main } from './pages/Main/Main';
import { Console } from './pages/Console/Console';

const App = () => {
  return (
    <>
      <Console/>
      {/* <Main/> */}
    </>
  );
}

export const renderApp = (root) => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
