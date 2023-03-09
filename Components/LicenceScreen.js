import { StyleSheet, View, FlatList, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { teamList } from './Datas';
import TeamItem from './TeamItem'
import ModalLicenceComponent from './ModalLicenceComponent';
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
        <View style={styles.container}>
            <FlatList style={styles.flatListContainer}
            data={teamList}
            keyExtractor={(item, index)=> index}
            renderItem={({item})=>
            <View style={styles.itemContainer}>
                <Pressable style={{width:'100%', alignItems:'center'}}onPress={() => setModalVisible(!modalVisible)} >
                    <Text style={styles.text}>{item}</Text>
                </Pressable>
                
            </View>

            } />
        </View>

        </>
      );
    }

    export default LicenceScreen;
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    flatListContainer: {
    },
      itemContainer: {
        borderWidth:1,
        borderRadius: 5,
        alignItems:'center',
        marginVertical: 5,
        width: 100,
        backgroundColor: '#0bb049'
      }, 
    text : {
        color: 'white',
        fontSize: 24
    }
    });
  
  