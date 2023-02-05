import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calendarList } from './Datas';
import React, { useState } from 'react';
import { getDateWeek } from './getDate';
import GameItem from './GameItem';
import GameDateBar from './GameDateBar';

function GamesScreen({navigation}) {

  const [selectedDate, setSelectedDate] = useState(getDateWeek(0))

  const finalCalendrier = []
  
  calendarList.map((item)=> item.map((item2) => finalCalendrier.push(item2)))
  const gameListPlayed = finalCalendrier.filter((item) => item.date == selectedDate)

  const gameListPlayedSorted = gameListPlayed.sort((a ,b) => a.heure.substring(0,2) - b.heure.substring(0,2))


  const nbGame = (date) => {
    const gamesList = finalCalendrier.filter((item) => item.date == date)
  return gamesList.length
  }

  const dateTrigger = (date) => {
    setSelectedDate(date)
  }

    return (
      <SafeAreaView style={{ width: '100%', marginBottom: 50}}>
        <GameDateBar selectedDate={selectedDate} dateTrigger={dateTrigger} nbGame={nbGame}/>
        {nbGame(selectedDate) != 0 ?
        <FlatList style={{ width: '100%' }}
          data={gameListPlayedSorted}
          renderItem={({item}) =>
          <GameItem navigation={navigation} game={item}/>}
        />      
      :
      <Text style={styles.noGame}>Pas de match</Text>}

      </SafeAreaView>
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
    }

  });


  export default GamesScreen;