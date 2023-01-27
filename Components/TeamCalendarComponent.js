import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



 function TeamCalendarComponent({}) {
  const tableHead =['#','Date', 'Heure', 'Dom', 'Ext', 'Score']
  const classementData = require('../Helper/calendrier_SM1.json');

  const tableData= classementData.map((row) => [row.Match,row.Date,row.Heure, row.Dom, row.Ext, row.Score])
  
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