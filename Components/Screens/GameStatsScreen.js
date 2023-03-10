import { StyleSheet, Pressable, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

  // Screen that display the the stats for the two time
 function GameStatsScreen({route}) { 

  // Keep track of the tab the user select
  const [tabPressed, setTabPressed] = useState(1);
  // Get the data passed in the props
  const match = route.params.match.feuilleDataMatch
  const score = route.params.match.game.score
  const team_dom =route.params.match.game.dom
  const team_ext =route.params.match.game.ext

  // Set the head for the table
  const tableHead =['Num','Nom', 'Pts', 'LF', '2PTS int', '2PTS ext', '3PTS']

  // Set a table with the pts for all player that be used for the onFire function
  const ptsDomTable = [match[0].joueur1PTS_dom, match[0].joueur2PTS_dom ,match[0].joueur3PTS_dom, match[0].joueur4PTS_dom, match[0].joueur5PTS_dom, match[0].joueur6PTS_dom, match[0].joueur7PTS_dom, match[0].joueur8PTS_dom, match[0].joueur9PTS_dom, match[0].joueur10PTS_dom]
  const ptsDomTableCleaned = ptsDomTable.filter((item)=> item != undefined)
  const ptsExtTable = [match[0].joueur1PTS_ext, match[0].joueur2PTS_ext ,match[0].joueur3PTS_ext, match[0].joueur4PTS_ext, match[0].joueur5PTS_ext, match[0].joueur6PTS_ext, match[0].joueur7PTS_ext, match[0].joueur8PTS_ext, match[0].joueur9PTS_ext, match[0].joueur10PTS_ext]
  const ptsExtTableCleaned = ptsExtTable.filter((item)=> item != undefined)

  // Get and return the player who score the most
  const onFire = (team, pts) => {
    var max
    if(team == "dom"){
      max = Math.max(...ptsDomTableCleaned)
    }
    else {
      max = Math.max(...ptsExtTableCleaned)
    }
    if(pts == max){
      return <View><Text style={styles.text}><FontAwesome name="star" color='orange'  />{ pts}</Text></View>
    }
    else{
      return <View><Text style={styles.text}>{ pts}</Text></View>
    }
  }

  // Set the data table for dom team
  const tableData_dom = [
    [match[0].joueur1Num_dom, match[0].joueur1Nom_dom, onFire("dom", parseInt(match[0].joueur1PTS_dom)), match[0].joueur1_LF_dom, match[0].joueur1_2PTS_int_dom, match[0].joueur1_2PTS_ext_dom, match[0].joueur1_3PTS_dom],
    [match[0].joueur2Num_dom, match[0].joueur2Nom_dom, onFire("dom", match[0].joueur2PTS_dom), match[0].joueur2_LF_dom, match[0].joueur2_2PTS_int_dom, match[0].joueur2_2PTS_ext_dom, match[0].joueur2_3PTS_dom],
    [match[0].joueur3Num_dom, match[0].joueur3Nom_dom, onFire("dom", match[0].joueur3PTS_dom), match[0].joueur3_LF_dom, match[0].joueur3_2PTS_int_dom, match[0].joueur3_2PTS_ext_dom, match[0].joueur3_3PTS_dom],
    [match[0].joueur4Num_dom, match[0].joueur4Nom_dom, onFire("dom", match[0].joueur4PTS_dom), match[0].joueur4_LF_dom, match[0].joueur4_2PTS_int_dom, match[0].joueur4_2PTS_ext_dom, match[0].joueur4_3PTS_dom],
    [match[0].joueur5Num_dom, match[0].joueur5Nom_dom, onFire("dom", match[0].joueur5PTS_dom), match[0].joueur5_LF_dom, match[0].joueur5_2PTS_int_dom, match[0].joueur5_2PTS_ext_dom, match[0].joueur5_3PTS_dom],
    [match[0].joueur6Num_dom, match[0].joueur6Nom_dom, onFire("dom", match[0].joueur6PTS_dom), match[0].joueur6_LF_dom, match[0].joueur6_2PTS_int_dom, match[0].joueur6_2PTS_ext_dom, match[0].joueur6_3PTS_dom],
    [match[0].joueur7Num_dom, match[0].joueur7Nom_dom, onFire("dom", match[0].joueur7PTS_dom), match[0].joueur7_LF_dom, match[0].joueur7_2PTS_int_dom, match[0].joueur7_2PTS_ext_dom, match[0].joueur7_3PTS_dom],
    [match[0].joueur8Num_dom, match[0].joueur8Nom_dom, onFire("dom", match[0].joueur8PTS_dom), match[0].joueur8_LF_dom, match[0].joueur8_2PTS_int_dom, match[0].joueur8_2PTS_ext_dom, match[0].joueur8_3PTS_dom],
    [match[0].joueur9Num_dom, match[0].joueur9Nom_dom, onFire("dom", match[0].joueur9PTS_dom), match[0].joueur9_LF_dom, match[0].joueur9_2PTS_int_dom, match[0].joueur9_2PTS_ext_dom, match[0].joueur9_3PTS_dom],
    [match[0].joueur10Num_dom, match[0].joueur10Nom_dom, onFire("dom", match[0].joueur10PTS_dom), match[0].joueur10_LF_dom, match[0].joueur10_2PTS_int_dom, match[0].joueur10_2PTS_ext_dom, match[0].joueur10_3PTS_dom, ]
  ]

  // Set the footer for the table
  const tableFoot_dom =['','TOTAL', score.split('-')[0], match[0].equipe_dom_LF, match[0].equipe_dom_2PTS_int, match[0].equipe_dom_2PTS_ext, match[0].equipe_dom_3PTS]
  // Set the footer for the table
  const tableFoot_ext =['','TOTAL', score.split('-')[1], match[0].equipe_ext_LF, match[0].equipe_ext_2PTS_int, match[0].equipe_ext_2PTS_ext, match[0].equipe_ext_3PTS]


  // Set the data table for ext team
  const tableData_ext = [
    [match[0].joueur1Num_ext, match[0].joueur1Nom_ext, onFire("ext", match[0].joueur1PTS_ext), match[0].joueur1_LF_ext, match[0].joueur1_2PTS_int_ext, match[0].joueur1_2PTS_ext_ext, match[0].joueur1_3PTS_ext],
    [match[0].joueur2Num_ext, match[0].joueur2Nom_ext, onFire("ext", match[0].joueur2PTS_ext), match[0].joueur2_LF_ext, match[0].joueur2_2PTS_int_ext, match[0].joueur2_2PTS_ext_ext, match[0].joueur2_3PTS_ext],
    [match[0].joueur3Num_ext, match[0].joueur3Nom_ext, onFire("ext", match[0].joueur3PTS_ext), match[0].joueur3_LF_ext, match[0].joueur3_2PTS_int_ext, match[0].joueur3_2PTS_ext_ext, match[0].joueur3_3PTS_ext],
    [match[0].joueur4Num_ext, match[0].joueur4Nom_ext, onFire("ext", match[0].joueur4PTS_ext), match[0].joueur4_LF_ext, match[0].joueur4_2PTS_int_ext, match[0].joueur4_2PTS_ext_ext, match[0].joueur4_3PTS_ext],
    [match[0].joueur5Num_ext, match[0].joueur5Nom_ext, onFire("ext", match[0].joueur5PTS_ext), match[0].joueur5_LF_ext, match[0].joueur5_2PTS_int_ext, match[0].joueur5_2PTS_ext_ext, match[0].joueur5_3PTS_ext],
    [match[0].joueur6Num_ext, match[0].joueur6Nom_ext, onFire("ext", match[0].joueur6PTS_ext), match[0].joueur6_LF_ext, match[0].joueur6_2PTS_int_ext, match[0].joueur6_2PTS_ext_ext, match[0].joueur6_3PTS_ext],
    [match[0].joueur7Num_ext, match[0].joueur7Nom_ext, onFire("ext", match[0].joueur7PTS_ext), match[0].joueur7_LF_ext, match[0].joueur7_2PTS_int_ext, match[0].joueur7_2PTS_ext_ext, match[0].joueur7_3PTS_ext],
    [match[0].joueur8Num_ext, match[0].joueur8Nom_ext, onFire("ext", match[0].joueur8PTS_ext), match[0].joueur8_LF_ext, match[0].joueur8_2PTS_int_ext, match[0].joueur8_2PTS_ext_ext, match[0].joueur8_3PTS_ext],
    [match[0].joueur9Num_ext, match[0].joueur9Nom_ext, onFire("ext", match[0].joueur9PTS_ext), match[0].joueur9_LF_ext, match[0].joueur9_2PTS_int_ext, match[0].joueur9_2PTS_ext_ext, match[0].joueur9_3PTS_ext],
    [match[0].joueur10Num_ext, match[0].joueur10Nom_ext, onFire("ext", match[0].joueur10PTS_ext), match[0].joueur10_LF_ext, match[0].joueur10_2PTS_int_ext, match[0].joueur10_2PTS_ext_ext, match[0].joueur10_3PTS_ext]
  ] 

    return (
      <>
        <View style={{ flex: 1 }}>
          <View  style={styles.tabContainer}> 
            {tabPressed == 1 ? <View style={styles.tab}><Pressable android_ripple={{ color: '#0bb049' }} style={styles.tabPressed} ><Text style={styles.tabPressedText}>{team_dom}</Text></Pressable></View>
              : <View style={styles.tab}><Pressable android_ripple={{ color: '#0bb049' }} style={styles.tabNotPressed} onPress={()=>setTabPressed(1)} ><Text style={styles.tabText}>{team_dom}</Text></Pressable></View>
            }
            {tabPressed == 2 ? <View style={styles.tab}><Pressable android_ripple={{ color: '#0bb049' }} style={styles.tabPressed}><Text style={styles.tabPressedText}>{team_ext}</Text></Pressable></View>
              : <View style={styles.tab}><Pressable android_ripple={{ color: '#0bb049' }} style={styles.tabNotPressed} onPress={()=>setTabPressed(2)} ><Text style={styles.tabText}>{team_ext}</Text></Pressable></View>
            }
          </View>
          <View style={{height: 385}}>
            {tabPressed == 1 ? 
            <Table borderStyle={{borderWidth: 1}}>
              <Row data={tableHead} flexArr={[1, 3, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.textHead}/>
              <Rows data={tableData_dom} flexArr={[1, 3, 1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text}/>
             </Table>
            :
            <Table borderStyle={{borderWidth: 1 }}>
              <Row data={tableHead} flexArr={[1, 3, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.textHead}/>
              <Rows data={tableData_ext} flexArr={[1, 3, 1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text}/>
            </Table>}
          </View>
          <View >
            {tabPressed == 1 ? 
            <Table borderStyle={{borderWidth: 1}}>
              <Row data={tableFoot_dom} flexArr={[1, 3, 1, 1, 1, 1, 1]} style={styles.footer} textStyle={styles.textFooter}/>
            </Table>
            :
            <Table borderStyle={{borderWidth: 1}}>
              <Row data={tableFoot_ext} flexArr={[1, 3, 1, 1, 1, 1, 1]} style={styles.footer} textStyle={styles.textFooter}/>
            </Table>}
          </View>

        </View>
      </>
    );
}


const styles = StyleSheet.create({
  tabContainer: {
    width:'100%', 
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor:'white'
    },
  tab: {
    flex:1, 
    borderRadius:5, 
    overflow: 'hidden'
  },
  tabNotPressed: {
    backgroundColor: 'white',
    justifyContent:'center',
    },
  tabPressed: {
    backgroundColor: 'white',
    justifyContent:'center',
    color: '#0bb049',
    },
  tabText: {
    fontSize: 14,
    textAlign: 'center',
    height:40,
    color:'grey'
  },
  tabPressedText: {
    fontSize: 14,
    textAlign: 'center',
    height:40,
    color: '#0bb049',
    borderBottomWidth: 3,
    borderBottomColor:'#0bb049',
  },
  head: { 
    backgroundColor: '#0bb049',
    height: 35 
  },
  row: {  
    height: 35 
  },
  text: { 
    textAlign: 'center' 
  },
  textHead: { 
    color: 'white', 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  footer: { 
    backgroundColor: '#0bb049',
    heigth: 35,
  },
  textFooter: { 
    color: 'white', 
    textAlign: 'center',
    fontWeight: 'bold',
  },

})

export default GameStatsScreen