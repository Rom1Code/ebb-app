import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SM1_classement, SM2_classement, SM3_classement, SF1_classement, SF2_classement, SF3_classement, MU17_phase1_classement, MU17_phase2_classement, 
  MU17_2_phase1_classement, MU17_2_phase2_classement, FU18_phase1_classement, FU18_phase2_classement, MU15_phase1_classement, MU15_phase2_classement, 
  MU15_2_phase1_classement, MU15_2_phase2_classement, MU15_3_phase1_classement , FU15_phase1_classement, FU15_phase2_classement, FU15_2_phase1_classement, 
  FU15_2_phase2_classement, MU13_phase1_classement, MU13_phase2_classement, MU13_2_phase1_classement, MU13_2_phase2_classement, FU13_phase1_classement, 
  FU13_phase2_classement, FU11_phase1_classement } from './Datas'

 function TeamClassementComponent({team}) {

  const classsementAll = [SM1_classement, SM2_classement, SM3_classement, SF1_classement, SF2_classement, SF3_classement, MU17_phase1_classement, MU17_phase2_classement, 
    MU17_2_phase1_classement, MU17_2_phase2_classement, FU18_phase1_classement, FU18_phase2_classement, MU15_phase1_classement, MU15_phase2_classement, 
    MU15_2_phase1_classement, MU15_2_phase2_classement, MU15_3_phase1_classement , FU15_phase1_classement, FU15_phase2_classement, FU15_2_phase1_classement, 
    FU15_2_phase2_classement, MU13_phase1_classement, MU13_phase2_classement, MU13_2_phase1_classement, MU13_2_phase2_classement, FU13_phase1_classement, 
    FU13_phase2_classement, FU11_phase1_classement]

  const teamAll = ["SM1", "SM2", "SM3", "SF1", "SF2", "SF3", "MU17_phase1", "MU17_phase2", "MU17_2_phase1", "MU17_2_phase2", "FU18_phase1", "FU18_phase2", 
  "MU15_phase1", "MU15_phase2", "MU15_2_phase1", "MU15_2_phase2", "MU15_3_phase1 ", "FU15_phase1", "FU15_phase2", "FU15_2_phase1", "FU15_2_phase2", 
  "MU13_phase1", "MU13_phase2", "MU13_2_phase1", "MU13_2_phase2", "FU13_phase1", "FU13_phase2", "FU11_phase1"]

  const tableHead =['#','Equipe', 'Pts', 'J', 'V', 'D', 'M', 'E', 'D']

  const teamSelected = teamAll.filter((item) => item == team )
  const classementData = classsementAll[teamAll.indexOf(teamSelected[0])]
  
  const offenseData= classementData.map((item) => item.pts_marques)
  const defenseData= classementData.map((item) => item.pts_encaisses)
  const teamIcon = (team, offense, defense) => {
    const offenseIcon = bestOffense(team, offense)
    const defenseIcon = bestDefense(team, defense)

    return <Text style={styles.text}> {offenseIcon} {defenseIcon} {team}</Text>

  }
  const bestOffense = (team, pts) => {
    if(pts == Math.max(...offenseData)){
      return <FontAwesome name="fire" color='orange'  />
    }
  }

  const bestDefense = (team, pts) => {
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