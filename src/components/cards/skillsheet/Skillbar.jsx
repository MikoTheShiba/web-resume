import React from "react";
import { Card, Grid, LinearProgress, Typography } from '@mui/material';

const Skillbar = ({ skill, progress }) => {
  return (
    <Card className='CardEntry' sx={{padding:'5px'}}>
      <Grid container display="flex" justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Typography sx={{textAlign: 'right'}}>{skill}</Typography>
        </Grid>
        <Grid item xs={1}>
          <img src='https://firebasestorage.googleapis.com/v0/b/shiba-web-resume.appspot.com/o/skillicons%2FFirebase.png?alt=media&token=6b1ceeb4-5622-4e07-8ae5-a5cae81e2719' style={{height:'1rem', width:'1rem'}}></img>
        </Grid>
        <Grid item xs={8} >
          <LinearProgress variant="determinate" value={progress} sx={{height:10, borderRadius:5}}/>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Skillbar;