import React from "react";
import { useState, useEffect } from 'react';
import { Card, Grid, LinearProgress, Tooltip, Typography } from '@mui/material';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, xhr } from '../../../api/FirebaseDatabase'

const Skillbar = ({ skill, progress }) => {
  const [imgURL, setImgURL] = useState('')
  useEffect(() => {
    const getImageUrl = async () => {
      const url1 = ref(storage, `skillicons/${skill}.png`)
      getDownloadURL(url1).then((url)=> {
        setImgURL(url);
      })
    }
    getImageUrl();
  }, []);
  return (
    <Card className='CardEntry' sx={{padding:'5px'}}>
      <Grid container display="flex" justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Typography sx={{textAlign: 'right', marginRight:'10px'}}>{skill}</Typography>
        </Grid>
        <Grid item xs={1}>
          <img src={imgURL} style={{height:'1.5rem', width:'1.5rem', userSelect:'none'}} alt={skill+"icon"}></img>
        </Grid>
        <Grid item xs={8} >
          <Tooltip title ={progress} placement='top' arrow>
            <LinearProgress variant="determinate" value={progress} sx={{height:'1.5rem', borderRadius:5}}/>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Skillbar;