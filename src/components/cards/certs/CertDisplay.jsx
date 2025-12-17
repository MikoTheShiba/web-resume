import React from "react";
import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, Grid, Stack, Typography } from '@mui/material';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, xhr } from '../../../api/FirebaseDatabase'
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";

/*Data Structure
[0] name
[1] description
[2] date
[3] prio
[4] file code
*/

const CertDisplay = ({code, value}) => {
    const [imgURL, setImgURL] = useState('')
          useEffect(() => {
            const getImageUrl = async () => {
              const url1 = ref(storage, `certs/${value[4]}.png`)
              getDownloadURL(url1).then((url)=> {
                setImgURL(url);
              })
            }
            getImageUrl();
          }, []);
    return(
        <Card className='CertDisplay' sx={{padding:'3px'}}>
            <Stack>
            <ThemeProvider theme={bebas}>
                <Typography sx={{textAlign: 'center'}} variant='h4'>{value[0]}</Typography>
            </ThemeProvider>
            <Grid container>
                <Grid item xs={12} md={7}><img src={imgURL} style={{height:'95%', width:'95%', userSelect:'none', padding:'0.5rem'}} alt={value[2]+"icon"}></img></Grid>
                <Grid item xs={12} md={5}>
                    <Stack>
                        <Typography variant='h5'>{value[1]}</Typography>
                        <Typography variant='h6'>{value[2]}</Typography>
                    </Stack>
                </Grid>
            </Grid>
            </Stack>
        </Card>
    )
}

export default CertDisplay;