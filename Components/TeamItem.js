import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

function TeamItem({navigation, title, data}) {
    return (
        <>
        <Text style={styles.title}>{title}</Text>
          <ScrollView horizontal={true} style={{ width: '100%', flex: 1}}>
          {data.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                <View style={styles.teamContainerTop}> 
                  <View style={styles.imageContainer}>
                    <Image style={styles.logo} source={require('../Ressources/ebb-logo.png')} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.item}>{item.substring(0,1)=='M' || item.substring(0,1)=='F' ? item.substring(1,4) : item.substring(0,4)}</Text>
                  </View>
                </View>
                <View style={styles.teamContainerBottom}> 
                    <Text style={styles.item}>(niveau)</Text>
                </View>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>
          </>

    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      padding: 5,
      fontWeight: 'bold'
    },
    teamContainer: {
      height: 150,
      width: 150,
      flexDirection: 'row',
      flex: 1,
      margin : 5,
      backgroundColor: 'white',
      elevation: 5,

    },
    teamContainerTop: {
      flex :1,
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
    },
    imageContainer: {
      flex: 1,
      height: 75,
    },
    textContainer: {
      flex: 1,
      height: 75,
      justifyContent: 'center'

    },
    teamContainerBottom: {
      flex :1,
      width: 150

    },
    logo: {
      height:75,
      width: 75,
      
    },
    touch: {
      justifyContent: 'center',
 
    },
    item: {
      fontSize: 18,
      color: '#00A400',
      //borderRadius:10,
      textAlign: 'center',
    },
  
  });


export default TeamItem