// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC43laU7soSgigWh-nD7xkvq1zec6GzQf0",
    authDomain: "quantum-fusion-343812.firebaseapp.com",
    projectId: "quantum-fusion-343812",
    storageBucket: "quantum-fusion-343812.appspot.com",
    messagingSenderId: "813076795128",
    appId: "1:813076795128:web:8a4a192f10e947eb6c750d",
    measurementId: "G-WP4NVYRCFC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);