import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chat from './pages/Chat';
import Settings from './pages/Settings';

import { MessageContextProvider } from './contexts/Messages';

import './styles/Global.scss';

function App() {

  return (
    <BrowserRouter>
      <MessageContextProvider>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes> 
      </MessageContextProvider>
    </BrowserRouter>
    )
}

export default App
