import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { getDateWeek } from './getDate';
import GameItem from './GameItem';
import GameDateBar from './GameDateBar';
import { child, get } from "firebase/database";
import { dbRef }  from './GetData'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

// Screen that display the GameDateBar componenet and list the game in function of date selected
function GamesScreen({navigation}) {
  // Keep track of the date selected by the user
  const [selectedDate, setSelectedDate] = useState(getDateWeek(0))
  // Get the calendar data for all the team
  const [calendarData, setCalendarData] = useState([])
  
  // Get the data from the 'calendrier' node in the Firebase realtimebase and save it to calendarData variable
  useEffect(() => {
    get(child(dbRef, 'calendrier/')).then((snapshot) => {
    if (snapshot.exists()) {
      setCalendarData(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
  }, []);

    // Fetch the data for the date selected
  const calendarDataArray = []

  // !!!mettre sur une ligne comme pour gameItem
  Object.keys(calendarData).map((key)=>calendarData[key].map((item)=> calendarDataArray.push(item)))
  const gameListPlayed = calendarDataArray.filter((item) => item.date == selectedDate)

  const gameListPlayedSorted = gameListPlayed.sort((a ,b) => a.heure.substring(0,2) - b.heure.substring(0,2))

  // Get and return the number of game for the selected date
  const nbGame = (date) => {
    const gamesList = calendarDataArray.filter((item) => item.date == date)
  return gamesList.length
  }

  // Set selectedData variable with selected date
  const dateTrigger = (date) => {
    setSelectedDate(date)
  }

    return (
      <>
        <SafeAreaView style={{ width: '100%', marginBottom: 50}}>
          <GameDateBar selectedDate={selectedDate} dateTrigger={dateTrigger} nbGame={nbGame}/>
          {nbGame(selectedDate) != 0 ?
          <FlatList style={{ width: '100%' }}
            data={gameListPlayedSorted}
            ListFooterComponent={() => 
            <View style={styles.legende}>
              <Text><Entypo name="video" color='black'/> : Vidéo disponible</Text>
              <Text><FontAwesome name="table" color='black'/> : Stats disponible</Text>
            </View>}
            renderItem={({item}) =>
            <GameItem navigation={navigation} game={item}/>}
          />      
        :
        <Text style={styles.noGame}>Pas de match</Text>}
                

        </SafeAreaView>

      </>
    );
  }

  const styles = StyleSheet.create({
    noGame: {
      textAlign: 'center',
      fontSize: 26,
      marginTop: 20
    },
    dateContainer: {
      padding: 2,
      borderWidth: 0.5,
      height:40,
      justifyContent: 'center'
    },
    text: {
      color: 'black',
      fontSize: 12,
      textAlign: 'center'
    },
    dateContainerSelected: {
      padding: 2,
      borderWidth: 0.5,
      height:40,
      backgroundColor: '#00A400',
      justifyContent: 'center',
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10
    },
    textSelected: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    },
    gameContainer: {
      flexDirection: 'row',
      flex:1,
      backgroundColor: 'white',
      elevation: 24,
      height: 50,
      marginTop: 5
    },
    gameContainerLeft: {
      flex:1.5,
      backgroundColor: '#00A400',
    },
    gameContainerMiddle: {
      flex:4,
      paddingLeft: 5
    },
    gameContainerRight: {
      justifyContent: 'center', //Centered horizontally
      flex:1,
      borderLeftWidth: 2,
      borderLeftColor: '#00A400'    
    },
    teamContainer: {
      flex: 1,
      justifyContent: 'center', //Centered horizontally
    },
    hourContainer: {
      justifyContent: 'center', //Centered horizontally
      flex: 1,
      borderTopColor: 'white',
      borderTopWidth: 1,
    },
    team: {
      textAlign: 'center',
      color: 'white',
      fontSize: 12,
    },
    hour: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    },
    game: {
      fontSize: 12,
      textAlign: 'center'
    },
    score: {
      color: 'green',
      fontSize: 13,
      textAlign: 'center'
    },
    vs: {
      textAlign: 'center'
    },
    legende: {
      flexDirection: 'row',
      justifyContent:'space-around',
      backgroundColor:'white',
      height: 50,
      alignItems:'center',
      marginTop: 5
    }
  });


  export default GamesScreen;