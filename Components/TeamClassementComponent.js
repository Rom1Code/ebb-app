import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


 function TeamClassementComponent({route}) {
  const tableHead =['#','Equipe', 'Pts', 'NB match', 'V', 'D', 'Marqués', 'Encaissés', 'Diff']
  const classementData = require('../Helper/classement_SM1.json');

  const tableData= classementData.map((row) => [row.Place,row.Equipe,row.Pts_equipe, row.Nb_match, row.Victoire, row.Defaite, row.Pts_marques, row.Pts_encaisses, row.Difference])

    return (
    <View style={{ flex: 1 }}>
        <ScrollView>
         <Table borderStyle={{borderWidth: 1}}>
            <Row data={tableHead} flexArr={[1, 6, 1, 1]} style={styles.head}  textStyle={styles.textHead}/>
            <Rows data={tableData} flexArr={[1, 6, 1, 1]} style={styles.row} textStyle={styles.text}/>
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
    height: 35  }
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

export default TeamClassementComponent