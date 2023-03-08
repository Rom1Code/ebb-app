import { StyleSheet, TouchableOpacity, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Entypo from 'react-native-vector-icons/Entypo';
import { dbRef }  from './GetData'
import { useEffect, useState } from 'react';
import { child, get } from "firebase/database";

 // Team calendar component that show calendar for one team
 // 1 prop is passed
 // team : name of the team - used to fetch calendar data
 function TeamCalendarComponent({navigation, team}) {
  // Set calendar data
  const [calendarData, setCalendarData] = useState([])
  // Set datas for all the game
  const [feuilleListData, setFeuilleListData] = useState([])
  // Keep track if data is loading
  const [loading, setLoading] = useState(true)

  // Define an array with the head label
  const tableHead =['#','Date', 'Lieu', 'Adversaire', 'Score', 'Recap']


  // Declare game = match in order to correspond with the gameItem2.js file when we navigate to the GameStatsScreen
  const feuilleMatch = (match) => {
    const feuilleDataMatch = feuilleListData.filter((item2) => item2.match == match.match )
    const game = match
    if(feuilleDataMatch.length == 1 ) {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {feuilleDataMatch, game }})}>
            <Entypo name="check" color='green' size={20} style={{textAlign:'center'}}/>
        </TouchableOpacity>
    }
  }

  const recapMatch = (game) => {
    const feuilleDataMatch = feuilleListData.filter((item2) => item2.match == game.match )
    if(feuilleDataMatch.length == 1) {
      return <TouchableOpacity onPress={() => navigation.navigate('Recap Match', {match: {game, feuilleDataMatch}})}>
            <Entypo name="check" color='green' size={20} style={{textAlign:'center'}}/>
        </TouchableOpacity>
    }
  }

  const adversaire = (game) => {
    if(game.dom.includes('ECKBOLSHEIM')) {
      return <Text style={styles.text}>{game.ext}</Text>
    }
    else {
      return <Text style={styles.text}>{game.dom}</Text>
    }
  }

  const lieu = (game) => {
    if(game.dom.includes('ECKBOLSHEIM')) {
      return <Text style={styles.text}>Dom</Text>
    }
    else {
      return <Text style={styles.text}>Ext</Text>
    }
  }

  // Display green or red score in order if Eckbolshein win or not
  const highlighWin = (game) => {
    const score_dom = game.score.split('-')[0]
    const score_ext = game.score.split('-')[1]
    const dom = game.dom
    const ext = game.ext
    if(parseInt(score_dom) > parseInt(score_ext) && dom.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#0bb049', textAlign:'center'}}>{score_dom}-{score_ext}</Text></>
    }
    else if(parseInt(score_dom) < parseInt(score_ext) && ext.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#0bb049', textAlign:'center'}}>{score_dom}-{score_ext}</Text></>
    }
    else if(game.score == '-') {
      return <><Text style={{color:'black', textAlign:'center'}}>{game.score}</Text></>
    }
    else{
      return <><Text style={{color:'red', textAlign:'center'}}>{score_dom}-{score_ext}</Text></>
    }
  }
  

  //const widthArr= [20, 70, 50, 120, 50, 30, 30]
  const flexArr=[0.75, 2.5, 1.5, 4, 2, 1.5, 1.5]

  // Set an array with the data that will be read for the table
  const tableData= calendarData.map((row) => [row.match,row.date + ' ' + row.heure, lieu(row),adversaire(row), highlighWin(row), recapMatch(row)])

  
  // Fetch the calendar for the team and the stats for all the game played
  useEffect(() => {
    get(child(dbRef, 'calendrier/'+team)).then((snapshot) => {
    if (snapshot.exists()) {
      setCalendarData(snapshot.val());
      setLoading(false)
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
    get(child(dbRef, 'feuille_match/'+team)).then((snapshot) => {
      if (snapshot.exists()) {
        setFeuilleListData(snapshot.val());
        setLoading(false)
      } else {
          console.log("No data available");
      }
      }).catch((error) => {
      console.error(error);
      });
  }, []);

  return (
      <View style={{ flex: 1 }}>
                    { loading  ? 
        <ActivityIndicator size='large' color='#0bb049' style={{ marginTop: 50}}/>
      :
        <View> 
          <Table borderStyle={{borderWidth: 0.5}}>
            <Row data={tableHead} flexArr={flexArr} style={styles.head}  textStyle={styles.textHead}/>
          </Table>
          <ScrollView>
            <Table borderStyle={{borderWidth: 0.5}}>
              <Rows data={tableData}  flexArr={flexArr}style={styles.row} textStyle={styles.text}/>
            </Table>
          </ScrollView>
        </View>
         }
      </View>
    );
}


const styles = StyleSheet.create({
  head: { 
    backgroundColor: '#0bb049',
    height:30
  },
  row: {  
    height: 50,
  },
  highlightText: {
    color:'#0bb049', 
    fontSize:10, 
    textAlign:'center',
    padding: 5

  },
  winText: {
    color:'#0bb049', 
    textAlign:'center'
  },
  loseText: {
    color:'red', 
    textAlign:'center'
  },
  text: { 
    textAlign: 'center',
    fontSize: 11,
    padding: 5

  },
  textHead: { 
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
})

export default TeamCalendarComponent