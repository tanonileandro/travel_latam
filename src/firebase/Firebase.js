import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-GNM5pvnhOsNYSQJbU-5ZTAUPZQk3LNY",
  authDomain: "focus-1acf2.firebaseapp.com",
  projectId: "focus-1acf2",
  storageBucket: "focus-1acf2.appspot.com",
  messagingSenderId: "134446240729",
  appId: "1:134446240729:web:552fe699aa394dff123fc8"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
