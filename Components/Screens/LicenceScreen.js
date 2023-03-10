import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { teamList, MasculinTeamList, FemininTeamList } from '../Datas';
import TeamItem from '../TeamItem'
import ModalLicenceComponent from '../ModalLicenceComponent';
import { useState, useEffect } from 'react';

//import DeviceInfo from 'react-native-device-info';

// Contact Screen- information about the club
function LicenceScreen({navigation}) {
  // Keep track if the modal component is visible or not
  const [modalVisible, setModalVisible] = useState(false);

  // Function called in the modalstatsComponent in order to hide the modal
  const modalVisibleTrigger = () => {
    setModalVisible(!modalVisible)
    }
    //const source = {require('./assets/SM1_2022-2023.pdf')};
//console.log(source.uri)
    return (
        <>
        <ModalLicenceComponent visible={modalVisible}  modalVisibleTrigger={modalVisibleTrigger}/>
            <FlatList style={styles.flatListContainer}
            data={teamList}
            keyExtractor={(item, index)=> index}
            renderItem={({item})=>
            <View style={styles.container}>
            <Pressable style={styles.pressableContainer} onPress={() => setModalVisible(!modalVisible)} >
              <View style={styles.itemContainer}>
                <View style={styles.topContainer}>
                  <Text style={styles.textTopContainer}>Licence</Text>
                </View>
                <View style={styles.bottomContainer}>
                <View style={styles.imageContainer}>
                  <Image  style={{ width: 70, height: 70, resizeMode:'contain'}} source={require('../../Ressources/team.png')} />
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
      }
    });
  
  