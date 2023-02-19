import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TeamDataScreen from './TeamDataScreen';
import TeamsScreen from './TeamsScreen';
import GameStatsScreen from './GameStatsScreen';
import GameRecapScreen from './GameRecapScreen';

const Stack = createStackNavigator();

// Used in order to navigate between TeamsScreen, TeamDataScreen and TeamDataScreen
export default function TeamsStackScreen () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Equipes" component={TeamsScreen} options={{
            headerTintColor:'#00A400',
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="basketball-ball" color={color} size={size} />
            ),
          }}/>             
          <Stack.Screen name="Infos equipes" component={TeamDataScreen} options={{
            headerTintColor:'#00A400',
            headerShown:true,
          }}/>
          <Stack.Screen name="Stats Match" component={GameStatsScreen} options={{
            headerTintColor:'#00A400',
            headerShown:true,
          }}/>   
          <Stack.Screen name="Recap Match" component={GameRecapScreen} options={{
            headerTintColor:'#00A400',
            headerShown:true,
          }}/>             
        </Stack.Navigator>
    );
};

