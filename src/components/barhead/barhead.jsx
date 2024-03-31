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

const navs = ['Home', 'A Site', 'B Site', 'C Site']

const Barhead = () => {
    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const handleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    }
    return (
        <Box sx={{ display: 'flex' }}>
        <AppBar component='nav'>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawer}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography>Hi</Typography>
            </Toolbar>
        </AppBar>
            <nav>
                <Drawer
                    open={drawerOpen}
                    onClose={handleDrawer}
                    variant="temporary"
                    sx={{
                    display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
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