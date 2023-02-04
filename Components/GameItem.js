import { Text, View, TouchableOpacity, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { useState } from 'react';

const statsIcon = (match) => {
    return (
      feuilleMatch.map((item) => item.match == match  ? <View><Text style={styles.text}><FontAwesome name="table" color='black'/></Text></View> : <Text></Text>)
    )
  }

const feuilleMatch = require('../Helper/feuille_match_SM1.json')


const statsExist = (match) => {
    const exist = feuilleMatch.filter((item) => item.match == match.match )
    return exist.length
}

const highlighWin = (score) => {
  const dom = score.split('-')[0]
  const ext = score.split('-')[1]

  if(dom > ext){
    return <><Text style={{color:'#00A400'}}>{dom}</Text><Text>- {ext}</Text></>
  }
  else{
    return <><Text >{dom}</Text><Text style={{color:'#00A400'}}>- {ext}</Text></>
  }
}


function GameItem({ navigation, item}) {
  const [displayDetailsGame, setDisplayDetailsGame] = useState(false)
  console.log(displayDetailsGame)

    return (
      <>
        <View style={styles.gameContainer}>
            <View style={styles.gameContainerLeft}>
                <View style={styles.teamContainer}><Text style={styles.team}>{item.equipe.substring(0,4)}</Text></View>
                <View style={styles.hourContainer}><Text style={styles.hour}>{item.heure.replace(':','h')}</Text></View>
            </View>
            <View style={styles.gameContainerMiddle}>
              <TouchableOpacity style={{flex:1}} onPress={()=>setDisplayDetailsGame(!displayDetailsGame)}>
                <View style={styles.gameContainerMiddleItem}> 
                  { item.dom.includes("ECKBOLSHEIM") ?  <View style={styles.logoContainer}><Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /><Text style={styles.game}> {item.dom}</Text></View>
                : <Text style={styles.game}>{item.dom}</Text>}
                </View>
                <View style={styles.gameContainerMiddleItem}> 
                  <Text style={styles.vs}>vs</Text>
                </View> 
                <View style={styles.gameContainerMiddleItem}> 
                  { item.ext.includes("ECKBOLSHEIM") ?  <View style={styles.logoContainer}><Image source={require('../Ressources/ebb-logo.png')} style={styles.logo} /><Text style={styles.game}> {item.ext}</Text></View>
                  : <Text style={styles.game}>{item.ext}</Text>}
                </View> 
                </TouchableOpacity>
            </View>
            <View style={styles.gameContainerRight}>
                <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={() => statsExist(item) == 1 ? navigation.navigate('Stats Match', {match: {item}}) : null}>
                  <Text style={styles.score}>{statsIcon(item.match)} {highlighWin(item.score)}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.gameDetails}>
        {displayDetailsGame ? <><View style={styles.gameDetailsLeft}><Text style={styles.gameDetailsLeftText}>Stats match</Text></View><View style={styles.gameDetailsMiddle}><View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>{item.dom}</Text><Text style={styles.gameDetailsText}>vs</Text><Text style={styles.gameDetailsText}>{item.ext}</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>2</Text><Text style={styles.gameDetailsText}>LF</Text><Text style={styles.gameDetailsText}>3</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>20</Text><Text style={styles.gameDetailsText}>2 PTS</Text><Text style={styles.gameDetailsText}>15</Text>
          </View>
          <View style={styles.gameDetailsRow1}>
          <Text style={styles.gameDetailsText}>5</Text><Text style={styles.gameDetailsText}>3 PTS</Text><Text style={styles.gameDetailsText}>3</Text>
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
      height: 70,
      marginTop: 5,
    },
    gameContainerLeft: {
      flex:1.5,
      backgroundColor: '#00A400',
    },
    gameContainerMiddle: {
      flex:4,
      padding: 5,
    },
    gameContainerMiddleItem: {
      flex: 1,
      justifyContent: 'center', //Centered horizontally
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
      fontSize: 11,
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
      marginTop: 3
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
    padding: 4
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
   },
   gameDetailsLeftText: {
    flex: 1,
    textAlign: 'center',
  }
  });


  export default GameItem;