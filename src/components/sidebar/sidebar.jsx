import { useState } from "react";
import {
    Typography, 
    Button, 
    Drawer,
    Toolbar,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box
} from "@mui/material";

const routestest = ['Home', 'Site A', 'Site B', 'Site C']

const Sidebar = ({toggle}) => {
    return(
        <Box onClick={toggle}>
            <Toolbar/>
            <Divider/>
            <Typography>SIDEBAR</Typography>
            <List>
                {
                    routestest.map((text)=>(
                        <ListItem>
                            <ListItemText primary = {text}></ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default Sidebar;