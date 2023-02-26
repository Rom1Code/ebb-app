import { StyleSheet, FlatList, Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { getWeekEnd } from './getDate';
import GameItem2 from './GameItem2';
import GameDateBar from './GameDateBar';
import { child, get } from "firebase/database";
import { dbRef }  from './GetData'

// Screen that display the GameDateBar componenet and list the game in function of date selected
function GamesScreen({navigation}) {
  // Keep track of the date selected by the user
  const [selectedDate, setSelectedDate] = useState(getWeekEnd(60)[(getWeekEnd(60).length /2)-1])
  // Get the calendar data for all the team
  const [calendarData, setCalendarData] = useState([])
  // Keep track if data is loading or not
  const [loading, setLoading] = useState(true)

  // initialize an array with all the game
  const calendarDataArray = []
  Object.keys(calendarData).map((key)=>calendarData[key].map((item)=> calendarDataArray.push(item)))

  const lastDate = []
  Object.keys(calendarData).map((key)=>calendarData[key].map((item)=> lastDate.push(item)))
  const lastDateSort = lastDate.sort(function(a,b) {
    a = a.date.split('/').reverse().join('');
    b = b.date.split('/').reverse().join('');
    return a > b ? 1 : a < b ? -1 : 0;
  });
 const lastDateSortFinal = lastDateSort.filter((item)=> item.score != '-').map((item)=> item.date)
 const lastDateSortFinal2 = [...new Set(lastDateSortFinal)];
  console.log(lastDateSortFinal2.length)

  // Initalize an array with all the game in the selected date
  const gameListPlayed = calendarDataArray.filter((item) => item.date == selectedDate)
  // Array ordered by hour
  const gameListPlayedSorted = gameListPlayed.sort((a ,b) => a.heure.substring(0,2) - b.heure.substring(0,2))

  // Get and return the number of game for the selected date
  const nbGame = (date) => {
    const gamesList = calendarDataArray.filter((item) => item.date == date)
    return gamesList.length
  }

  // ---For the gameDateBar---

  // Initialize and sort an array with all the date with a game
  const dateList =[]
  Object.keys(calendarData).map((key)=>calendarData[key].map((item)=> dateList.push(item.date)))
  let dateListFinal = [...new Set(dateList)];

  // Sort the date array
  dateListFinal.sort(function(a,b) {
    a = a.split('/').reverse().join('');
    b = b.split('/').reverse().join('');
    return a > b ? 1 : a < b ? -1 : 0;
  });

  // ---End---

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
      <GameDateBar selectedDate={selectedDate} dateTrigger={dateTrigger} nbGame={nbGame} dateArray={dateListFinal}/>
    </View>
    <SafeAreaView style={{flex:1}}>
        { loading  ? 
      <ActivityIndicator size='large' color='#0bb049' style={{ marginTop: 50}}/>
    :
        <FlatList
          data={gameListPlayedSorted}
          keyExtractor={(item,index)=>index}
          ListEmptyComponent={()=> <Text style={styles.noGame}>Pas de match</Text>}
          renderItem={({item}) =>
          <GameItem2 navigation={navigation} game={item}/>}
        />      
        }
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
      backgroundColor: '#0bb049',
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
      backgroundColor: '#0bb049',
    },
    gameContainerMiddle: {
      flex:4,
      paddingLeft: 5
    },
    gameContainerRight: {
      justifyContent: 'center', //Centered horizontally
      flex:1,
      borderLeftWidth: 2,
      borderLeftColor: '#0bb049'    
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