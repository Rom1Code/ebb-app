import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Pressable } from 'react-native';
import { useState,  } from 'react';
import ModalComponent from './ModalComponent';
import Carousel from 'react-native-reanimated-carousel';

function HomeScreen() {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');

  const arrayActu=[{image:require('../Ressources/annonce.jpg')},{image:require('../Ressources/annee_80.jpg')},{image:require('../Ressources/label_or.jpg')}]
  const arrayAffiche=[{image:require('../Ressources/match_affiche.jpg')}]

  const modalVisibleTrigger = () => {
    setModalVisible(!modalVisible)
  }

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
            renderItem={({ item }) => (
                <View horizontal='true'
                    style={{
                        flex: 1,
                        justifyContent:'center'
                    }}
                >
                  <Pressable onPress={() => {setModalVisible(!modalVisible); setImage(item)}}>
                    <Image  style={{  width: width, height: 300, resizeMode:'contain',  }}  source={item.image} />
                  </Pressable>
                </View>
            )}
        />
        
        <Text style={styles.title2}>Match à l'affiche</Text>

        <ScrollView horizontal={true}>
          {arrayAffiche.map((item) =>
            <Pressable onPress={() => {setModalVisible(!modalVisible); setImage(item)}}>       
              <Image style={{ width: width, height: 250, resizeMode:'contain', ver:'center' }} source={item.image} />
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