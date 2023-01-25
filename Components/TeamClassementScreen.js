import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



 function TeamClassementScreen({route}) {
  const [tabPressed, setTabPressed] = useState(1);
  const tableHead =['Place','Equipe', 'Pts', 'NB match', 'Victoire', 'Défaite', 'Pts marqués', 'Pts encaissés', 'Différence']
  const classementData = require('../Helper/classement_SM1.json');

  const equipe = route.params.equipe.item
  console.log(classementData[0].Equipe)
  const tableData= classementData.map((row) => [row.Place,row.Equipe,row.Pts_equipe, row.Nb_match, row.Victoire, row.Defaite, row.Pts_marques, row.Pts_encaisses, row.Difference])
  




    return (
      <View style={{ flex: 1 }}>
        <View  style={styles.tabContainer}> 
          {tabPressed == 1 ? <TouchableOpacity  style={styles.tabPressed} ><Text style={styles.tabPressedText}>Calendrier</Text></TouchableOpacity>
            : <TouchableOpacity  style={styles.tab1} onPress={()=>setTabPressed(1)} ><Text style={styles.tabText}>Calendrier</Text></TouchableOpacity>
          }
          {tabPressed == 2 ? <TouchableOpacity  style={styles.tabPressed}><Text style={styles.tabPressedText}>Classement</Text></TouchableOpacity>
            : <TouchableOpacity style={styles.tab1} onPress={()=>setTabPressed(2)} ><Text style={styles.tabText}>Classement</Text></TouchableOpacity>
          }
        </View>
        <ScrollView>
        {tabPressed == 1 ? 
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} textStyle={styles.text}/>
        </Table>
        :
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={tableData} textStyle={styles.text}/>
      </Table>}
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
    height: 40, 
    backgroundColor: '#f1f8ff'
},
  text: { 
    margin: 6, 
    textAlign: 'center' }
},

)

export default TeamClassementScreen