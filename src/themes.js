import { createTheme } from '@mui/material';
const bebas = createTheme({
    typography:{
        fontFamily: [
            'Bebas Neue'
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

/*}
const mplusone = createTheme({
    typography:{
        fontFamily: [
            'M PLUS 1 Code, monospace',
        ].join(','),
    },
})*/