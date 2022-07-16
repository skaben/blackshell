import React from 'react';
import { Main } from './pages/Main/Main';
import { ConsolePage } from './pages/Console/ConsolePage';

const App = () => {
  return (
    <>
      {/* <ConsolePage/> */}
      <Main/>
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
