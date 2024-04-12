import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

