import React from "react";
import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, Grid, Stack, Typography } from '@mui/material';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, xhr } from '../../../api/FirebaseDatabase'
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";

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
        <Card>

        </Card>
    )
}

export default CertDisplay;