import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import ContactsScreen from './ContactsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GamesStackScreen from './GamesStackScreen';
import TeamsStackScreen from './TeamsStackScreen';

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
     activeColor='#00A400'
    >
      <Tab.Screen name="Accueil" component={HomeScreen} options={{
          tabBarLabel: 'Accueil',
          headerTintColor:'#00A400',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="MatchsStack" component={GamesStackScreen} options={{
          tabBarLabel: 'Matchs',
          headerTintColor:'#00A400',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="basketball-ball" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen name="EquipesStack" component={TeamsStackScreen} options={{
          tabBarLabel: 'Equipes',
          headerShown:false,
          headerTintColor:'#00A400',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" color={color} size={24} />
          ),
        }}/>
      <Tab.Screen name="Contacts" component={ContactsScreen} options={{
          tabBarLabel: 'Contacts',
          headerShown:false,
          headerTintColor:'#00A400',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" color={color} size={24} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

  export default Navigation;