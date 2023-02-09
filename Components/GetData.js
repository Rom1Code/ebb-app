import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";

// Firebas configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnXOSzKFYhpdHY57eNHcduFiLQ1WrEYIw",
    authDomain: "ebb-app-32a47.firebaseapp.com",
    databaseURL: "https://ebb-app-32a47-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ebb-app-32a47",
    storageBucket: "ebb-app-32a47.appspot.com",
    messagingSenderId: "1026847269649",
    appId: "1:1026847269649:web:41e1e452da8c81c9c662b0",
    measurementId: "G-2DR3Z3FEVN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);  // voir ce que ca renvoi, avec et sans le app
  export const dbRef = ref(getDatabase()); // voir ce que ca renvoi
