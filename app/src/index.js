import { createRoot } from 'react-dom/client';
import 'Assets/styles/main.scss';
import { renderApp } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

renderApp(root);  // 'cuz eslint is bullying me :'(
