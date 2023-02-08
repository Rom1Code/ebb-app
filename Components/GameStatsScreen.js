import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { WebView } from 'react-native-webview';


 function GameStatsScreen({route}) {

  const [tabPressed, setTabPressed] = useState(1);
  const match = route.params.match.feuilleDataMatch
  console.log(match)

  const tableHead =['Numéro','Nom', 'Pts']

  const ptsDomTable = match.length == 1 ? [match[0].joueur1PTS_dom, match[0].joueur2PTS_dom ,match[0].joueur3PTS_dom, match[0].joueur4PTS_dom, match[0].joueur5PTS_dom, match[0].joueur6PTS_dom, match[0].joueur7PTS_dom, match[0].joueur8PTS_dom, match[0].joueur9PTS_dom, match[0].joueur10PTS_dom] : []
  const ptsDomTableCleaned = ptsDomTable.filter((item)=> item != undefined)
  const ptsExtTable = match.length == 1 ? [match[0].joueur1PTS_ext, match[0].joueur2PTS_ext ,match[0].joueur3PTS_ext, match[0].joueur4PTS_ext, match[0].joueur5PTS_ext, match[0].joueur6PTS_ext, match[0].joueur7PTS_ext, match[0].joueur8PTS_ext, match[0].joueur9PTS_ext, match[0].joueur10PTS_ext] : []
  const ptsExtTableCleaned = ptsExtTable.filter((item)=> item != undefined)

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

  const tableData_dom =  match.length == 1 ? [
    [match[0].joueur1Num_dom, match[0].joueur1Nom_dom, onFire("dom", parseInt(match[0].joueur1PTS_dom))],
    [match[0].joueur2Num_dom, match[0].joueur2Nom_dom, onFire("dom", match[0].joueur2PTS_dom)],
    [match[0].joueur3Num_dom, match[0].joueur3Nom_dom, onFire("dom", match[0].joueur3PTS_dom)],
    [match[0].joueur4Num_dom, match[0].joueur4Nom_dom, onFire("dom", match[0].joueur4PTS_dom)],
    [match[0].joueur5Num_dom, match[0].joueur5Nom_dom, onFire("dom", match[0].joueur5PTS_dom)],
    [match[0].joueur6Num_dom, match[0].joueur6Nom_dom, onFire("dom", match[0].joueur6PTS_dom)],
    [match[0].joueur7Num_dom, match[0].joueur7Nom_dom, onFire("dom", match[0].joueur7PTS_dom)],
    [match[0].joueur8Num_dom, match[0].joueur8Nom_dom, onFire("dom", match[0].joueur8PTS_dom)],
    [match[0].joueur9Num_dom, match[0].joueur9Nom_dom, onFire("dom", match[0].joueur9PTS_dom)],
    [match[0].joueur10Num_dom, match[0].joueur10Nom_dom, onFire("dom", match[0].joueur10PTS_dom)]
  ] : []

  const tableData_ext = match.length == 1 ? [
    [match[0].joueur1Num_ext, match[0].joueur1Nom_ext, onFire("ext", match[0].joueur1PTS_ext)],
    [match[0].joueur2Num_ext, match[0].joueur2Nom_ext, onFire("ext", match[0].joueur2PTS_ext)],
    [match[0].joueur3Num_ext, match[0].joueur3Nom_ext, onFire("ext", match[0].joueur3PTS_ext)],
    [match[0].joueur4Num_ext, match[0].joueur4Nom_ext, onFire("ext", match[0].joueur4PTS_ext)],
    [match[0].joueur5Num_ext, match[0].joueur5Nom_ext, onFire("ext", match[0].joueur5PTS_ext)],
    [match[0].joueur6Num_ext, match[0].joueur6Nom_ext, onFire("ext", match[0].joueur6PTS_ext)],
    [match[0].joueur7Num_ext, match[0].joueur7Nom_ext, onFire("ext", match[0].joueur7PTS_ext)],
    [match[0].joueur8Num_ext, match[0].joueur8Nom_ext, onFire("ext", match[0].joueur8PTS_ext)],
    [match[0].joueur9Num_ext, match[0].joueur9Nom_ext, onFire("ext", match[0].joueur9PTS_ext)],
    [match[0].joueur10Num_ext, match[0].joueur10Nom_ext, onFire("ext", match[0].joueur10PTS_ext)]
  ] : []

    return (
      <>
        <View style={{ flex: 1, marginBottom: 250 }}>
          <View  style={styles.tabContainer}> 
            {tabPressed == 1 ? <TouchableOpacity  style={styles.tabPressed} ><Text style={styles.tabPressedText}>Domicile</Text></TouchableOpacity>
              : <TouchableOpacity  style={styles.tab1} onPress={()=>setTabPressed(1)} ><Text style={styles.tabText}>Domicile</Text></TouchableOpacity>
            }
            {tabPressed == 2 ? <TouchableOpacity  style={styles.tabPressed}><Text style={styles.tabPressedText}>Visiteur</Text></TouchableOpacity>
              : <TouchableOpacity style={styles.tab1} onPress={()=>setTabPressed(2)} ><Text style={styles.tabText}>Visiteur</Text></TouchableOpacity>
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
        <WebView 
        source={{uri:'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FEBB.EckbolsheimBasketBall%2Fvideos%2F2366698796845403%2F&show_text=false&width=560&t=0'}}
        style={{   }}
        />

      </>
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
    backgroundColor: '#00A400',
    textAlign: 'center',
    color: 'white'
  },
  row: {  
    height: 35 
  },
  text: { 
    textAlign: 'center' 
  },
  textHead: { 
    color: 'white', 
    textAlign: 'center' 
  },
  legende: {
    position:'relative',
    top: -70,
    padding: 5
  }
  
})

export default GameStatsScreen