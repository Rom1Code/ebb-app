import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import OthersScreen from './OthersScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import GamesStackScreen from './GamesStackScreen';
import TeamsStackScreen from './TeamsStackScreen';

const Tab = createMaterialBottomTabNavigator();

// Set the navigation bottom tab bar with 4 screens
function Navigation() {
  return (
    <Tab.Navigator
     activeColor='#0bb049' 
    >
      <Tab.Screen name="Accueil" style={{backgroundColor:'white'}} component={HomeScreen} options={{
          tabBarLabel: 'Accueil',
          headerTintColor:'#0bb049',
          
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="MatchsStack" component={GamesStackScreen} options={{
          tabBarLabel: 'Matchs',
          headerTintColor:'#0bb049',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen name="EquipesStack" component={TeamsStackScreen} options={{
          tabBarLabel: 'Equipes',
          headerShown:false,
          headerTintColor:'#0bb049',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="Autres" component={OthersScreen} options={{
          tabBarLabel: 'Autres',
          headerShown:false,
          headerTintColor:'#0bb049',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="dots-three-horizontal" color={color} size={24} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

  export default Navigation;