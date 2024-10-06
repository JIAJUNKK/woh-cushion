// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRh1fJpl32Ds39ieSJz0-hcbqdZRFwUi8",
  authDomain: "woh-cushion.firebaseapp.com",
  projectId: "woh-cushion",
  storageBucket: "woh-cushion.appspot.com",
  messagingSenderId: "660955803705",
  appId: "1:660955803705:web:d159c0bc46d8cd788c9de8",
  measurementId: "G-4K972MSPW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export {storage, db};
