// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
     apiKey: 'AIzaSyA3BzFmvR6wHQYpRmJuc4ldOQY3WNmIwWs',
    authDomain: 'crypto-base-90ebf.firebaseapp.com',
     projectId: ' crypto-base-90ebf',
     storageBucket: 'crypto-base-90ebf.appspot.com',
     messagingSenderId: '195082565348',
    appId: '1:195082565348:web:3680666828f4a430b65ef1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;