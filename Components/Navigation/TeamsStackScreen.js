import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TeamDataScreen from '../Screens/TeamDataScreen';
import TeamsScreen from '../Screens/TeamsScreen';
import GameStatsScreen from '../Screens/GameStatsScreen';
import GameRecapScreen from '../Screens/GameRecapScreen';

const Stack = createStackNavigator();

// Used in order to navigate between TeamsScreen, TeamDataScreen and TeamDataScreen
export default function TeamsStackScreen () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Equipes" component={TeamsScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="basketball-ball" color={color} size={size} />
            ),
          }}/>             
          <Stack.Screen name="Infos equipes" component={TeamDataScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>
          {/*<Stack.Screen name="Stats Match" component={GameStatsScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>*/}
          <Stack.Screen name="Résumé Match" component={GameRecapScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>             
        </Stack.Navigator>
    );
};

