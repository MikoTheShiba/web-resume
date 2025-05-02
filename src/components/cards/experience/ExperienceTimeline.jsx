import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Stack, Typography } from '@mui/material';
import {db} from '../../../api/FirebaseDatabase';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";
import ExpCard from './ExpCard';

const ExperienceTimeline = ({skills}) => {
    const [expList, setExp] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba', 'exp', 'work');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setExp(Object.entries(docSnap.data())
                .sort((a, b) => b[1][1] - a[1][1])
                .map(([code, value]) => ({ code, value })));
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
                <ThemeProvider theme={roboto}>
                    {expList.map(i=><ExpCard code={i['code']} value={i['value']}></ExpCard>)}
                </ThemeProvider>
            </Stack>
        </Card>
    )
}

export default ExperienceTimeline;