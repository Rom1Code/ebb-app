import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import OthersScreen from '../Screens/OthersScreen';
import TrainingPlanningScreen from '../Screens/TrainingPlanningScreen';
import CoachScreen from '../Screens/CoachScreen';
import LicenceScreen from '../Screens/LicenceScreen';
import StatsTeamsScreen from '../Screens/StatsTeamsScreen';
import GameStatsPDFScreen from '../Screens/GameStatsPDFScreen';
import GameRecapScreen from '../Screens/GameRecapScreen';

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
            <Stack.Screen name="Stats Match" component={GameStatsPDFScreen} options={{
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

