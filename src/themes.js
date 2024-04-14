import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, Router } from 'react-router-dom';
import { RouteData } from './RouteData';
const bebas = createTheme({
    typography:{
        fontFamily: [
            'Bebas Neue'
        ].join(','),
    },
})
const mplusone = createTheme({
    typography:{
        fontFamily: [
            'M PLUS 1 Code, monospace',
        ].join(','),
    },
})
const seymour = createTheme({
    typography:{
        fontFamily: [
            'Seymour One'
        ].join(','),
    },
})
const roboto = createTheme({
    typography:{
        fontFamily: [
            'Roboto Mono'
        ].join(','),
    },
})


export {bebas, seymour, roboto};