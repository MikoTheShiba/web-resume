import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Stack, Typography } from '@mui/material';
import Skillbar from './Skillbar';
import {db} from '../../../api/FirebaseDatabase';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";

const SkillList = ({skills}) => {
  const [skillData, setSkillData] = useState({});
  const [skillKeys, setSkillKeys] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba', 'skillsheet', 'hardskills');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setSkillData(docSnap.data());
                setSkillKeys(Object.keys(docSnap.data()));
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
    <Card className='Cards'>
      <Stack>
        <ThemeProvider theme={bebas}>
          <Typography>Skillsheet</Typography>
        </ThemeProvider>
        <ThemeProvider theme={roboto}>
          {skillKeys.map(key=><Skillbar skill={key} progress={skillData[key]}></Skillbar>)}
        </ThemeProvider>
      </Stack>
    </Card>
    
    )
}

export default SkillList;