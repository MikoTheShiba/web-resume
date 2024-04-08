import { useState } from "react";
import { ThemeProvider } from '@mui/material'
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
//MUI ICONS
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import { bebas } from "../../themes";
import { mainblue } from '../../colors'

const routestest = ['About', 'Skillsheet', 'Work Experience', 'Education', 'Certifications', 'Portfolio']

const RouteIcons = ({label}) => {
    switch(label){
        case 'About': return(<AccountCircleOutlinedIcon/>); break;
        case 'Skillsheet': return(<LeaderboardOutlinedIcon/>); break;
        case 'Work Experience': return(<WorkOutlineOutlinedIcon/>); break;
        case 'Education': return(<SchoolOutlinedIcon/>); break;
        case 'Certifications': return(<WorkspacePremiumOutlinedIcon/>); break;
        case 'Portfolio': return(<PermMediaOutlinedIcon/>); break;
        case 'Achievements': return(<EmojiEventsOutlinedIcon/>); break;
        default: return(<FormatAlignJustifyOutlinedIcon/>); break;
    }
}

const Sidebar = ({toggle}) => {
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
                    routestest.map((text)=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <RouteIcons label={text}/>
                                </ListItemIcon>
                                <ListItemText primary = {text}></ListItemText>
                            </ListItemButton>
                            
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    )
}

export default Sidebar;