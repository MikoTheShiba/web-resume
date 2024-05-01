import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCdmTtldZGX38Czhpms2FJBaowfRoej3SY",
    authDomain: "shiba-web-resume.firebaseapp.com",
    projectId: "shiba-web-resume",
    storageBucket: "shiba-web-resume.appspot.com",
    messagingSenderId: "54116210926",
    appId: "1:54116210926:web:b18e0b495c3a03f6c67bff",
    measurementId: "G-FF062KZC4N"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const xhr = new XMLHttpRequest();

/*HELLO! THIS IS HOW YOU USE THE "API"*/
/*

1. How to fetch data from Firestore Database

please note that 'users' and 'shiba' refer to collections and documents respectively

useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', 'shiba');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
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


2. How to push data from Firestore Database
[section incomplete. please refer to the code below and study it or something idk]
*/

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