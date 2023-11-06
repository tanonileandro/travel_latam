// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-GNM5pvnhOsNYSQJbU-5ZTAUPZQk3LNY",
  authDomain: "focus-1acf2.firebaseapp.com",
  projectId: "focus-1acf2",
  storageBucket: "focus-1acf2.appspot.com",
  messagingSenderId: "134446240729",
  appId: "1:134446240729:web:552fe699aa394dff123fc8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export default firebaseApp;