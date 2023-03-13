import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { teamList } from '../Datas';

//import DeviceInfo from 'react-native-device-info';

// Contact Screen- information about the club
function LicenceScreen({navigation}) {
    return (
        <>
            <FlatList style={styles.flatListContainer}
            data={teamList}
            keyExtractor={(item, index)=> index}
            renderItem={({item})=>
            <View style={styles.container}>
            <Pressable style={styles.pressableContainer} onPress={() => navigation.navigate('Licences équipe')} >
              <View style={styles.itemContainer}>
                <View style={styles.topContainer}>
                  <Text style={styles.textTopContainer}>Licence</Text>
                </View>
                <View style={styles.bottomContainer}>
                <View style={styles.imageContainer}>
                  <Image  style={styles.image} source={require('../../Ressources/team.png')} />
                </View>
                <View style={styles.nameContainer}>
                  <Text style={styles.textTeam}>{item}</Text>
                  <Text style={styles.text}>Année : 2022/2023</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            </View>
            } />
        </>
      );
    }

    export default LicenceScreen;
  
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        marginTop: 10,
      },
      pressableContainer: {
        elevation: 10,
        backgroundColor:'white',
        borderRadius:5,
        overflow:'hidden'
      },
      topContainer: {
        flex:1,
        backgroundColor: '#0bb049',
        justifyContent: 'center',
        width: '100%',

      },
      bottomContainer: {
        flex:2,
        flexDirection: 'row'
      },
      imageContainer: {
        flex: 1,
        borderRightWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
      },
      nameContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 5
      },
      itemContainer: {
        borderWidth:0.5,
        borderRadius: 5,
        alignItems:'center',
        width: 220,
        height: 110,
      }, 
    text : {
        color: 'black',
        fontSize: 14,
    },
    textTeam : {
      color: '#0bb049',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 5,
      fontWeight: '600'

    },
    textTopContainer: {
        color:'white',
        textAlign: 'center',
        fontWeight:'600',
        fontSize: 18,
    },
    image: {
      width: 70, 
      height: 70, 
      resizeMode:'contain'
    }
    });
  
  