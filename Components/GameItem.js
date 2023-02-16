import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { dbRef }  from './GetData'
import { child, get } from "firebase/database";
import ModalStatsGameComponent from './ModalStatsGameComponent';

// Game item component used in the GameScreen
// 1 props is passed
// game : data for the game that came for the calendar
function GameItem({ navigation, game }) {
  // Keep track if the user click on the game item in order to display game details
  //const [displayDetailsGame, setDisplayDetailsGame] = useState(false)
  // Save of all the data game for all team
  const [feuilleListData, setFeuilleListData] = useState([])
  // Keep track if the user click on the game item in order to display the modal game details
  const [modalStatsVisible, setModalStatsVisible] = useState(false);

  // Fetch the data for the game (return one game)
  const feuilleDataMatch = []
  Object.keys(feuilleListData).map((key)=>feuilleListData[key].map((item)=>game.equipe==item.equipe && game.match==item.match ? feuilleDataMatch.push(item) : null))

  // Display an icon if data for the game exist
  const statsIcon = () => {
    if(feuilleDataMatch.length != 0){
      return (
        feuilleDataMatch.map((index) =><FontAwesome key={index} name="table" color='black'/>)
      )
      }
      else {
        return null
      }
    }

  // Display an icon if data for the game exist
  const videoIcon = () => {
    if(feuilleDataMatch.length != 0 && feuilleDataMatch[0].url_video!=''){
      return (
        feuilleDataMatch.map((index) =><Entypo  key={index} name="video" color='black'/>)
      )
      }
      else {
        return null
      }
    }

  // Display green or red score in order if Eckbolshein win or not
  const highlighWin = (heure, score, dom, ext) => {
    const score_dom = score.split('-')[0]
    const score_ext = score.split('-')[1]
    if(parseInt(score_dom) > parseInt(score_ext) && dom.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#00A400'}}>{score_dom}-{score_ext}</Text></>
    }
    else if(parseInt(score_dom) < parseInt(score_ext) && ext.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#00A400'}}>{score_dom}-{score_ext}</Text></>
    }
    else if(score == '-') {
      return <><Text style={{color:'black'}}>{heure.replace(':','h')}</Text></>
    }
    else{
      return <><Text style={{color:'red'}}>{score_dom}-{score_ext}</Text></>
    }
  }


  // Function called in the modalstatsComponent in order to hide the modal
  const modalStatsVisibleTrigger = () => {
    console.log(modalStatsVisible)
    setModalStatsVisible(!modalStatsVisible)
  }

  // Fetch one time all the data for all game
  useEffect(() => {
    // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
      get(child(dbRef, 'feuille_match/')).then((snapshot) => {
        if (snapshot.exists()) {
          setFeuilleListData(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
    }, []);
    
    // In order to render presable component if necessary, the code is doubled
    return (
      <>
        <View style={styles.gameContainer}>
        {feuilleDataMatch.length != 0 ?<ModalStatsGameComponent visible={modalStatsVisible} game={game} modalStatsVisibleTrigger={modalStatsVisibleTrigger} feuilleDataMatch={feuilleDataMatch}/> : null}

            <View style={styles.gameContainerLeft}>
                <View style={styles.teamContainer}><Text style={styles.team}>{game.equipe.substring(0,4)}</Text></View>
            </View>
            <View style={styles.gameContainerMiddle}>
            { feuilleDataMatch.length != 0 ?
              <Pressable android_ripple={{ color: '#00A400' }} style={{flex:1}} onPress={()=> setModalStatsVisible(!modalStatsVisible)}>
                <View style={styles.gameContainerMiddleItem}> 
                  { game.dom.includes("ECKBOLSHEIM") ?  <View style={styles.logoContainer}><Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /><Text style={styles.game}> {game.dom}</Text></View>
                : <Text style={styles.game}>{game.dom}</Text>}
                </View>
                <View style={styles.gameContainerMiddleItemVS}> 
                  <Text style={styles.vs}>vs</Text>
                </View> 
                <View style={styles.gameContainerMiddleItem}> 
                  { game.ext.includes("ECKBOLSHEIM") ?  <View style={styles.logoContainer}><Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /><Text style={styles.game}> {game.ext}</Text></View>
                  : <Text style={styles.game}>{game.ext}</Text>}
                </View> 
              </Pressable>
            :
            <View android_ripple={{ color: '#00A400' }} style={{flex:1}} onPress={()=> setModalStatsVisible(!modalStatsVisible)}>
              <View style={styles.gameContainerMiddleItem}> 
                { game.dom.includes("ECKBOLSHEIM") ?  <View style={styles.logoContainer}><Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /><Text style={styles.game}> {game.dom}</Text></View>
              : <Text style={styles.game}>{game.dom}</Text>}
              </View>
              <View style={styles.gameContainerMiddleItemVS}> 
                <Text style={styles.vs}>vs</Text>
              </View> 
              <View style={styles.gameContainerMiddleItem}> 
                { game.ext.includes("ECKBOLSHEIM") ?  <View style={styles.logoContainer}><Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /><Text style={styles.game}> {game.ext}</Text></View>
                : <Text style={styles.game}>{game.ext}</Text>}
              </View> 
            </View>}
            </View>
            <View style={styles.gameContainerRight}>
              { feuilleDataMatch.length != 0 ?
                <Pressable android_ripple={{ color: '#00A400' }} style={{flex:1, justifyContent:'center'}} onPress={() => navigation.navigate('Stats Match', {match: {feuilleDataMatch}}) }>
                  <Text style={styles.score}>{highlighWin(game.heure, game.score, game.dom, game.ext)}</Text>
                  <Text style={styles.score}>{statsIcon()} {videoIcon()}</Text>
                </Pressable>
              :
              <View  style={{flex:1, justifyContent:'center'}}>
                <Text style={styles.score}>{highlighWin(game.heure, game.score, game.dom, game.ext)}</Text>
              </View>
              }
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
      flexDirection: 'row',
      flex:1,
      backgroundColor: 'white',
      elevation: 24,
      height: 80,
      marginTop: 5,
    },
    gameContainerLeft: {
      flex:1.5,
      backgroundColor: '#00A400',
    },
    gameContainerMiddle: {
      flex:4,
      justifyContent: 'center', //Centered horizontally
    },
    gameContainerMiddleItem: {
      flex: 1.5,
      justifyContent: 'center', //Centered horizontally
    },
    gameContainerMiddleItemVS: {
      flex: 1,
    },
    gameContainerRight: {
      justifyContent: 'center', //Centered horizontally
      flex:1,
      borderLeftWidth: 2,
      borderLeftColor: '#00A400'    
    },
    teamContainer: {
      flex: 1,
      justifyContent: 'center', //Centered horizontally
    },
    hourContainer: {
      justifyContent: 'center', //Centered horizontally
      flex: 1,
      borderTopColor: 'white',
      borderTopWidth: 1,
    },
    team: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
    },
    hour: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    },
    game: {
      fontSize: 12,
      textAlign: 'center'
    },
    score: {
      color: 'green',
      fontSize: 13,
      textAlign: 'center'
    },
    vs: {
      textAlign: 'center'
    },
    logoContainer: {
      flexDirection:'row',
      justifyContent: 'center',
      flex: 1,
      marginTop: 6
    },
    logo: {
      height:30, 
      width:30, 
      top: -7
   }
  });

  export default GameItem;