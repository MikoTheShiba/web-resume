import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Barhead from './components/barhead/barhead';
import ReactTestPage from './pages/ReactTestPage';
import Home from './pages/Home'
import { Toolbar } from '@mui/material';


function App() {
  const [theme, setTheme] = useState('DarkMode')
  const [themeSwitch, setThemeSwitch] = useState(false);
  const handleThemeSwitch = () => {
    setThemeSwitch(prevState => !prevState);
    if (themeSwitch) {
      setTheme('DarkMode');
    } else {
      setTheme('LightMode');
    }
  }
  return (
    <div>
      <Toolbar />
      <Barhead lightToggle={handleThemeSwitch} theme={theme}/>
      <Router>
      <div className={theme}>
        <Routes>
          <Route path="/" exact element={<ReactTestPage/>} />
        </Routes>
      </div>
      </Router>
    </div>
    
  );
}

export default App;
