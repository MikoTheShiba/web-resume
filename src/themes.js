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


export {bebas};