import { StyleSheet, Text, View, SectionList, Image, Share, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import DeviceInfo from 'react-native-device-info';

// Contact Screen- information about the club
function TrainingPlanningScreen({}) {
    const DATA = [
        {
          day: 'Lundi',
          data: [{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'}]
        },
        {
          day: 'Mardi',
          data: [{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'}]
        },
        {
          day: 'Mercredi',
          data: [{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'}]
        },
        {
          day: 'Jeudi',
          data: [{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'}]
        },
        {
          day: 'Vendredi',
          data: [{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'},{heure:'18h30', lieu:'Sammel', equipe:'SM1'}]
          },
  
      ];

    return (
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View>
              <Text style={styles.text}>{item.heure} : {item.equipe} - {item.lieu} </Text>
            </View>
          )}
          renderSectionHeader={({section: {day}}) => (
            <Text style={styles.header}>{day}</Text>
          )}
        />
      </View>
    );
  }

  export default TrainingPlanningScreen; 

  const styles = StyleSheet.create({
    container: {
      margin: 15,
      borderRadius: 10,
    },
    data_container: {
        flexDirection: 'row',
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor:'white',
        padding: 10
      },
  
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical : 5,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    text: {
      fontSize: 16,
      padding: 5,
      textAlign: 'center'
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