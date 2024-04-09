import React from "react";
import { useState } from "react";
import { Card, Grid, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { bebas } from "../../themes";

const MainProfileCard = () => {
    return(
        <Card sx={{height:'100%'}} className="Cards">
            <Grid container spacing={'10px'} sx={{margin:'10px', marginBottom:'20px'}}>
                <Grid item>
                    <Card xs={12} md={6}>
                        <img src="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Japanese-Shiba-Inu.jpg?itok=fbUX3r8Z" style={{height: '100px', width: '100px'}}/>
                    </Card>
                </Grid>
                <Grid item>
                    <Stack xs={12} md={6}>
                        <Card xs={12} md={6}>
                            <ThemeProvider theme={bebas}>
                                <Typography variant='h4' xs={12} md={6}>MIKO ANGELES</Typography>
                            </ThemeProvider>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    )
}

export default MainProfileCard;