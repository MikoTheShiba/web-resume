import React from 'react'
import { useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import { Card, Grid, Stack, Typography } from '@mui/material';
import { db } from '../../../api/FirebaseDatabase';
import { ref, getDownloadURL } from 'firebase/storage';
import { ThemeProvider } from '@mui/material';
import { bebas, roboto } from "../../../themes";
import { storage, xhr } from '../../../api/FirebaseDatabase'


import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';

const ContactItem = ({contact, detail}) => {
    const [imgURL, setImgURL] = useState('')
    const getImageUrl = async () => {
        const url1 = ref(storage, `contacticons/${contact}.png`)
        getDownloadURL(url1).then((url)=> {
          setImgURL(url);
        })
      }
    const doWeNeedAnIcon = (lol) =>{
        if(lol.includes('phone')){
            return(<PhoneAndroidIcon/>)
        }
        else if(lol.includes('mail')){
            return(<MailOutlineIcon/>)
        }
        else if(lol.includes('address')){
            return(<HomeIcon/>)
        }
        else{
            getImageUrl();
            return(<img src={imgURL} style={{height:'1.5rem', width:'1.5rem', userSelect:'none'}} alt={lol+"icon"}></img>)
        }
    }
    return(
        <Grid container>
            <Grid item xs={1}>
                {doWeNeedAnIcon(contact)}
            </Grid>
            <Grid item xs={11}>
                <Typography sx={{textAlign: 'left', fontSize: '0.8rem'}}>{detail}</Typography>
            </Grid>
        </Grid>
    )
}

export default ContactItem;