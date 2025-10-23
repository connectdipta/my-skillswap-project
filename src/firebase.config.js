// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX2JuEg34gLGXakBHTcQY6933IG1WHY8k",
  authDomain: "my-skillswap-83520.firebaseapp.com",
  projectId: "my-skillswap-83520",
  storageBucket: "my-skillswap-83520.appspot.com",
  messagingSenderId: "732586643791",
  appId: "1:732586643791:web:3185c23edd7de4241eb53a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;