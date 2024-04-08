import {
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/sidebar';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { bebas } from "../../themes";
import { mainblue } from '../../colors'

const navs = ['Home', 'A Site', 'B Site', 'C Site']

const Barhead = () => {
    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const handleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    }
    return (
        <Box sx={{ display: 'flex' }}>
        <AppBar component='nav' sx={{backgroundColor:{mainblue}}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawer}
                >
                    <MenuIcon/>
                </IconButton>
                <ThemeProvider theme={bebas}>
                    <Typography variant='h4' sx={{userSelect:'none'}}>WEB-RESUME</Typography>
                </ThemeProvider>
            </Toolbar>
        </AppBar>
            <nav>
                <Drawer
                    open={drawerOpen}
                    onClose={handleDrawer}
                    variant="temporary"
                >
                    <Sidebar
                        toggle={handleDrawer}
                    />
                </Drawer>
            </nav>
        </Box>
        
        
    )
}

export default Barhead;