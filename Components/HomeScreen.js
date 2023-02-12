import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import ModalComponent from './ModalComponent';
import Carousel from 'react-native-reanimated-carousel';
import { dbRef }  from './GetData'
import { child, get } from "firebase/database";

function HomeScreen() {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const [actu, setActu] = useState([]);
  const [affiche, setAffiche] = useState([]);

  const arrayActu = actu.map((item)=> item.link)

  const arrayAffiche= affiche.map((item)=> item.link)

  const modalVisibleTrigger = () => {
    setModalVisible(!modalVisible)
  }

  // Fetch one time all the data for all game
  useEffect(() => {
    // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
      get(child(dbRef, 'actu/')).then((snapshot) => {
        if (snapshot.exists()) {
          setActu(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
      // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
      get(child(dbRef, 'affiche/')).then((snapshot) => {
        if (snapshot.exists()) {
          setAffiche(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
    }, []);
  
  return (
      <>
        <View >
          <Image
          style={styles.icon}
          source={require('../Ressources/ebb-logo.png')}
        />
        </View>
        <Text style={styles.title}>Actualité du club</Text>

        <ModalComponent visible={modalVisible} image={image} modalVisibleTrigger={modalVisibleTrigger}/>

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
                <View horizontal='true'
                    style={{
                        flex: 1,
                        justifyContent:'center'
                    }}
                >
                  <Pressable onPress={() => {setModalVisible(!modalVisible); setImage(item)}}>
                    <Image key={index} style={{  width: width, height: 300, resizeMode:'contain',  }}  source={{uri :item}} />
                  </Pressable>
                </View>
            )}
        />
        
        <Text style={styles.title2}>Match à l'affiche</Text>

        <ScrollView horizontal={true}>
          {arrayAffiche.map((item, index) =>
            <Pressable key={index} onPress={() => {setModalVisible(!modalVisible); setImage(item)}}>       
              <Image  style={{ width: width, height: 250, resizeMode:'contain', ver:'center' }} source={{uri: item}} />
            </Pressable>   
          )}
        </ScrollView>
      </>
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
      marginTop: -10
    },
    title2: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:'center',
      marginTop: -10,
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