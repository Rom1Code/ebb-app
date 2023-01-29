import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



 function TeamCalendarComponent({navigation, team}) {
  const tableHead =['#','Date', 'Heure', 'Dom', 'Ext', 'Score']
  const calendarSM1 = require('../Helper/calendrier_SM1.json');
  const calendarSM2 = require('../Helper/calendrier_SM2.json');
  const calendarData = team == "SM1" ? calendarSM1 : calendarSM2

  const feuilleMatch = team == "SM1" ? require('../Helper/feuille_match_SM1.json') : []

  const statsExist = (item) => {
    const exist = feuilleMatch.filter((item2) => item2.match == item.Match )
    if(exist.length == 1) {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {item}})}><Text style={styles.text}><FontAwesome name="table" color='black'/> {item.Score}</Text></TouchableOpacity>
    }
    else{
      return <Text style={styles.text}>{item.Score}</Text>
    }
  }

  const tableData= calendarData.map((row) => [row.Match,row.Date,row.Heure, row.Dom, row.Ext, statsExist(row)])
  console.log(calendarData)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Table borderStyle={{borderWidth: 1}}>
            <Row data={tableHead} flexArr={[1, 2, 1, 3, 3, 2]} style={styles.head}  textStyle={styles.textHead}/>
            <Rows data={tableData} flexArr={[1, 2, 1, 3, 3, 2]} style={styles.row} textStyle={styles.text}/>
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