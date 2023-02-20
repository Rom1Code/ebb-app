import { StyleSheet, Text, View, Image, Dimensions, Pressable, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import ModalComponent from './ModalComponent';
import Carousel from 'react-native-reanimated-carousel';
import { dbRef }  from './GetData'
import { child, get } from "firebase/database";

function HomeScreen() {

  // Get the width and height of the phone used
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  // Keep track if the modal component is visible or not
  const [modalVisible, setModalVisible] = useState(false);
  // Fetch the actu data from firebase
  const [actu, setActu] = useState([]);
  // Fetch the affiche data from firebase
  const [affiche, setAffiche] = useState([]);

  // Set the image in which the user clicked
  const [image, setImage] = useState('');

  // Keep track if the datas are loading
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)

  // Create an array from the actu data
  const arrayActu = actu.map((item)=> item.link)
  // Create an array from the affiche data
  const arrayAffiche= affiche.map((item)=> item.link)

  // Function called in the modalstatsComponent in order to hide the modal
  const modalVisibleTrigger = () => {
    setModalVisible(!modalVisible)
  }

  // Fetch one time all the data for all game
  useEffect(() => {
    // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
      get(child(dbRef, 'actu/')).then((snapshot) => {
        if (snapshot.exists()) {
          setActu(snapshot.val());
          setLoading(false)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
      // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
      get(child(dbRef, 'affiche/')).then((snapshot) => {
        if (snapshot.exists()) {
          setAffiche(snapshot.val());
          setLoading2(false)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
    }, []);
  
  return (
      <View style={{flex:1}}>
        <View >
          <Image
          style={styles.icon}
          source={require('../Ressources/ebb-logo.png')}
        />
        </View>
        
        <Text style={styles.title2}>Match à l'affiche</Text>
        { loading2  ? 
        <ActivityIndicator size='large' color='#00A400' style={{ marginTop: 50}}/>
      :
        <FlatList
          data={arrayAffiche}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => 
          <Pressable  onPress={() => {setModalVisible(!modalVisible); setImage(item)}}>       
            <Image  style={{ width: width, height: 230, resizeMode:'contain' }} source={{uri: item}} />
          </Pressable>}
        />
        }

        <Text style={styles.title}>Actualité du club</Text>
        <View style={{justifyContent:'center', alignContent:'center'}}>
        <ModalComponent visible={modalVisible} image={image} modalVisibleTrigger={modalVisibleTrigger}/>
        </View>
        { loading  ? 
        <ActivityIndicator size='large' color='#00A400' style={{ marginTop: 50}}/>
      :
        <Carousel
        style={{border:'none'}}
            loop
            width={width}
            height={300 }
            autoPlay={true}
            data={arrayActu}
            scrollAnimationDuration={2000}
            mode='parallax'
            //paralaxScrollingScale={2.9}
            //paralaxScrollingOffset={50}
            pinchGestureEnabled={true}
            //onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ item, index }) => (
                <View horizontal='true' style={{ flex: 1, justifyContent:'center'}}>
                  <Pressable onPress={() => {setModalVisible(!modalVisible); setImage(item)}}>
                    <Image key={index} style={{  width: width, height: 300, resizeMode:'contain',  }}  source={{uri :item}} />
                  </Pressable>
                </View>
            )}
        />}
      </View>
    );
  }

  const styles = StyleSheet.create({
    icon: {
      width: 150,
      height: 150,
      alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:'center',
    },
    title2: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:'center',
      marginTop: -15,
      marginBottom: 10
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      }},
      modalImage: {
        width: 300,
        resizeMode:'contain',
        backgroundColor:'green'
      }

  })
  
  export default HomeScreen;