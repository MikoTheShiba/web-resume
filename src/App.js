import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Barhead from './components/barhead/barhead';
import ReactTestPage from './pages/ReactTestPage';
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<ReactTestPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
