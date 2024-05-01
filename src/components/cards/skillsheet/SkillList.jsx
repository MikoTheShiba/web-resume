import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Stack, Typography } from '@mui/material';
import Skillbar from './Skillbar';
import {db} from '../../../api/FirebaseDatabase';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";

const SkillList = ({skills}) => {
  const [skillData, setSkillData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba', 'skillsheet', 'hardskills');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setSkillData(Object.entries(docSnap.data())
                .sort((a, b) => b[1] - a[1])
                .map(([skill, value]) => ({ skill, value })));
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
    <Card className='Cards' sx={{padding:'5px'}}>
      <Stack spacing={0.5}>
        <ThemeProvider theme={bebas}>
          <Typography variant='h4'>Skillsheet</Typography>
        </ThemeProvider>
        <ThemeProvider theme={roboto}>
          {skillData.map(i=><Skillbar skill={i['skill']} progress={i['value']}></Skillbar>)}
        </ThemeProvider>
      </Stack>
    </Card>
    
    )
}

export default SkillList;