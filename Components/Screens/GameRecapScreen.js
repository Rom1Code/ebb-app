import { StyleSheet, Image, Dimensions,  Modal, View , Text, Pressable} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { WebView } from 'react-native-webview';
import { Table, Row, Rows } from 'react-native-table-component';

// Modal component used in order to display the stats and video of the game the user has cliked
// 4 props are passed
// visible : boolean in order to display the modal
// game : data from the game on which the user has clicked
// modalStatsVisibleTrigger : function used in order to hide the modal
// feuilleDataMatch : data from the game  on which the user has clicked
function GameRecapScreen({route}) {
    const game = route.params.match.game
    const uri = route.params.match.game.lien_video_match

    const feuilleDataMatch = route.params.match.feuilleDataMatch

  // Get the width and height of the phone used
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  // Return the name of the team that win the game
  const teamWin = () => {
    if(game.score.split('-')[0] > game.score.split('-')[1]){
        return <View style={{height: 30, borderWidth: 1, borderRadius: 10, elevation: 25, backgroundColor:'white', marginHorizontal: 10}}><Text style={styles.winnerText}><EvilIcons name="trophy" color='gold' size={26}/>
        Vainqueur {game.dom}<EvilIcons name="trophy" color='gold' size={26}/></Text></View>
    }
    else {
        return <View><Text style={styles.winnerText}><EvilIcons name="trophy" color='gold' size={26}/>
        Vainqueur {game.ext}<EvilIcons name="trophy" color='gold' size={26}/></Text></View>
    }
  }

    return(
        <View style={{flex:1}}>       
        {/*<Image
          style={{opacity:0.1,  alignSelf:'center' , position:'absolute', top:-100}}
          source={require('../Ressources/ebb-logo.png')}
        />
          <View style={styles.gameDetailsMiddle}>
            <Text style={styles.title}>Stats match</Text>
            <View style={styles.gameDetailsRow1}>
                <Text style={styles.teamText}>{game.dom}</Text><Text style={styles.gameDetailsLabel}>{game.score.split('-')[0]} - {game.score.split('-')[1]}</Text><Text style={styles.teamText}>{game.ext}</Text>
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
            <View style={styles.teamWinContainer}>{teamWin()}</View>
    </View>*/}

        <View style={{flex:1 }}>
        <WebView 
        source={{uri: uri}}
        style={{ height:200 }}
        />
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign:'center',
    padding:10,
    fontWeight:'bold'
  },
  winnerText: {
    textAlign:'center', 
    fontSize:16, 
    fontWeight:'bold'
  },
  gameRecapContainer : {
    marginTop: 10, 
    justifyContent:'center' 
  },
  teamWinContainer: {
    justifyContent:'center', 
    marginTop: 50
  },
  gameDetailsMiddle: {
    flex:1,
  },
  gameDetailsRow1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginHorizontal: 10
  },
  teamText: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontWeight:'bold',
  },

  gameDetailsText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold',
  },
  gameDetailsLabel: {
    flex: 0.6,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight:'bold',
    color: 'white',
    fontSize: 16,
    backgroundColor: '#0bb049'
  }
});


export default GameRecapScreen