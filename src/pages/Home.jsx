import React from 'react';
import { Grid, Toolbar, Typography} from '@mui/material';
import MainProfileCard from '../components/cards/MainProfileCard';

const Home = () => {
    return (
        <div>
            <Toolbar/>
            <Grid container spacing={2} className="gridContainer">
                <Grid item xs={12} md={6}>
                    <MainProfileCard/>
                </Grid>
            </Grid>
            <Typography>HI</Typography>
            <Typography>HI</Typography>
            <Typography>HI</Typography>
            <Typography>HI</Typography>
            <Typography>HI</Typography>
        </div>
    )
}

export default Home;