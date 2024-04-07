import { createTheme, ThemeProvider } from '@mui/material';
const bebas = createTheme({
    typography:{
        fontFamily: [
            'Bebas Neue'
        ].join(','),
    },
})

export {bebas};