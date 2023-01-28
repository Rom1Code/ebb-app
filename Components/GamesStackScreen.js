import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import GameStatsScreen from './GameStatsScreen';
import GamesScreen from './GamesScreen';

const Stack = createStackNavigator();

export default function GamesStackScreen () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Matchs" component={GamesScreen} options={{
              headerTintColor:'#00A400',
              headerShown:false,
              tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={size} />
          ),
        }}/>             
            <Stack.Screen name="Stats Match" component={GameStatsScreen} options={{
              headerTintColor:'#00A400',
              headerShown:true,
            }}/>             
        </Stack.Navigator>
    );
};

