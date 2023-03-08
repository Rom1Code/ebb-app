import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { dbRef }  from './GetData'
import { child, get } from "firebase/database";

function ConnexionComponent({triggerCheckPassword}) {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('')

      // Fetch one time all the data for all game
  useEffect(() => {
    // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
      get(child(dbRef, 'accès_coach/')).then((snapshot) => {
        if (snapshot.exists()) {
          setPassword(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Accès restreint</Text>
            </View>
            <View style={styles.data_container}>
                <Text style={styles.text}>Mot de passe</Text>
                <TextInput
                style={styles.input}
                secureTextEntry= {true}
                onChangeText={setText}
                value={text}
            />
                <Pressable onPress={() => triggerCheckPassword(password, text) }style={styles.button}>
                    <Text>Valider</Text>
                </Pressable>
            </View>
            <Image style={styles.image} source={require('../Ressources/Coach_vert.png')}/>
      </View>
    );
  }

  export default ConnexionComponent; 

  const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:"white",
        justifyContent: 'center'
    },
    title_container: {
        margin: 20,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor:'#0bb049',
        justifyContent: 'center',
        elevation: 10
    },

    data_container: {
        margin: 20,
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    image: {
        marginTop:10,
        alignSelf: 'center',
        height: 200,
        width: 200,
        resizeMode:'contain',
        zIndex: 1
    },
    input: {
        alignSelf:'center',
        height: 40,
        width: 200,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
      },
      button: {
        alignSelf:'center',
        borderWidth : 1,
        padding : 10,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: 'white'
      },

    })