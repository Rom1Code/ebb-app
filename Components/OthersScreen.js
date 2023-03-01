import { StyleSheet, Text, View, Linking, Image, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Foundation from 'react-native-vector-icons/Foundation';

// Contact Screen- information about the club
function OthersScreen({navigation}) {
    return (
      <View style={{flex:1, marginTop: 10}} >
        <Text style={styles.title}>Autres Catégories</Text>
        <View style={styles.container} >
          <View style={styles.data_container}>
            <Entypo style={styles.icon} name="traffic-cone" color='orange' />
            <Pressable>
              <Text style={styles.text}>  Les crénaux d'entrainement</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.title}>Contact</Text>
        <View style={styles.container} >
          <View style={styles.data_container}>
            <Foundation style={styles.icon} name="telephone" color='white' />
            <Pressable onPress={() => Linking.openURL('tel:07 82 28 24 71') }>
              <Text style={styles.text}>  07 82 28 24 71</Text>
            </Pressable>
          </View>
          <View style={styles.data_container}>
            <Foundation style={styles.icon} name="mail" color='white' />
            <Pressable onPress={() => Linking.openURL('mailto:communication.team.ebb@gmail.com') }>
              <Text style={styles.text}>  Nous contacter</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.data_container} onPress={() => Linking.openURL('https://www.facebook.com/EBB.EckbolsheimBasketBall')}><Image style={styles.image} source={require('../Ressources/facebook.png')} />
              <Text style={styles.text}>  Suivez nous sur Facebook</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.data_container} onPress={() => Linking.openURL('https://www.instagram.com/eckbolsheim_basket_ball')}><Image style={styles.image} source={require('../Ressources/Instagram.png')} />
              <Text style={styles.text}>  Suivez nous sur Instagram</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.title}>A propos de l'application</Text>
        <View style={styles.container} >
          <View>
          <Pressable style={styles.data_container} onPress={() => Linking.openURL('https://chat.whatsapp.com/BiUjxsVh68hG9jgCKnjwXy')}>
            <FontAwesome style={styles.icon_fb} name="whatsapp" color='white'  />
            <Text style={styles.text}>  Restez informé des mises à jour</Text>
          </Pressable>
          </View>
        </View>

      </View>
    );
  }

  export default OthersScreen; 

  const styles = StyleSheet.create({
    container: {
      margin: 15,
      borderRadius: 10,
      backgroundColor: '#0bb049'
    },
    container_2: {
      margin: 10,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white'

    },

    data_container: {
      flexDirection: 'row',
      margin: 10,
      borderBottomWidth: 1,
      borderBottomColor:'white',
      padding: 10
    },
    data_container_2: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-around', 

    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      padding: 5,
      marginLeft: 15,

    },
    text: {
      fontSize: 16,
      color: 'white'
    },

    icon_fb: {
        fontSize:20 
      },
    icon: {
      fontSize:20,
    },
    image: {
      height: 20,
      width: 20,
      marginTop: 3
    },

    })