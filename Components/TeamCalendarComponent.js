import { StyleSheet, TouchableOpacity, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { dbRef }  from './GetData'
import { useEffect, useState } from 'react';
import { child, get } from "firebase/database";
import Entypo from 'react-native-vector-icons/Entypo';

 function TeamCalendarComponent({navigation, team}) {
  const [calendarData, setCalendarData] = useState([])
  const [feuilleListData, setFeuilleListData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      get(child(dbRef, 'calendrier/'+team)).then((snapshot) => {
      if (snapshot.exists()) {
        setCalendarData(snapshot.val());
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

  const tableHead =['#','Date', 'Heure', 'Dom', 'Ext', 'Score', 'G/P']

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


  const highlightTeam = (team) => {
    if(team.includes('ECKBOLSHEIM')){
      return <Text style={{color:'#00A400', fontSize:10, textAlign:'center'}}>{team}</Text>
    }
    else {
      return team
    }
  }

  const win_loose = (score, dom, ext) => {
    const score_dom = score.split('-')[0]
    const score_ext = score.split('-')[1]
    if(parseInt(score_dom) > parseInt(score_ext) && dom.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#00A400', textAlign:'center'}}>G</Text></>
    }
    else if(parseInt(score_dom) < parseInt(score_ext) && ext.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#00A400', textAlign:'center'}}>G</Text></>
    }
    else if(score == '-'){
      return <><Text></Text></>
    }
    else{
      return <><Text style={{color:'red', textAlign:'center'}}>P</Text></>
    }
  }



  const tableData= calendarData.map((row) => [row.match,row.date,row.heure, highlightTeam(row.dom), highlightTeam(row.ext), statsExist(row.match, row.score), win_loose(row.score, row.dom, row.ext) ])
    
  return (
      <View style={{ flex: 1 }}>
                    { loading  ? 
        <ActivityIndicator size='large' color='#00A400' style={{ marginTop: 50}}/>
      :
        <>      
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={tableHead} flexArr={[1, 2, 1.5, 3, 3, 2, 1]} style={styles.head}  textStyle={styles.textHead}/>
        </Table>
        <ScrollView>
          <Table borderStyle={{borderWidth: 1}}>
            <Rows data={tableData} flexArr={[1, 2, 1.5, 3, 3, 2, 1]} style={styles.row} textStyle={styles.text}/>
          </Table>
        </ScrollView>
        <View style={styles.legende}>
              <Text><Entypo name="video" color='black'/> : Vidéo disponible</Text>
              <Text><FontAwesome name="table" color='black'/> : Stats disponible</Text>
        </View>
        </> }

      </View>
    );
}


const styles = StyleSheet.create({
  head: { 
    flex: 1, 
    backgroundColor: '#00A400',
    textAlign: 'center',
    color: 'white'
  },
  row: {  
    height: 40  }
    ,
  text: { 
    textAlign: 'center',
    fontSize: 10
  },
  textHead: { 
    textAlign: 'center',
    color: 'white'
  },
  legende: {
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    height: 50,
    alignItems:'center',
    marginTop: 5
  }

})

export default TeamCalendarComponent