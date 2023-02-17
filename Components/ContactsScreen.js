import { StyleSheet, Text, View, Linking, Image, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Foundation from 'react-native-vector-icons/Foundation';

// Contact Screen- information about the club
function ContactsScreen({navigation}) {
    return (
      <View style={{flex:1}} >
        <View style={styles.container} >
          <Text style={styles.title}>Contact Club</Text>
          <View style={styles.data_container}>
            <Foundation style={styles.icon} name="telephone" color='#00A400' />
            <Pressable onPress={() => Linking.openURL('tel:07 82 28 24 71') }>
              <Text style={styles.text}> : 07 82 28 24 71</Text>
            </Pressable>
          </View>
          <View style={styles.data_container}>
            <Foundation style={styles.icon} name="mail" color='#00A400' />
            <Pressable onPress={() => Linking.openURL('mailto:communication.team.ebb@gmail.com') }>
              <Text style={styles.text}> : communication.team.ebb@gmail.com</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container_2} >
          <Text style={styles.title}>Réseaux sociaux</Text>
          <View style={styles.data_container_2}>
            <AntDesign style={styles.icon_fb} name="facebook-square" color='#1877f2' onPress={() => Linking.openURL('https://www.facebook.com/EBB.EckbolsheimBasketBall')}/>
            <Pressable onPress={() => Linking.openURL('https://www.instagram.com/eckbolsheim_basket_ball')}><Image style={styles.image} source={require('../Ressources/Instagram.png')} /></Pressable>
          </View>
        </View>
      </View>
    );
  }

  export default ContactsScreen; 

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      margin: 10,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    container_2: {
      margin: 10,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white'

    },

    data_container: {
      flexDirection: 'row',
      margin: 10
    },
    data_container_2: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-around', 

    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10
    },
    text: {
      fontSize: 18,
    },

    icon_fb: {
        fontSize:60 
      },
    icon: {
      fontSize:30,
    },
    image: {
      height: 55,
      width: 55,
      marginTop: 3
    },

    })