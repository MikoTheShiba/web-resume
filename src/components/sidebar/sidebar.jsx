import { useState } from "react";
import { ThemeProvider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import {
    
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Paper,
    Toolbar,
    Typography,
    List,
} from "@mui/material";
import { RouteData } from "../../RouteData";
import { bebas } from "../../themes";
import { mainblue } from '../../colors'


const Sidebar = ({toggle}) => {
    const navigate = useNavigate();
    return(
        <Paper onClick={toggle}>
            <Card sx={{height:'100px', backgroundColor:'#3d9eff'}}>
                <CardContent sx={{ alignItems:'center', justifyContent:'center'}}>
                    <ThemeProvider theme={bebas}>
                        <Typography variant='h3' gutterBottom sx={{userSelect:'none', marginBottom:0, marginTop:0}}>WEB RESUME</Typography>
                        <Typography variant='h6' gutterBottom sx={{userSelect:'none', marginTop:-1.5}}>BY MIKOTHESHIBA</Typography>
                    </ThemeProvider>
                </CardContent>
            </Card>
            <Divider/>
            <List>
                {
                    RouteData.map((sdata)=>(
                        <ListItem key={sdata.title} disablePadding onClick={()=>{navigate(sdata.path)}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {sdata.icon}
                                </ListItemIcon>
                                <ListItemText primary = {sdata.title}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    )
}

export default Sidebar;