import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen from './HomeScreen';
import  TeamsScreen from './TeamsScreen';
import  StatsScreen from './StatsScreen';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GamesStackScreen from './GamesStackScreen';
import TeamsStackScreen from './TeamsStackScreen';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#00A400',
      tabBarInactiveTintColor: 'white',
      tabBarActiveBackgroundColor:'white',
      tabBarInactiveBackgroundColor:'#00A400',
    }}
>
      <Tab.Screen name="Accueil" component={HomeScreen} options={{
          tabBarLabel: 'Accueil',
          headerTintColor:'#00A400',
          headerShown:true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="MatchsStack" component={GamesStackScreen} options={{
          tabBarLabel: 'Matchs',
          headerTintColor:'#00A400',
          headerShown:true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Equipes" component={TeamsStackScreen} options={{
          tabBarLabel: 'Equipes',
          headerShown:true,
          headerTintColor:'#00A400',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Stats" component={StatsScreen} options={{
          tabBarLabel: 'Stats',
          headerShown:false,
          headerTintColor:'#00A400',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

  export default Navigation;