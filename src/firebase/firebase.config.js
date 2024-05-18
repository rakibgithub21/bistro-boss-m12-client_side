// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZhj3gHkO1A1UxfDDlOh37hPXdpp2754o",
    authDomain: "bistro-boss-m12-1c1bd.firebaseapp.com",
    projectId: "bistro-boss-m12-1c1bd",
    storageBucket: "bistro-boss-m12-1c1bd.appspot.com",
    messagingSenderId: "1093358318733",
    appId: "1:1093358318733:web:964b01eb1b30a5612a1ec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;