import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Stack, Typography } from '@mui/material';
import {db} from '../../../api/FirebaseDatabase';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";
import ExpCard from './ExpCard';
import MinorExpCard from './MinorExpCard';

const ExperienceTimeline = () => {
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
            <Stack spacing={0.5}>
                <ThemeProvider theme={bebas}>
                    <Typography variant='h4'>Experience Timeline</Typography>
                </ThemeProvider>
                <ThemeProvider theme={roboto}>
                {expList.map(i =>
                    i['value'][4] === false ? (
                        <MinorExpCard code={i['code']} value={i['value']} />
                    ) : (
                        <ExpCard code={i['code']} value={i['value']} />
                    )
                )}
                </ThemeProvider>
            </Stack>
        </Card>
    )
}


//just in case line 36 explodes: {expList.map(i=><ExpCard code={i['code']} value={i['value']}></ExpCard>)}

export default ExperienceTimeline;