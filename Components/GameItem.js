import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { dbRef }  from './GetData'
import { child, get } from "firebase/database";

// Game item component used in the GameScreen
// 1 props is passed
// game : data for the game that came for the calendar
function GameItem({ navigation, game}) {
  // Keep track if the user click on the game item in order to display game details
  const [displayDetailsGame, setDisplayDetailsGame] = useState(false)
  // Save of all the data game for all team
  const [feuilleListData, setFeuilleListData] = useState([])

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

  // Fetch the data for the game (one game)
  const feuilleDataMatch = []
  Object.keys(feuilleListData).map((key)=>feuilleListData[key].map((item)=>game.equipe==item.equipe && game.match==item.match ? feuilleDataMatch.push(item) : null))

  // Display an icon if data for the game exist
  const statsIcon = () => {
    if(feuilleDataMatch.length != 0){
      return (
        feuilleDataMatch.map(() =><FontAwesome name="table" color='black'/>)
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
        feuilleDataMatch.map(() =><Entypo name="video" color='black'/>)
      )
      }
      else {
        return null
      }
    }



  //const statsExist = (match) => {
  //    if(feuilleDataMatch.length != 0){
   //     const exist = feuilleDataMatch.filter((item) => item.match == match.match && item.equipe == match.equipe )
   //     return exist.length
   //   }
   //   else{
   //     return 0
   //   }
  //}

  const highlighWin = (score, dom, ext) => {
    const score_dom = score.split('-')[0]
    const score_ext = score.split('-')[1]

    if(score_dom > score_ext && dom.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#00A400'}}>{score_dom} - {score_ext}</Text></>
    }
    if(score_dom < score_ext && ext.includes('ECKBOLSHEIM')){
      return <><Text style={{color:'#00A400'}}>{score_dom} - {score_ext}</Text></>
    }
    else{
      return <><Text style={{color:'red'}}>{score_dom} - {score_ext}</Text></>
    }
  }

    return (
      <>
        <View style={styles.gameContainer}>
            <View style={styles.gameContainerLeft}>
                <View style={styles.teamContainer}><Text style={styles.team}>{game.equipe.substring(0,4)}</Text></View>
                <View style={styles.hourContainer}><Text style={styles.hour}>{game.heure.replace(':','h')}</Text></View>
            </View>
            <View style={styles.gameContainerMiddle}>
              <TouchableOpacity style={{flex:1}} onPress={()=> setDisplayDetailsGame(!displayDetailsGame)}>
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
                </TouchableOpacity>
            </View>
            <View style={styles.gameContainerRight}>
                <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={() => feuilleDataMatch.length != 0 ? navigation.navigate('Stats Match', {match: {feuilleDataMatch}}) : null}>
                  <Text style={styles.score}>{highlighWin(game.score, game.dom, game.ext)}</Text>
                  <Text style={styles.score}>{statsIcon()} {videoIcon()}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.gameDetails}>
        {displayDetailsGame && game.score != '-' &&  feuilleDataMatch.length != 0 ? 
        <><View style={styles.gameDetailsLeft}><Text style={styles.gameDetailsLeftText}>Stats match</Text></View><View style={styles.gameDetailsMiddle}><View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>{game.dom}</Text><Text style={styles.gameDetailsLabel}>vs</Text><Text style={styles.gameDetailsText}>{game.ext}</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>{game.score.split('-')[0]}</Text><Text style={styles.gameDetailsLabel}>Score</Text><Text style={styles.gameDetailsText}>{game.score.split('-')[1]}</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_dom_LF}</Text><Text style={styles.gameDetailsLabel}>LF</Text><Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_ext_LF}</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_dom_2PTS_int}</Text><Text style={styles.gameDetailsLabel}>2 PTS int</Text><Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_dom_2PTS_int}</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_dom_2PTS_ext}</Text><Text style={styles.gameDetailsLabel}>2 PTS ext</Text><Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_dom_2PTS_ext}</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_dom_3PTS}</Text><Text style={styles.gameDetailsLabel}>3 PTS</Text><Text style={styles.gameDetailsText}>{feuilleDataMatch[0].equipe_dom_3PTS}</Text>
          </View>
          </View>
          <View style={styles.gameDetailsRight}></View>
          </>
          : null}
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
      fontSize: 12,
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
   },
   gameDetails: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
    textAlign: 'center',

   },
   gameDetailsMiddle: {
    flex:4,
    borderTopWidth: 0.5,
    borderTopColor: '#00A400'    ,
   },
   gameDetailsRight: {
    flex:1,
    borderLeftWidth: 2,
    borderLeftColor: '#00A400'    

   },
   gameDetailsLeft: {
    flex:1.5,
   },
   gameDetailsRow1: {
    flexDirection: 'row',
    borderBottomWidth: 1
   },
   gameDetailsText: {
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
    fontWeight:'bold',

   },
   gameDetailsLeftText: {
    flex: 1,
    textAlign: 'center',
  },
  gameDetailsLabel: {
    flex: 1,
    textAlign: 'center',
    fontWeight:'bold',
    color: 'white',
    fontSize: 12,
    backgroundColor: '#00A400'
  }
  });


  export default GameItem;