import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import Barhead from './components/barhead/barhead';
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
  {/*
  const location = useLocation();
  function getTitle(pathNow) {
    const obj = RouteData.find(item => item.path === pathNow);
    return obj ? obj.y : null;
  }
  useEffect(()=>{
    document.title = `${getTitle(location)} - WEBRESUME`
  })
  */}
  return (
    <div>
      <Router>
        <Toolbar sx={{backgroundColor: theme === 'DarkMode' ? '#282c34' : '#e0e0e0'}}/>
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
