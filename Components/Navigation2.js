import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import  HomeScreen from './HomeScreen';
import  GamesScreen from './GamesScreen';
import  TeamsScreen from './TeamsScreen';
import  StatsScreen from './StatsScreen';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createStackNavigator();

function Navigation2() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#00A400',
      tabBarInactiveTintColor: 'white',
      tabBarActiveBackgroundColor:'white',
      tabBarInactiveBackgroundColor:'#00A400',
    }}
>
      <Tab.Screen name="Matchs" component={GamesScreen} options={{
          tabBarLabel: 'Matchs',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Equipes" component={TeamsScreen} options={{
          tabBarLabel: 'Equipes',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Stats" component={StatsScreen} options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

  export default Navigation2;