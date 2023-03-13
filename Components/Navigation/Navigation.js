import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import GamesStackScreen from './GamesStackScreen';
import TeamsStackScreen from './TeamsStackScreen';
import OthersStackScreen from './OthersStackScreen';

const Tab = createMaterialBottomTabNavigator();

// Set the navigation bottom tab bar with 4 screens
function Navigation() {
  return (
    <Tab.Navigator
     activeColor='#0bb049' 
    >
      <Tab.Screen name="Accueil" style={{backgroundColor:'white'}} component={HomeScreen} options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="MatchsStack" component={GamesStackScreen} options={{
          tabBarLabel: 'Matchs',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen name="EquipesStack" component={TeamsStackScreen} options={{
          tabBarLabel: 'Equipes',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="AutresStack" component={OthersStackScreen} options={{
          tabBarLabel: 'Autres',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="dots-three-horizontal" color={color} size={24} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

  export default Navigation;