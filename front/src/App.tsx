import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Login from './routes/Login';
import MainPage from './routes/MainPage';
import NewPages from './routes/NewPages'
import StoredPages from './routes/StoredPages'
function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/Main" element={<MainPage/>}/>
              <Route path="/NewPages" element={<NewPages/>}/>
              <Route path="/StoredPages" element={<StoredPages/>}/>
          </Routes>
      </Router>
    </>   
  );
}

export default App;