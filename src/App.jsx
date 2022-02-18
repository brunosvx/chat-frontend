import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chat from './pages/Chat';
import Settings from './pages/Settings';

import './styles/Global.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes> 
    </BrowserRouter>
    )
}

export default App
