import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WriteAndViewEmails from './pages/WriteAndViewEmails';
import NotFound from './pages/NotFound';
import SendEmails from './pages/SendEmails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path='/' element={<WriteAndViewEmails />}/>
            <Route path='/send_email/:id' element={<SendEmails/>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          
        </header>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
