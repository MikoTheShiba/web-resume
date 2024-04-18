import React from "react";
import { Card, Grid, LinearProgress, Typography } from '@mui/material';

const Skillbar = ({ skill, progress }) => {
  return (
    <Card className='CardEntry'>
      <Grid container display="flex" justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Typography>{skill}</Typography>
        </Grid>
        <Grid item xs={8} >
          <LinearProgress variant="determinate" value={progress} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default Skillbar;