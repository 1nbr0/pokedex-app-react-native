// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //à rajouter
import { getFirestore } from "firebase/firestore"; //à rajouter
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsZpuK0ZxHgGi1sZGl4z7a-9VEBjOykzE",
  authDomain: "pokedex-app-1bd6c.firebaseapp.com",
  projectId: "pokedex-app-1bd6c",
  storageBucket: "pokedex-app-1bd6c.appspot.com",
  messagingSenderId: "23375566974",
  appId: "1:23375566974:web:c2aabff24dd9b7880a602f",
  measurementId: "G-TMNCHN8179",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//à rajouter
export const auth = getAuth(app);
export const db = getFirestore(app);
