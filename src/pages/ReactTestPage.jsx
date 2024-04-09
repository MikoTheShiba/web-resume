import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { Typography } from '@mui/material'


const ReactTestPage = () => {
    return (
        <div className="App">
            <header className="App-Header">
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

            </header>
        </div>
    )
}

export default ReactTestPage;