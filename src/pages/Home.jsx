import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Grid, Toolbar, Typography} from '@mui/material';
import MainProfileCard from '../components/cards/MainProfileCard';
import { collection, doc, where, setDoc, addDoc, getDocs, getDoc} from "firebase/firestore";
import {db} from '../api/FirebaseDatabase'

const Home = () => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log(docSnap.data())
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
            <Grid container spacing={2} style={{ marginRight: 4, marginLeft:2, marginTop:2}}>
                <Grid item xs={12} md={6}>
                    <Button>Test Button</Button>
                    <MainProfileCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;


/*PUSH EXAMPLE*/
/*
const firebasetest = async (e) => {
        e.preventDefault();  
        try {
            const docRef = await addDoc(collection(db, "todos"), {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
*/