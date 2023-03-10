import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ConnexionComponent from '../ConnexionComponent'

function CoachScreen({navigation}) {
    const [isPasswordOk, setIsPasswordOk] = useState(true)
    const [userValue, setUserValue] = useState('')
    const [password, setPassword] = useState('')

      // Fetch one time all the data for all game
  useEffect(() => {
    console.log('userValue',userValue)

    if(userValue!='' && password!=''){
        userValue == password ? setIsPasswordOk(true) : setIsPasswordOk(false)
    } 
    console.log('useeffect isPasswordOk',isPasswordOk)

    }, []);

    const triggerCheckPassword = (password, userValue) => {
        console.log('triggerCheckPassword',password)
        setUserValue(userValue)
        setPassword(password)
        if(userValue == password) {
            setIsPasswordOk(true)
        }
        else {
            setIsPasswordOk(false)
            Alert.alert("Mot de passe incorrect")
        }
    }

    console.log('isPasswordOk',isPasswordOk)
    return (
      <View style={{flex:1}}>
        {isPasswordOk ? 
            <>
              <View style={styles.title_container}>
                <Text  style={styles.title}>Bievenue dans l'espace coach</Text>
                <Image style={styles.image} source={require('../../Ressources/Coach_vert_2.png')}/>
              </View>
              <View style={styles.container} >
              <View style={styles.data_container} >
                <View style={styles.line_container}>
                    <Pressable style={styles.pressable_container} onPress={() => navigation.navigate('Licences')}>
                        <AntDesign style={styles.icon} name="idcard" color='white' />
                        <Text style={styles.text}>  Licences joueurs</Text>
                    </Pressable>
                </View>
                <View style={styles.line_container}>
                    <Pressable style={styles.pressable_container} onPress={() => navigation.navigate('Créneaux entrainements')}>
                        <Entypo style={styles.icon} name="traffic-cone" color='orange' />
                        <Text style={styles.text}>  Crénaux d'entrainement</Text>
                    </Pressable>
                </View>
                <View style={styles.line_container}>
                        <Pressable style={styles.pressable_container} onPress={() => navigation.navigate('Equipes')}>
                        <Octicons style={styles.icon} name="graph" color='black' />
                        <Text style={styles.text}>  Statistiques</Text>
                        </Pressable>
                </View>
             </View>
             </View>
            </>

        :
        <>
            <ConnexionComponent triggerCheckPassword={triggerCheckPassword}/>
        </>
        }
      </View>
    );
  }

  export default CoachScreen; 


  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    data_container: {
        margin: 15,
        borderRadius: 10,
        backgroundColor: '#0bb049',
        elevation: 15
    },
    line_container: {
        flexDirection: 'row',
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor:'white',
        padding: 10
    },
    title_container: {
        flex: 1,
        justifyContent: 'center'
    },
    pressable_container: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
        marginLeft: 15,
        textAlign: 'center'
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
        marginTop:10,
        alignSelf: 'center',
        height: 200,
        width: 200,
        resizeMode:'contain',
        zIndex: 1
    }

    })