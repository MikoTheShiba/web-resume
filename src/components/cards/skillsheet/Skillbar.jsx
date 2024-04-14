import React from "react";
import { Box, Card, Typography } from '@mui/material';

const Skillbar = ({ skill, progress }) => {
  return (
    <Card className='CardEntry'>
      <Grid container>
        <Grid item xs={4}>
          <Typography>`${skill}`</Typography>
        </Grid>
        <Grid item xs={8}>
          <Stack>
            <Typography variant='h6'>`${skill}</Typography>
            <LinearProgress variant="determinate" value={progress} />
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}