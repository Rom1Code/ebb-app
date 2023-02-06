import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { teamList, calendarList } from './Datas';
import { dbRef }  from './GetData'
import { useEffect, useState } from 'react';
import { child, get } from "firebase/database";

 function TeamCalendarComponent({navigation, team}) {
  const [calendarData, setCalendarData] = useState([])

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
  }, []);

  console.log(calendarData)
  const tableHead =['#','Date', 'Heure', 'Dom', 'Ext', 'Score']

  //const teamSelected = teamList.filter((item) => item == team )
  //const calendarData = calendarList[teamList.indexOf(teamSelected[0])]
  const feuilleMatch = team == "SM1" ? require('../Helper/feuille_match_SM1.json') : []

  const statsExist = (game) => {
    const exist = feuilleMatch.filter((item2) => item2.match == game.match )
    if(exist.length == 1) {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {game}})}>
            <Text style={styles.text}><FontAwesome name="table" color='black'/> {game.score}</Text>
        </TouchableOpacity>
    }
    else{
      return <Text style={styles.text}>{game.score}</Text>
    }
  }

  const tableData= calendarData.map((row) => [row.match,row.date,row.heure, row.dom, row.ext, statsExist(row)])
  console.log(tableData)
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