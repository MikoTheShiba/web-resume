import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Stack, Typography } from '@mui/material';
import {db} from '../../../api/FirebaseDatabase';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";

const ExperienceTimeline = ({skills}) => {
    const [expList, setExp] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba', 'experience');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                //setExp(Object.entries(docSnap.data()));
                //NOTE TO SELF. RESTRUCTURE FIREBASE TO BE AN EVEN NUMBER I HATE MYSELF
                console.log(docSnap.data());
            } else {
                console.log('(not) real')
            }
        }
        fetchData();
        return () => {
            // Cleanup function if needed
        };
    }, [])
    return (
        <Card className='Cards' sx={{padding: '5px'}}>
            <Stack>
                <ThemeProvider theme={bebas}>
                    <Typography variant='h4'>Experience Timeline</Typography>
                </ThemeProvider>
            </Stack>
        </Card>
    )
}

export default ExperienceTimeline;