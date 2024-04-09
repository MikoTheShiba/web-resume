import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import Barhead from '../components/barhead/barhead';
import {Toolbar, Typography} from '@mui/material';


const WorkExperience = () => {
    return (
        <div>
            <Toolbar/>
            <Typography>WorkExp</Typography>
            <Typography>HI</Typography>
            <Typography>HI</Typography>
            <Typography>HI</Typography>
            <Typography>HI</Typography>
        </div>
    )
}

export default WorkExperience;