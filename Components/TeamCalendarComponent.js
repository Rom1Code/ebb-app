import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { dbRef }  from './GetData'
import { useEffect, useState } from 'react';
import { child, get } from "firebase/database";
import Entypo from 'react-native-vector-icons/Entypo';

 function TeamCalendarComponent({navigation, team}) {
  const [calendarData, setCalendarData] = useState([])
  const [feuilleListData, setFeuilleListData] = useState([])

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
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
  }, []);

  const tableHead =['#','Date', 'Heure', 'Dom', 'Ext', 'Score']

  const statsExist = (game) => {
    const feuilleDataMatch = feuilleListData.filter((item2) => item2.match == game.match )
    if(feuilleDataMatch.length == 1 && feuilleDataMatch[0].url_video !='') {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {feuilleDataMatch}})}>
            <Text style={styles.text}>{game.score}</Text>
            <Text style={styles.text}><FontAwesome name="table" color='black'/> <Entypo name="video" color='black'/></Text>
        </TouchableOpacity>
    }
    else{
      return <Text style={styles.text}>{game.score}</Text>
    }
  }

  // Display an icon if data for the game exist
  const videoIcon = () => {
    if(feuilleDataMatch.length != 0 && feuilleDataMatch[0].url_video!=''){
      return (
        feuilleDataMatch.map(() =><Entypo name="video" color='black'/>)
      )
      }
      else {
        return null
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


  const tableData= calendarData.map((row) => [row.match,row.date,row.heure, highlightTeam(row.dom), highlightTeam(row.ext), statsExist(row)])
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Table borderStyle={{borderWidth: 1}}>
            <Row data={tableHead} flexArr={[1, 2, 1.5, 3, 3, 2]} style={styles.head}  textStyle={styles.textHead}/>
            <Rows data={tableData} flexArr={[1, 2, 1.5, 3, 3, 2]} style={styles.row} textStyle={styles.text}/>
          </Table>
      </ScrollView>
      </View>
    );
}


const styles = StyleSheet.create({
  tabContainer: {
    width:'100%', 
    flexDirection: 'row',
    },
  tab1: {
    flex:1,
    backgroundColor: '#00A400',
    justifyContent:'center',
    borderRightWidth: 1,
    borderRightColor:'white'
    },
  tab2: {
    flex:1,
    backgroundColor: '#00A400',
    justifyContent:'center',
    },
  tabPressed: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
    color: '#00A400'
    },
  tabText: {
    fontSize: 20,
    textAlign: 'center',
    height:30,
    color:'white'
  },
  tabPressedText: {
    fontSize: 20,
    textAlign: 'center',
    height:30,
    color: '#00A400'
  },
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
  }
})

export default TeamCalendarComponent