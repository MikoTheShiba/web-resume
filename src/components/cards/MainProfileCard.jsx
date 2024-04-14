import React from "react";
import { useState } from "react";
import { Card, Grid, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../themes";

const MainProfileCard = ({data}) => {
    return(
        <Card sx={{height:'100%'}} className="Cards">
            <Stack>
                <Grid container spacing={'10px'} sx={{padding:'10px'}}>
                    <Grid item>
                        <Card xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', borderRadius: '16px'}}>
                            <img src={data.pic} style={{height: '11rem', width: '11rem'}}/>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Stack xs={12} md={6} spacing={1}>
                            <Card xs={12} md={6} className='CardEntry' sx={{borderRadius: '16px'}}>
                                <ThemeProvider theme={bebas}>
                                    <Typography variant='h1'>{`${data.firstName} ${data.lastName}`}</Typography>
                                </ThemeProvider>
                            </Card>
                            <Card xs={12} md={6} className='CardEntry' sx={{borderRadius: '16px'}}>
                                <ThemeProvider theme={bebas}>
                                    <Typography variant='h3'>{`${data.role}`}</Typography>
                                </ThemeProvider>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={'10px'} sx={{padding:'10px', marginBottom:'20px'}}>
                    <Grid item xs={12} md={12} >
                        <Card fullWidth className='CardEntry' sx={{minWidth:'100%'}}>
                            <ThemeProvider theme={roboto}>
                                <Typography variant='h5'>About Me</Typography>
                                <Typography sx={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{ __html: `${data.about}` }}/>
                            </ThemeProvider>
                        </Card>
                    </Grid>
                </Grid>
            </Stack>
            
        </Card>
    )
}

export default MainProfileCard;