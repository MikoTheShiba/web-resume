import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Grid, Toolbar, Typography} from '@mui/material';
import MainProfileCard from '../components/cards/MainProfileCard';
import { collection, doc, where, setDoc, addDoc, getDocs, getDoc} from "firebase/firestore";
import {db} from '../api/FirebaseDatabase'

const Home = () => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserData(docSnap.data());
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
        <div>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={12} md={12}>
                    <MainProfileCard
                        data={userData}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;