// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDeY5YjInQstKIwmo1Rsj8fx70uE5OC6Q",
  authDomain: "studdybuddy-fe152.firebaseapp.com",
  projectId: "studdybuddy-fe152",
  storageBucket: "studdybuddy-fe152.firebasestorage.app",
  messagingSenderId: "546817026918",
  appId: "1:546817026918:web:c5d366d93140349123f6a7",
  measurementId: "G-7K1LSD9TBR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

console.log("Firebase initialized", app);



