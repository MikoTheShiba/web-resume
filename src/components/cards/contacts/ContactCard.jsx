import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Stack, Typography } from '@mui/material';
import { db } from '../../../api/FirebaseDatabase';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";
import ContactItem from './ContactItem';

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
    const ceptions = ['mail', 'address'];
    const phoneceptions = (i) => {
        if (i['contact'].includes('phone')){
            return(<ContactItem contact={i['contact']} detail={i['value']}/>)
        }
    }
    const inceptions = (i) => {
        if (ceptions.every(substring => !i['contact'].includes(substring))){
            if (!i['contact'].includes('phone')){
                return(<ContactItem contact={i['contact']} detail={i['value']}/>)
            }
        }
    }
    const exceptions = (i) => {
        if (ceptions.some(substring => i['contact'].includes(substring))){
                return(<ContactItem contact={i['contact']} detail={i['value']}/>)
        }
    }
    return (
        <Card className='Cards' sx={{padding:'5px'}}>
            <Stack spacing={0.5}>
                <ThemeProvider theme={bebas}>
                    <Typography variant='h4'>Contact Information</Typography>
                </ThemeProvider>
                <ThemeProvider theme={roboto}>
                    {contactList.map(i => phoneceptions(i))}
                    {contactList.map(i => exceptions(i))}
                    {contactList.map(i => inceptions(i))}
                </ThemeProvider>
            </Stack>
        </Card>
    )
}

export default ContactCard;