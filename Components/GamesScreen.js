import { StyleSheet, FlatList, Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { getWeekEnd } from './getDate';
import GameItem from './GameItem';
import GameItem2 from './GameItem2';

import GameDateBar from './GameDateBar';
import { child, get } from "firebase/database";
import { dbRef }  from './GetData'

// Screen that display the GameDateBar componenet and list the game in function of date selected
function GamesScreen({navigation}) {
  // Keep track of the date selected by the user
  const [selectedDate, setSelectedDate] = useState(getWeekEnd(60)[getWeekEnd(60).length /2])
  // Get the calendar data for all the team
  const [calendarData, setCalendarData] = useState([])
  
  // Keep track if data is loading or not
  const [loading, setLoading] = useState(true)

  // Fetch the data for the date selected
  const calendarDataArray = []

  // !!!mettre sur une ligne comme pour gameItem
  Object.keys(calendarData).map((key)=>calendarData[key].map((item)=> calendarDataArray.push(item)))
  const gameListPlayed = calendarDataArray.filter((item) => item.date == selectedDate)

  // Array ordered by date
  const gameListPlayedSorted = gameListPlayed.sort((a ,b) => a.heure.substring(0,2) - b.heure.substring(0,2))

  // Get and return the number of game for the selected date
  const nbGame = (date) => {
    const gamesList = calendarDataArray.filter((item) => item.date == date)
  return gamesList.length
  }

  // Set selectedData variable with selected date
  const dateTrigger = (date) => {
    setSelectedDate(date)
    setLoading(true)
  }

  // Get the data from the 'calendrier' node in the Firebase realtimebase and save it to calendarData variable
  useEffect(() => {
    if(loading){
      get(child(dbRef, 'calendrier/')).then((snapshot) => {
      if (snapshot.exists()) {
        setCalendarData(snapshot.val());
        setLoading(false)
      } else {
          console.log("No data available");
      }
      }).catch((error) => {
      console.error(error);
      });}
  }, [loading]);
  

  return (
    <>
    <View>
      <GameDateBar selectedDate={selectedDate} dateTrigger={dateTrigger} nbGame={nbGame}/>
    </View>
    <SafeAreaView style={{flex:1}}>
        { loading  ? 
      <ActivityIndicator size='large' color='#00A400' style={{ marginTop: 50}}/>
    :
        nbGame(selectedDate) != 0 ?
        <FlatList
          data={gameListPlayedSorted}
          renderItem={({item}) =>
          <GameItem2 navigation={navigation} game={item}/>}
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
  });


  export default GamesScreen;