import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen from './Components/Home';
import  GamesScreen from './Components/Games';
import  TeamsScreen from './Components/Teams';
import  StatsScreen from './Components/Stats';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Tab = createBottomTabNavigator();

function MyTabs() {
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
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

export default function App() {
  return (
    <NavigationContainer    >
      <MyTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
