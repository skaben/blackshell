import React from 'react';
import { Main } from './pages/Main/Main';

const App = () => {
  return (
    <>
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
