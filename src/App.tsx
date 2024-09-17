import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kanbas from './Kanbas';
import Labs from './Labs';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Link to="/Labs">Labs</Link> | <Link to="/Labs/Lab1">Lab1</Link> | 
        <Link to="/Labs/Lab2">Lab2</Link> | <Link to="/Labs/Lab3">Lab3</Link> |
        <Link to="/Kanbas">Kanbas</Link>
        <Routes>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
