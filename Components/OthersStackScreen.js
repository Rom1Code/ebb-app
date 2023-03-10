import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import OthersScreen from './OthersScreen';
import TrainingPlanningScreen from './TrainingPlanningScreen';
import CoachScreen from './CoachScreen';
import LicenceScreen from './LicenceScreen';
import StatsTeamsScreen from './StatsTeamsScreen';
import StatsGamesScreen from './StatsGamesScreen';
import GameStatsScreen from './GameStatsScreen';
import GameRecapScreen from './GameRecapScreen';

const Stack = createStackNavigator();

// Used in order to navigate between TeamsScreen, TeamDataScreen and TeamDataScreen
export default function OthersStackScreen () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Autres" component={OthersScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:false,
          }}/>             
          <Stack.Screen name="Créneaux entrainements" component={TrainingPlanningScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>
          <Stack.Screen name="Espace coach" component={CoachScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>
          <Stack.Screen name="Licences" component={LicenceScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>
          <Stack.Screen name="Equipes" component={StatsTeamsScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>
          <Stack.Screen name="Stats équipes" component={StatsGamesScreen} options={{
            headerTintColor:'#0bb049',
            headerShown:true,
          }}/>
            <Stack.Screen name="Stats Match" component={GameStatsScreen} options={{
              headerTintColor:'#0bb049',
              headerShown:true,
            }}/>     
            <Stack.Screen name="Recap Match" component={GameRecapScreen} options={{
              headerTintColor:'#0bb049',
              headerShown:true,
            }}/>             
        </Stack.Navigator>
    );
};

