import { StyleSheet, TouchableOpacity, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { dbRef }  from './GetData'
import { useEffect, useState } from 'react';
import { child, get } from "firebase/database";
import Entypo from 'react-native-vector-icons/Entypo';

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
  const tableHead =['#','Date', 'Dom', 'Ext', 'Score', 'G/P', '', '']

  // Display the score and an icon if data for the game exist
  const statsExist = (numMatch, score) => {
    const feuilleDataMatch = feuilleListData.filter((item2) => item2.match == numMatch )
    if(feuilleDataMatch.length == 1 && feuilleDataMatch[0].url_video !='') {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {feuilleDataMatch}})}>
            <Text style={styles.text}>{score}</Text>
            <Text style={styles.text}><FontAwesome name="table" color='black'/> <Entypo name="video" color='black'/></Text>
        </TouchableOpacity>
    }
    else if(feuilleDataMatch.length == 1) {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {feuilleDataMatch}})}>
            <Text style={styles.text}>{score}</Text>
            <Text style={styles.text}><FontAwesome name="table" color='black'/></Text>
        </TouchableOpacity>
    }
    else{
      return <Text style={styles.text}>{score}</Text>
    }
  }

  // Return Eckbolsheim team in bold
  const highlightTeam = (team) => {
    if(team.includes('ECKBOLSHEIM')){
      return <Text style={styles.highlightText}>{team}</Text>
    }
    else {
      return team
    }
  }

  // Return G or P in order the team win or lose the game
  const win_loose = (score, dom, ext) => {
    const score_dom = score.split('-')[0]
    const score_ext = score.split('-')[1]
    if(parseInt(score_dom) > parseInt(score_ext) && dom.includes('ECKBOLSHEIM')){
      return <><Text style={styles.winText}>V</Text></>
    }
    else if(parseInt(score_dom) < parseInt(score_ext) && ext.includes('ECKBOLSHEIM')){
      return <><Text style={styles.winText}>V</Text></>
    }
    else if(score == '-'){
      return <><Text></Text></>
    }
    else{
      return <><Text style={styles.loseText}>D</Text></>
    }
  }

  const score_or_hour = (score, hour) => {
    if(score == '-'){
      return <><Text style={styles.text}>{hour.replace(':','h')}</Text></>
    }
    else{
      return <><Text style={styles.text}>{score}</Text></>
    }
  }

  const feuilleMatch = (numMatch) => {
    const feuilleDataMatch = feuilleListData.filter((item2) => item2.match == numMatch )
    if(feuilleDataMatch.length == 1 ) {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {feuilleDataMatch}})}>
            <Text style={styles.text}>feuille de match</Text>
        </TouchableOpacity>
    }
  }

  const recapMatch = (game) => {
    const feuilleDataMatch = feuilleListData.filter((item2) => item2.match == game.match )
    if(feuilleDataMatch.length == 1) {
      return <TouchableOpacity onPress={() => navigation.navigate('Recap Match', {match: {game, feuilleDataMatch}})}>
            <Text style={styles.text}>Recap match</Text>
        </TouchableOpacity>
    }
  }

  const widthArr= [25, 70, 120, 120, 50, 40, 60, 60]


  // Set an array with the data that will be read for the table
  const tableData= calendarData.map((row) => [row.match,row.date, highlightTeam(row.dom), highlightTeam(row.ext), score_or_hour(row.score, row.heure), win_loose(row.score, row.dom, row.ext), feuilleMatch(row.match), recapMatch(row)])

  
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
        <ScrollView horizontal={true}>     
        <View> 
          <Table borderStyle={{borderWidth: 1}}>
            <Row data={tableHead} widthArr={widthArr} style={styles.head}  textStyle={styles.textHead}/>
          </Table>
          <ScrollView>
            <Table borderStyle={{borderWidth: 1}}>
              <Rows data={tableData}  widthArr={widthArr}style={styles.row} textStyle={styles.text}/>
            </Table>
          </ScrollView>
        </View>
        </ScrollView> }
      </View>
    );
}


const styles = StyleSheet.create({
  head: { 
    backgroundColor: '#0bb049',
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
    fontSize: 10,
    padding: 5

  },
  textHead: { 
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
})

export default TeamCalendarComponent