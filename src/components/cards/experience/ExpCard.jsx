import React from "react";
import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Stack, Typography } from '@mui/material';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, xhr } from '../../../api/FirebaseDatabase'
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/*data structure is as follows
[0] Start
[1] End
[2] Organization
[3] Description
[4] Important?
*/
const ExpCard = ({ code, value }) => {
    const [imgURL, setImgURL] = useState('')
      useEffect(() => {
        const getImageUrl = async () => {
          const url1 = ref(storage, `orgs/${value[2]}.png`)
          getDownloadURL(url1).then((url)=> {
            setImgURL(url);
          })
        }
        getImageUrl();
      }, []);
    const iconography = value[5] === 'E' ? <SchoolIcon /> : <WorkIcon />;
    return(
        <Accordion className='CardEntry' sx={{padding:'3px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <Grid item xs={1}>
                        {iconography}
                    </Grid>
                    <Grid item xs={2}>
                        <ThemeProvider theme={bebas}>
                        <Stack spacing={-1}>
                            <Typography sx={{textAlign: 'left'}} variant='h4'>{value[1]}</Typography>
                            <Typography sx={{textAlign: 'left'}} variant='h4'>{value[0]}</Typography>
                        </Stack>
                        </ThemeProvider>
                    </Grid>
                    <Grid item xs={2}>
                            <img src={imgURL} style={{height:'5rem', width:'5rem', userSelect:'none'}} alt={value[2]+"icon"}></img>
                    </Grid>
                    <Grid item xs={7}>
                        <Stack spacing={0.5}>
                            <ThemeProvider theme={bebas}>
                                <Typography sx={{textAlign: 'left'}} variant='h4'>{value[2]}</Typography>
                            </ThemeProvider>
                            <Typography sx={{textAlign: 'left', fontSize: '1rem'}}>{value[3]}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{textAlign: 'left'}}>{value[3]}</Typography>
            </AccordionDetails>
        </Accordion>
        
    )
}
export default ExpCard;