import { Route, Routes } from 'react-router-dom';
import { ContextWrapper } from './context/ContextWrapper';
import Home from './pages/home';

function App() {
  return (
    <ContextWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Home />} />
      </Routes>
    </ContextWrapper>
  );
}

export default App;
