import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { WebView } from 'react-native-webview';

  // Screen that display the the stats for the two time
 function GameStatsScreen({route}) { 

  // Keep track of the tab the user select
  const [tabPressed, setTabPressed] = useState(1);
  // Get the data passed in the props
  const match = route.params.match.feuilleDataMatch

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
    [match[0].joueur10Num_dom, match[0].joueur10Nom_dom, onFire("dom", match[0].joueur10PTS_dom), match[0].joueur10_LF_dom, match[0].joueur10_2PTS_int_dom, match[0].joueur10_2PTS_ext_dom, match[0].joueur10_3PTS_dom]
  ]

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
        <View style={{ flex: 1, marginBottom: 220 }}>
          <View  style={styles.tabContainer}> 
            {tabPressed == 1 ? <TouchableOpacity  style={styles.tabPressed} ><Text style={styles.tabPressedText}>Domicile</Text></TouchableOpacity>
              : <TouchableOpacity  style={styles.tab} onPress={()=>setTabPressed(1)} ><Text style={styles.tabText}>Domicile</Text></TouchableOpacity>
            }
            {tabPressed == 2 ? <TouchableOpacity  style={styles.tabPressed}><Text style={styles.tabPressedText}>Visiteur</Text></TouchableOpacity>
              : <TouchableOpacity style={styles.tab} onPress={()=>setTabPressed(2)} ><Text style={styles.tabText}>Visiteur</Text></TouchableOpacity>
            }
          </View>
          <View>
            {tabPressed == 1 ? 
            <Table borderStyle={{borderWidth: 1}}>
              <Row data={tableHead} flexArr={[1, 3, 2]} style={styles.head} textStyle={styles.textHead}/>
              <Rows data={tableData_dom} flexArr={[1, 3, 2]} style={styles.row} textStyle={styles.text}/>
            </Table>
            :
            <Table borderStyle={{borderWidth: 1 }}>
              <Row data={tableHead} flexArr={[1, 3, 2]} style={styles.head} textStyle={styles.textHead}/>
              <Rows data={tableData_ext} flexArr={[1, 3, 2]} style={styles.row} textStyle={styles.text}/>
            </Table>}
          </View>
        </View>
        <View style={styles.legende}>
            <Text><FontAwesome name="star" color='orange'  /> : Meilleur joueur</Text>
        </View>
        {match[0].url_video !='' ? <Text style={styles.title}>Résumé du match</Text> : null}
        <WebView 
        source={{uri: match[0].url_video}}
        style={{  }}
        />

      </>
    );
}


const styles = StyleSheet.create({
  tabContainer: {
    width:'100%', 
    flexDirection: 'row',
    marginBottom: 5
    },
  tab: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
    },
  tabPressed: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
    color: '#00A400',
    borderBottomWidth: 3,
    borderBottomColor:'#00A400'
    },
  tabText: {
    fontSize: 16,
    textAlign: 'center',
    height:30,
    color:'grey'
  },
  tabPressedText: {
    fontSize: 16,
    textAlign: 'center',
    height:30,
    color: '#00A400'
  },
  head: { 
    backgroundColor: '#00A400',
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
  legende: {
    position:'relative',
    top: -20,
    padding: 5
  },
  title: {
    fontSize:15,
    textAlign: 'center',
    paddingBottom:5,
    position: 'relative',
    top:-10,
    fontWeight: 'bold'
  }
})

export default GameStatsScreen