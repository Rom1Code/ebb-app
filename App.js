import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Navigation from './Components/Navigation/Navigation/';
import React from "react";

export default function App() {

   return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#0bb049'}/>
      <Navigation />
    </NavigationContainer>
  );
}

