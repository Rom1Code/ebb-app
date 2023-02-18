import { Text, View, Pressable, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { dbRef }  from './GetData'
import { child, get } from "firebase/database";
import { teamCat } from './Datas';

// Game item component used in the GameScreen
// 1 props is passed
// game : data for the game that came for the calendar
function GameItem2({ navigation, game }) {
  // Keep track if the user click on the game item in order to display game details
  //const [displayDetailsGame, setDisplayDetailsGame] = useState(false)
  // Save of all the data game for all team
  const [feuilleListData, setFeuilleListData] = useState([])
  // Save classement data for the team
  const [classementData, setClassementData] = useState([])

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


  // Fetch the data (level, group) for the team
  const dataTeam = teamCat.map((item)=> item.teamList.filter((item)=>item.team==game.equipe)).filter((item)=>item.length!=0)[0]
  const teamLevel = dataTeam[0].level
  const teamGroup = dataTeam[0].group
  
  // Fetch the data (rank, win and lose) for the team
  const data_dom_team = classementData.filter((item)=>  item.equipe== game.dom)
  const data_ext_team = classementData.filter((item)=> item.equipe== game.ext)

  // Fetch one time all the data for all game
  useEffect(() => {
    // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
      get(child(dbRef, 'feuille_match/')).then((snapshot) => {
        if (snapshot.exists()) {
          setFeuilleListData(snapshot.val());
          setLoading(false)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
    }, []);

      // Fetch one time all the data for all game

  useEffect(() => {
      get(child(dbRef, 'classement/'+game.equipe)).then((snapshot) => {
        if (snapshot.exists()) {
          setClassementData(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        });
    }, []);

    
    // In order to render presable component if necessary, the code is doubled
    return (
      <>
      {data_dom_team.length == 0 && data_ext_team.length == 0 ? 
      
      <ActivityIndicator size='large' color='#00A400' style={{ marginTop: 50}}/> : 
      <>
        <View style={styles.gameContainer}>
        <View style={styles.gameContainerTop}>
            <View><Text style={styles.team}>{game.equipe.substring(0,4)} - {teamLevel} - {teamGroup} </Text></View>
        </View>
            <View style={styles.gameContainerBottom}>

              <View style={styles.gameContainerMiddleItem}> 
              {game.dom.includes("ECKBOLSHEIM") ?  
              <View style={styles.logoContainer}>
                <Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} />
               <Text style={{textAlign:'center', fontSize:10, flex:1}}>{data_dom_team[0].place}{data_dom_team[0].place==1 ? 'er':'ème'} ({data_dom_team[0].victoire}V - {data_dom_team[0].defaite}D)</Text>
              </View>
              : <View> 
                <Text style={styles.game}> {game.dom} </Text>
                <Text style={{textAlign:'center', fontSize:10}}>{data_dom_team[0].place}{data_dom_team[0].place==1 ? 'er':'ème'} ({data_dom_team[0].victoire}V - {data_dom_team[0].defaite}D)</Text>
                </View>}
              
              </View>
              <View style={styles.gameContainerMiddleItemVS}> 
                <Text style={styles.score}>{highlighWin(game.heure, game.score, game.dom, game.ext)}</Text>
              </View> 
              <View style={styles.gameContainerMiddleItem}> 
              {game.ext.includes("ECKBOLSHEIM") ?  
              <View style={styles.logoContainer}>
                  <Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} />
                  <Text style={{textAlign:'center', fontSize:10, flex:1}}>{data_ext_team[0].place}{data_ext_team[0].place==1 ? 'er':'ème'} ({data_ext_team[0].victoire}V - {data_ext_team[0].defaite}D)</Text>
              </View>
            : <View><Text style={styles.game}> {game.ext} </Text>
               <Text style={{textAlign:'center', fontSize:10}}>{data_ext_team[0].place}{data_ext_team[0].place==1 ? 'er':'ème'} ({data_ext_team[0].victoire}V - {data_dom_team[0].defaite}D)</Text>
              </View>}
              </View> 
            </View>

        </View>
        {feuilleDataMatch.length != 0 ?
        <View style={styles.statsContainer}>
            <Pressable style={styles.statsDataContainerLeft} android_ripple={{ color: '#00A400' }} onPress={() => navigation.navigate('Recap Match', {match: {game, feuilleDataMatch}})}>
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
        }
        </>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
      flex:1,
      backgroundColor: 'white',
      elevation: 24,
      height: 110,
      marginTop: 15,
    },
    gameContainerTop: {
        flex:1,
        justifyContent: 'center', //Centered horizontally
        backgroundColor:'#00A400'
      },
      gameContainerBottom: {
      flexDirection: 'row',
      flex:4,
      justifyContent: 'center', //Centered horizontally
    },
    gameContainerMiddleItem: {
      flex: 2,
      justifyContent: 'center', //Centered horizontally
    },
    gameContainerMiddleItemVS: {
      flex: 1.5,
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
        justifyContent: 'center',
        flex: 1,
        marginTop: 6,
        alignItems: 'center'
    },
    logo: {
        height:100, 
        width:100, 
        opacity:1,
        alignItems: 'center',
        flex:2
   }
  });

  export default GameItem2;