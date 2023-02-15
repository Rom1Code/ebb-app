import { StyleSheet, View, ScrollView, Text, ActivityIndicator  } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { dbRef }  from './GetData'
import { useEffect, useState } from 'react';
import { child, get } from "firebase/database";

 function TeamClassementComponent({route, team}) {
  const [classementData, setClassementData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      get(child(dbRef, 'classement/'+team)).then((snapshot) => {
      if (snapshot.exists()) {
        setClassementData(snapshot.val());
        setLoading(false)
      } else {
          console.log("No data available");
      }
      }).catch((error) => {
      console.error(error);
      });
  }, []);


  const tableHead =['#','Equipe', 'Pts', 'J', 'V', 'D', 'M', 'E', 'D']

  const offenseData= classementData.map((item) => item.pts_marques)
  const defenseData= classementData.map((item) => item.pts_encaisses)

  const teamIcon = (team, offense, defense) => {
    const offenseIcon = bestOffense(offense)
    const defenseIcon = bestDefense(defense)
    return <Text style={styles.text}> {offenseIcon} {defenseIcon} {highlightTeam(team)}</Text>
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

  const highlightTeam = (team) => {
    if(team.includes('ECKBOLSHEIM')){
      return <Text style={{color:'#00A400', fontWeight:'bold', fontSize:12}}>{team}</Text>
    }
    else {
      return team
    }
  }

  const highlightData = (team, data) => {
    if(team.includes('ECKBOLSHEIM')){
      return <Text style={{color:'#00A400', fontWeight:'bold', textAlign:'center', fontSize:12}}>{data}</Text>
    }
    else {
      return data
    }
  }



  const tableData= classementData.map((row) => [highlightData(row.equipe, row.place),teamIcon(row.equipe,row.pts_marques, row.pts_encaisses) ,highlightData(row.equipe, row.pts_equipe), highlightData(row.equipe, row.nb_match), highlightData(row.equipe, row.victoire), highlightData(row.equipe, row.defaite), highlightData(row.equipe, row.pts_marques), highlightData(row.equipe, row.pts_encaisses), highlightData(row.equipe, row.difference)])

    return (
    <View style={{ flex: 1 }}>
            { loading  ? 
        <ActivityIndicator size='large' color='#00A400' style={{ marginTop: 50}}/>
      :
        <ScrollView>
         <Table borderStyle={{borderWidth: 1}}>
            <Row data={tableHead} flexArr={[1, 6, 1, 1]} style={styles.head}  textStyle={styles.textHead}/>
            <Rows data={tableData} flexArr={[1, 6, 1, 1]} style={styles.row} textStyle={styles.text}/>
         </Table>
         <View style={styles.legende}>
          <Text><FontAwesome name="fire" color='orange'  /> : Meilleur attaque</Text>
          <Text><FontAwesome name="lock" color='black'  /> : Meilleur défense</Text>
         </View>
      </ScrollView>}
    </View>
      );
}


const styles = StyleSheet.create({
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
  },
  legende: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'

  }
})

export default TeamClassementComponent