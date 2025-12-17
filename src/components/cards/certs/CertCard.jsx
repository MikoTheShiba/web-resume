import React from "react"
import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Stack, Typography, Card } from '@mui/material';
import {doc, getDoc} from "firebase/firestore";
import {db} from '../../../api/FirebaseDatabase';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, xhr } from '../../../api/FirebaseDatabase'
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";
import CertDisplay from "./CertDisplay";
import MinorCertDisplay from "./MinorCertDisplay";

const CertCard = ({}) => {
    const [expList, setExp] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                const docRef = doc(db, 'users', 'shiba', 'exp', 'certs');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setExp(Object.entries(docSnap.data())
                    .sort((a, b) => b[1][3] - a[1][3])
                    .map(([code, value]) => ({ code, value })));
                } else {
                    console.log('(not) real')
                }
            }
            fetchData();
            console.log(expList);
            return () => {
                // Cleanup function if needed
            };
        }, [])
    return(
        <Card className='Cards' sx={{padding: '5px'}}>
            <Stack spacing={0.5}>
                <ThemeProvider theme={bebas}>
                    <Typography variant='h4'>Certifications</Typography>
                    <Typography variant='h6'>and other documents</Typography>
                </ThemeProvider>
                <ThemeProvider theme={roboto}>
                    <Typography>
                        {expList.map(i =>
                    i['value'][3] === false ? (
                        <MinorCertDisplay code={i['code']} value={i['value']} />
                    ) : (
                        <CertDisplay code={i['code']} value={i['value']} />
                    )
                )}
                    </Typography>
                </ThemeProvider>
            </Stack>
        </Card>
    )
}
export default CertCard;