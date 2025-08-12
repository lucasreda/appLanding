import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectPage from './components/RedirectPage';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RedirectPage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/detalles" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
