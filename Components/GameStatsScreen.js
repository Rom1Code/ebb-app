import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



 function GameStatsScreen({route}) {
  const [tabPressed, setTabPressed] = useState(1);
  const tableHead =['Numéro','Nom', 'Pts']
  const match = route.params.match.item
  console.log(match)
  const tableData_dom=[
    [match.joueur1Num_dom, match.joueur1Nom_dom,match.joueur1PTS_dom],
    [match.joueur2Num_dom, match.joueur2Nom_dom,match.joueur2PTS_dom],
    [match.joueur3Num_dom, match.joueur3Nom_dom,match.joueur3PTS_dom],
    [match.joueur4Num_dom, match.joueur4Nom_dom,match.joueur4PTS_dom],
    [match.joueur5Num_dom, match.joueur5Nom_dom,match.joueur5PTS_dom],
    [match.joueur6Num_dom, match.joueur6Nom_dom,match.joueur6PTS_dom],
    [match.joueur7Num_dom, match.joueur7Nom_dom,match.joueur7PTS_dom],
    [match.joueur8Num_dom, match.joueur8Nom_dom,match.joueur8PTS_dom],
    [match.joueur9Num_dom, match.joueur9Nom_dom,match.joueur9PTS_dom],
    [match.joueur10Num_dom, match.joueur10Nom_dom,match.joueur10PTS_dom]
  ]

  const tableData_ext=[
    [match.joueur1Num_ext, match.joueur1Nom_ext,match.joueur1PTS_ext],
    [match.joueur2Num_ext, match.joueur2Nom_ext,match.joueur2PTS_ext],
    [match.joueur3Num_ext, match.joueur3Nom_ext,match.joueur3PTS_ext],
    [match.joueur4Num_ext, match.joueur4Nom_ext,match.joueur4PTS_ext],
    [match.joueur5Num_ext, match.joueur5Nom_ext,match.joueur5PTS_ext],
    [match.joueur6Num_ext, match.joueur6Nom_ext,match.joueur6PTS_ext],
    [match.joueur7Num_ext, match.joueur7Nom_ext,match.joueur7PTS_ext],
    [match.joueur8Num_ext, match.joueur8Nom_ext,match.joueur8PTS_ext],
    [match.joueur9Num_ext, match.joueur9Nom_ext,match.joueur9PTS_ext],
    [match.joueur10Num_ext, match.joueur10Nom_ext,match.joueur10PTS_ext]
  ]



    return (
      <View style={{ flex: 1 }}>
        <View  style={styles.tabContainer}> 
          {tabPressed == 1 ? <TouchableOpacity  style={styles.tabPressed} ><Text style={styles.tabPressedText}>Domicile</Text></TouchableOpacity>
            : <TouchableOpacity  style={styles.tab1} onPress={()=>setTabPressed(1)} ><Text style={styles.tabText}>Domicile</Text></TouchableOpacity>
          }
          {tabPressed == 2 ? <TouchableOpacity  style={styles.tabPressed}><Text style={styles.tabPressedText}>Visiteur</Text></TouchableOpacity>
            : <TouchableOpacity style={styles.tab1} onPress={()=>setTabPressed(2)} ><Text style={styles.tabText}>Visiteur</Text></TouchableOpacity>
          }
        </View>
        <Text>{route.params.match.item.dom}</Text>
        {tabPressed == 1 ? 
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData_dom} textStyle={styles.text}/>
        </Table>
        :
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={tableData_ext} textStyle={styles.text}/>
      </Table>}

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
})

export default GameStatsScreen