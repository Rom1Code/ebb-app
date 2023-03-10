import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import GameStatsScreen from '../Screens/GameStatsScreen';
import GamesScreen from '../Screens/GamesScreen';
import GameRecapScreen from '../Screens/GameRecapScreen';

const Stack = createStackNavigator();

// Used in order to navigate between GamesScreen and GameStatsScreen
export default function GamesStackScreen () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Matchs" component={GamesScreen} options={{
              headerTintColor:'#0bb049',
              headerShown:false,
              tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={size} />
          ),
        }}/>             
            <Stack.Screen name="Stats Match" component={GameStatsScreen} options={{
              headerTintColor:'#0bb049',
              headerShown:true,
            }}/>     
            <Stack.Screen name="Résumé Match" component={GameRecapScreen} options={{
              headerTintColor:'#0bb049',
              headerShown:true,
            }}/>             
        </Stack.Navigator>
    );
};

