import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './assest/tailwind/main.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  // <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  // </Provider>
);
