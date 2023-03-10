import { Text, View, TouchableOpacity, Pressable, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Display one item
function TeamItem({navigation, title, data}) {
    return (
      <>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        style={styles.container}
        keyExtractor={(item)=>item.team}
        data={data}
        renderItem={({item})=> 
              <View style={styles.teamContainer}>
                <Pressable android_ripple={{ color: '#0bb049' }} style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {team: {item}})}>
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
                </Pressable>
              </View>
              }   
      />
</>
    )
}

const styles = StyleSheet.create({
  container : {
    margin: 5,
  },
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
      borderRadius: 10,
      overflow: 'hidden'
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
      color: '#0bb049',
      //borderRadius:10,
      textAlign: 'center',
    },
    item2: {
      fontSize: 15,
      color: '#0bb049',
      //borderRadius:10,
      textAlign: 'center',
    },

  
  });


export default TeamItem