import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SM1_calendrier, SM2_calendrier, SM3_calendrier, SF1_calendrier, SF2_calendrier, SF3_calendrier, MU17_phase1_calendrier, MU17_phase2_calendrier, 
  MU17_2_phase1_calendrier, MU17_2_phase2_calendrier, FU18_phase1_calendrier, FU18_phase2_calendrier, MU15_phase1_calendrier, MU15_phase2_calendrier, 
  MU15_2_phase1_calendrier, MU15_2_phase2_calendrier, MU15_3_phase1_calendrier , FU15_phase1_calendrier, FU15_phase2_calendrier, FU15_2_phase1_calendrier, 
  FU15_2_phase2_calendrier, MU13_phase1_calendrier, MU13_phase2_calendrier, MU13_2_phase1_calendrier, MU13_2_phase2_calendrier, FU13_phase1_calendrier, 
  FU13_phase2_calendrier, FU11_phase1_calendrier } from './Datas'

 function TeamCalendarComponent({navigation, team}) {
  
  const calendarAll = [SM1_calendrier, SM2_calendrier, SM3_calendrier, SF1_calendrier, SF2_calendrier, SF3_calendrier, MU17_phase1_calendrier, MU17_phase2_calendrier, 
    MU17_2_phase1_calendrier, MU17_2_phase2_calendrier, FU18_phase1_calendrier, FU18_phase2_calendrier, MU15_phase1_calendrier, MU15_phase2_calendrier, 
    MU15_2_phase1_calendrier, MU15_2_phase2_calendrier, MU15_3_phase1_calendrier , FU15_phase1_calendrier, FU15_phase2_calendrier, FU15_2_phase1_calendrier, 
    FU15_2_phase2_calendrier, MU13_phase1_calendrier, MU13_phase2_calendrier, MU13_2_phase1_calendrier, MU13_2_phase2_calendrier, FU13_phase1_calendrier, 
    FU13_phase2_calendrier, FU11_phase1_calendrier]

  const teamAll = ["SM1", "SM2", "SM3", "SF1", "SF2", "SF3", "MU17_phase1", "MU17_phase2", "MU17_2_phase1", "MU17_2_phase2", "FU18_phase1", "FU18_phase2", 
  "MU15_phase1", "MU15_phase2", "MU15_2_phase1", "MU15_2_phase2", "MU15_3_phase1 ", "FU15_phase1", "FU15_phase2", "FU15_2_phase1", "FU15_2_phase2", 
  "MU13_phase1", "MU13_phase2", "MU13_2_phase1", "MU13_2_phase2", "FU13_phase1", "FU13_phase2", "FU11_phase1"]

  const tableHead =['#','Date', 'Heure', 'Dom', 'Ext', 'Score']

  const teamSelected = teamAll.filter((item) => item == team )
  const calendarData = calendarAll[teamAll.indexOf(teamSelected[0])]
  const feuilleMatch = team == "SM1" ? require('../Helper/feuille_match_SM1.json') : []

  const statsExist = (item) => {
    const exist = feuilleMatch.filter((item2) => item2.match == item.Match )
    if(exist.length == 1) {
      return <TouchableOpacity onPress={() => navigation.navigate('Stats Match', {match: {item}})}><Text style={styles.text}><FontAwesome name="table" color='black'/> {item.score}</Text></TouchableOpacity>
    }
    else{
      return <Text style={styles.text}>{item.score}</Text>
    }
  }

  const tableData= calendarData.map((row) => [row.match,row.date,row.heure, row.dom, row.ext, statsExist(row)])
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