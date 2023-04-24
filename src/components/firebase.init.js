// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAti4qrfUVQbdgoAhd7IuaWCMvq853PH5U",
    authDomain: "property-listing-2023.firebaseapp.com",
    projectId: "property-listing-2023",
    storageBucket: "property-listing-2023.appspot.com",
    messagingSenderId: "71098711436",
    appId: "1:71098711436:web:4be7a02eedaeeebf902aa9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;