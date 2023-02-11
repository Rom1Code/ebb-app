import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

function TeamItem({navigation, title, data}) {
    return (
        <View style={{ margin: 5,}}>
        <Text style={styles.title}>{title}</Text>
          <ScrollView horizontal={true} style={{ width: '100%', flex: 1}}>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {team: {item}})}>
                <View style={styles.teamContainerTop}> 
                  <View style={styles.imageContainer}>
                    <Image style={styles.logo} source={require('../Ressources/ebb-logo.png')} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.item}>{item.label}</Text>
                  </View>
                </View>
                <View style={styles.teamContainerBottom}> 
                    <Text style={styles.item2}>{item.level}</Text>
                    <Text style={styles.item2}>{item.group}</Text>
                </View>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>
          </View>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      padding: 5,
      fontWeight: 'bold'
    },
    teamContainer: {
      height: 100,
      width: 150,
      flexDirection: 'row',
      flex: 1,
      margin : 5,
      backgroundColor: 'white',
      elevation: 5,
      borderRadius: 10
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

    },
    textContainer: {
      flex: 1,

    },
    teamContainerBottom: {
      flex :1,
      width: 125,
      justifyContent: 'center',
      width: 150,

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
    item2: {
      fontSize: 15,
      color: '#00A400',
      //borderRadius:10,
      textAlign: 'center',
    },

  
  });


export default TeamItem