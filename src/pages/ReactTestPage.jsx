import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { useState } from 'react';
import { Switch, Typography } from '@mui/material'
import Sidebar from '../components/sidebar/sidebar';
import Barhead from '../components/barhead/barhead';


const ReactTestPage = () => {
    const [theme, setTheme] = useState('DarkMode')
    const [themeSwitch, setThemeSwitch] = useState(false);
    const handleThemeSwitch = () => {
        setThemeSwitch(prevState => !prevState);
        if(themeSwitch){
            setTheme('DarkMode');
        } else {
            setTheme('LightMode');
        }
    }
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React or else
                </a>
                <Typography>Dark Mode</Typography>
                <Switch checked={themeSwitch} onChange={handleThemeSwitch}/>

            </header>
        </div>
    )
}

export default ReactTestPage;