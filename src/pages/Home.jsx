import React from 'react';
import { Grid, Toolbar, Typography} from '@mui/material';
import MainProfileCard from '../components/cards/MainProfileCard';

const Home = () => {
    return (
        <div>
            <Grid container spacing={2} style={{ marginRight: 4, marginLeft:2, marginTop:2}}>
                <Grid item xs={12} md={6}>
                    <MainProfileCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;