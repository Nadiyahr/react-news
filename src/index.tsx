import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './assest/tailwind/main.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
