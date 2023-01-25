import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TeamClassementScreen from './TeamClassementScreen';
import TeamsScreen from './TeamsScreen';

const Stack = createStackNavigator();

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
            <Stack.Screen name="Infos equipes" component={TeamClassementScreen} options={{
          headerTintColor:'#00A400',
          headerShown:true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={size} />
          ),
        }}/>             
        </Stack.Navigator>
    );
};

