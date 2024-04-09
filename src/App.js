import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import Sidebar from './components/sidebar/sidebar';
import Barhead from './components/barhead/barhead';
import Home from './pages/Home';
import ReactTestPage from './pages/ReactTestPage';
import Skillsheet from './pages/Skillsheet';
import WorkExperience from './pages/WorkExp';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import { RouteData } from './RouteData';


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
      <Router>
        <Toolbar />
        <Barhead lightToggle={handleThemeSwitch} theme={theme}/>
        <div className={theme}>
          <Routes>
            {RouteData.map((sdata)=>(<Route path={sdata.path} exact element={sdata.page}/>))}
          </Routes>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
