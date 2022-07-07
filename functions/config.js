// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdkhhvLRUwT1T0ONvVGisXo0dN5nPxSNw",
    authDomain: "api-call-prac.firebaseapp.com",
    projectId: "api-call-prac",
    storageBucket: "api-call-prac.appspot.com",
    messagingSenderId: "892495651295",
    appId: "1:892495651295:web:e829ed7591edf4da8da46a",
    measurementId: "G-76FV77Q6H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
export const firestore = getFirestore(app);

