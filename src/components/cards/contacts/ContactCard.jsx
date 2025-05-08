import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Stack, Typography } from '@mui/material';
import { db } from '../../../api/FirebaseDatabase';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";

const ContactCard = () => {
    const [contactList, setContacts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba', 'cnc', 'ContactInfo');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setContacts(Object.entries(docSnap.data())
                .sort((a, b) => b[1] - a[1])
                .map(([contact, value]) => ({ contact, value })));
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
                    <Typography variant='h4'>Contact Information</Typography>
                </ThemeProvider>
                <ThemeProvider theme={roboto}>
                    {contactList.map(i => <Typography>{i['contact']} {i['value']}</Typography>)}
                </ThemeProvider>
            </Stack>
        </Card>
    )
}

export default ContactCard;