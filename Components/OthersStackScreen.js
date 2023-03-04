import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import OthersScreen from './OthersScreen';
import TrainingPlanningScreen from './TrainingPlanningScreen';

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
        </Stack.Navigator>
    );
};

