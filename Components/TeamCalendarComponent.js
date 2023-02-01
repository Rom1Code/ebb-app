import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { teamList, calendarList } from './Datas';

 function TeamCalendarComponent({navigation, team}) {
  
  const tableHead =['#','Date', 'Heure', 'Dom', 'Ext', 'Score']

  const teamSelected = teamList.filter((item) => item == team )
  const calendarData = calendarList[teamList.indexOf(teamSelected[0])]
  const feuilleMatch = team == "SM1" ? require('../Helper/feuille_match_SM1.json') : []

  const statsExist = (item) => {
    const exist = feuilleMatch.filter((item2) => item2.match == item.match )
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