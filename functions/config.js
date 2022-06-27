// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBza7nhK_eXRGsJ1TeIpQMDFFGjnSNBuTE",
    authDomain: "gt-dev-a3fd7.firebaseapp.com",
    projectId: "gt-dev-a3fd7",
    storageBucket: "gt-dev-a3fd7.appspot.com",
    messagingSenderId: "493796581970",
    appId: "1:493796581970:web:ed53ab8564df4341a1b58b",
    measurementId: "G-M2G7Q1L6BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
export const firestore = getFirestore(app);

