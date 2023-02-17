import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { dbRef }  from './GetData'
import { child, get } from "firebase/database";

// Game item component used in the GameScreen
// 1 props is passed
// game : data for the game that came for the calendar
function GameItem2({ navigation, game }) {
  // Keep track if the user click on the game item in order to display game details
  //const [displayDetailsGame, setDisplayDetailsGame] = useState(false)
  // Save of all the data game for all team
  const [feuilleListData, setFeuilleListData] = useState([])

  // Fetch the data for the game (return one game)
  const feuilleDataMatch = []
  Object.keys(feuilleListData).map((key)=>feuilleListData[key].map((item)=>game.equipe==item.equipe && game.match==item.match ? feuilleDataMatch.push(item) : null))

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
        <View style={styles.gameContainerTop}>
            <View><Text style={styles.team}>{game.equipe.substring(0,4)}</Text></View>
        </View>
            <View style={styles.gameContainerBottom}>

              <View style={styles.gameContainerMiddleItem}> 
              {game.dom.includes("ECKBOLSHEIM") ?  <Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /> : <Text style={styles.game}> {game.dom} </Text>}
              </View>
              <View style={styles.gameContainerMiddleItemVS}> 
                <Text style={styles.score}>{highlighWin(game.heure, game.score, game.dom, game.ext)}</Text>
              </View> 
              <View style={styles.gameContainerMiddleItem}> 
              {game.ext.includes("ECKBOLSHEIM") ?  <Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /> : <Text style={styles.game}> {game.ext} </Text>}
              </View> 
            </View>

        </View>
        {feuilleDataMatch.length != 0 ?
        <View style={styles.statsContainer}>
            <Pressable style={styles.statsDataContainerRight} android_ripple={{ color: '#00A400' }} onPress={() => navigation.navigate('Recap Match', {match: {game, feuilleDataMatch}})}>
                <View >
                    <Text>Stats match</Text>
                </View>
            </Pressable>
            <Pressable style={styles.statsDataContainerRight} android_ripple={{ color: '#00A400' }} onPress={() => navigation.navigate('Stats Match', {match: {feuilleDataMatch}})}>
            <View >
                <Text>Feuille de match</Text>
            </View>
            </Pressable>
        </View>
        : null}
        </>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
      flex:1,
      backgroundColor: 'white',
      elevation: 24,
      height: 90,
      marginTop: 15,
    },
    gameContainerTop: {
        flex:1.5,
        justifyContent: 'center', //Centered horizontally
        backgroundColor:'#00A400'
      },
      gameContainerBottom: {
      flexDirection: 'row',
      flex:4,
      justifyContent: 'center', //Centered horizontally
    },
    gameContainerMiddleItem: {
      flex: 1.5,
      justifyContent: 'center', //Centered horizontally
    },
    gameContainerMiddleItemVS: {
      flex: 1,
      justifyContent: 'center', //Centered horizontally
      flexDirection: 'row',
      alignItems: 'center'
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
    statsContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 24,
        height: 40,
      },
    statsDataContainerLeft: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
    },
    statsDataContainerRight: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,

    },
    team: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
    hour: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },
    game: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '500'
    },
    score: {
        color: 'green',
        fontSize: 20,
        textAlign: 'center'
    },
    vs: {
        textAlign: 'center'
    },
    logoContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        flex: 1,
        marginTop: 6,
        alignItems: 'center'
    },
    logo: {
        height:100, 
        width:100, 
        top: -17,
        left: 20,
        position:'absolute',
        opacity:1
   }
  });

  export default GameItem2;