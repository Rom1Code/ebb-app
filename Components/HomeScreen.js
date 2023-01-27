import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({navigation, route}) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
        style={styles.icon}
        source={require('../Ressources/ebb-logo.png')}
        />
        <Text style={styles.text}>Application under construction...</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    icon: {
      width: 300,
      height: 300,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
  })
  
  export default HomeScreen;