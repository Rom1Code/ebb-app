import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Navigation from './Components/Navigation';
import React from "react";
import database from '@react-native-firebase/database';

//database()
  //.ref('https://ebb-app-32a47-default-rtdb.europe-west1.firebasedatabase.app/')
  //.once('value')
  //.then(snapshot => {
    //console.log('User data: ', snapshot.val());
  //});

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#0bb049'}/>
      <Navigation />
    </NavigationContainer>
  );
}

