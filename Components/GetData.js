import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";
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
  export const db = getDatabase();  
  export const dbRef = ref(getDatabase());




export const getData = async (feuille) => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
const result =  await get(child(dbRef, feuille)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
return result
}






    



