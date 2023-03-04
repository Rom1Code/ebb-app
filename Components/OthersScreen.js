import { StyleSheet, Text, View, Linking, Image, Share, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Contact Screen- information about the club
function OthersScreen({navigation}) {

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'https://expo.dev/accounts/rom1code/projects/ebb-app/builds/8a652323-cfa2-4452-bbd1-6494e3b97dcd',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

    return (
      <View style={{flex:1, marginTop: 10}} >
        <Text style={styles.title}>Autres Catégories</Text>
        <View style={styles.container} >
          <View style={styles.data_container}>
            <Entypo style={styles.icon} name="traffic-cone" color='orange' />
            <Pressable onPress={() => navigation.navigate('Créneaux entrainements')}>
              <Text style={styles.text}>  Les crénaux d'entrainement</Text>
            </Pressable>
          </View>
        <View style={styles.data_container}>
          <Octicons style={styles.icon} name="graph" color='black' />
          <Pressable>
            <Text style={styles.text}>  Statistiques</Text>
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
          <View>
          <Pressable style={styles.data_container} onPress={onShare}>
            <AntDesign style={styles.icon_fb} name="sharealt" color='white'  />
            <Text style={styles.text}>  Partagez l'application</Text>
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
      backgroundColor: '#0bb049',
      elevation: 15
    },
    data_container: {
      flexDirection: 'row',
      margin: 10,
      borderBottomWidth: 1,
      borderBottomColor:'white',
      padding: 10
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