import { StyleSheet, Text, View, Image, Dimensions, Pressable, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import ModalComponent from './ModalComponent';
import Carousel from 'react-native-reanimated-carousel';
import { dbRef }  from './GetData'
import { child, get } from "firebase/database";
import { ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

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

  const [carouselInddex, setCarouselInddex] = useState(0)
  // Set the image in which the user clicked
  const [image, setImage] = useState('');

  // Keep track if the datas are loading
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)

  // Create an array from the actu data
  const arrayActu = actu.map((item)=> item.link)
  // Create an array from the affiche data
  const arrayAffiche= affiche.map((item)=> item.link)
  const affiche2 = [{link:require('../Ressources/match_affiche2.jpg')}]

  const actu2 = [{link:require('../Ressources/annee_80.jpg')}, {link:require('../Ressources/annonce.jpg')}, {link:require('../Ressources/label_or.jpg')}]

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
    <>
      <ScrollView >
        < View style={{backgroundColor:'#0bb049', height:70}}>
        </View>

        <Image
          style={styles.icon}
          source={require('../Ressources/5ebb-logo.png')}
        />

        { loading2  ? 
        <ActivityIndicator size='large' color='#0bb049' style={{ marginTop: 50}}/>
      :   <View style={{marginBottom:20, marginTop:-3}}>

            <Pressable  onPress={() => {setModalVisible(!modalVisible); setImage(affiche2[0].link)}}>       
              <Image  style={{ width: width, height: 400, resizeMode:'contain'}} source={affiche2[0].link} />
            </Pressable>
          </View>}

        <Text style={styles.title}>Actualité du club</Text>
        <View style={{justifyContent:'center', alignContent:'center'}}>
        <ModalComponent visible={modalVisible} image={image} modalVisibleTrigger={modalVisibleTrigger}/>
        </View>
        { loading  ? 
        <ActivityIndicator size='large' color='#0bb049' style={{ marginTop: 50}}/>
      : <>

        <View style={{flexDirection:'row', justifyContent:'center', marginBottom: -30}}>
          {actu2.map((item, index)=> index == carouselInddex ? 
          <Entypo key={index} style={{marginTop:-5}}name="dot-single" color='#0bb049' size={50} />
          : <Entypo key={index} name="dot-single" color='grey' size={40} />
          )}
        </View>

        <Carousel
        style={{border:'none', marginTop:-10}}
            loop
            pagingEnabled={true}
            width={width}
            height={400 }
            autoPlay={true}
            data={actu2}
            scrollAnimationDuration={2000}
            mode='parallax'
            //paralaxScrollingScale={2.9}
            //paralaxScrollingOffset={50}
            pinchGestureEnabled={true}
            onSnapToItem={(index) => setCarouselInddex(index)}
            renderItem={({ item, index }) => (
                  <Pressable onPress={() => {setModalVisible(!modalVisible); setImage(item.link)}}>
                    <Image key={index} style={{  width: width, height: 400,  borderRadius:10, resizeMode:'stretch' }}  source={item.link} />
                  </Pressable>
            )}
        />
        </>
        }
      </ScrollView>
      </>
    );
  }

  const styles = StyleSheet.create({
    icon: {
      width: 125,
      height: 125,
      alignSelf: 'center',
      position:'absolute', 
      top:-28,
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
    }
  })
  
  export default HomeScreen;