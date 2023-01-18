import { StyleSheet, Text, View, Image } from 'react-native';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
        style={styles.icon}
        source={require('../Ressources/ebb-logo.png')}
        />
        <Text style={styles.text}>Application under construction...</Text>
      </View>
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