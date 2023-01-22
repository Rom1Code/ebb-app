import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';



export default function GameStatsScreen({navigation, route}) {
  console.log(route.params)
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{route.params.match.item.dom}</Text>


      </View>
    );
  };