import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Login from './routes/Login';
import MainPage from './routes/MainPage';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/Main" element={<MainPage/>}/>
          </Routes>
      </Router>
    </>   
  );
}

export default App;