import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Navigation from './Components/Navigation';
import React from "react";


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Navigation />
    </NavigationContainer>
  );
}

