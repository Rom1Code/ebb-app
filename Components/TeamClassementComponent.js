import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import { teamList, classsementList } from './Datas';

 function TeamClassementComponent({team}) {

  const tableHead =['#','Equipe', 'Pts', 'J', 'V', 'D', 'M', 'E', 'D']

  const teamSelected = teamList.filter((item) => item == team )
  const classementData = classsementList[teamAll.indexOf(teamSelected[0])]
  
  const offenseData= classementData.map((item) => item.pts_marques)
  const defenseData= classementData.map((item) => item.pts_encaisses)

  const teamIcon = (team, offense, defense) => {
    const offenseIcon = bestOffense(offense)
    const defenseIcon = bestDefense(defense)
    return <Text style={styles.text}> {offenseIcon} {defenseIcon} {team}</Text>
  }

  const bestOffense = (pts) => {
    if(pts == Math.max(...offenseData)){
      return <FontAwesome name="fire" color='orange'  />
    }
  }

  const bestDefense = (pts) => {
    if(pts == Math.min(...defenseData)){
      return <FontAwesome name="lock" color='black'  />
    }
  }

  const tableData= classementData.map((row) => [row.Place,teamIcon(row.equipe,row.pts_marques, row.pts_encaisses) ,row.pts_equipe, row.nb_match, row.victoire, row.defaite, row.pts_marques, row.pts_encaisses, row.difference])

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
  },
  icon: {
    height:5,
    width:5
  }
})

export default TeamClassementComponent