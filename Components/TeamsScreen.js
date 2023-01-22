import { Button, Text, View } from 'react-native';

function TeamsScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Teams!</Text>
        <Button
      title="Go Home"
      onPress={() =>
        navigation.navigate('Accueil', {name: 'Jane'})
      }
    />
      </View>
    );
  }

  export default TeamsScreen;