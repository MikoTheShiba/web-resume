import React from "react";
import { useState, useEffect } from 'react';
import { Card, Grid, LinearProgress, Tooltip, Typography } from '@mui/material';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, xhr } from '../../../api/FirebaseDatabase'

const ExpCard = ({ code, value }) => {
    return(
        <Card className='CardEntry' sx={{padding:'5px'}}>
            <Grid container display="flex" justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    <Typography sx={{textAlign: 'right', marginRight:'10px'}}>{value[2]}</Typography>
                </Grid>
            </Grid>
        </Card>
        
    )
}
export default ExpCard;