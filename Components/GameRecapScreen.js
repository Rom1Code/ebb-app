import { StyleSheet, Image, Dimensions,  Modal, View , Text, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { WebView } from 'react-native-webview';

// Modal component used in order to display the stats and video of the game the user has cliked
// 4 props are passed
// visible : boolean in order to display the modal
// game : data from the game on which the user has clicked
// modalStatsVisibleTrigger : function used in order to hide the modal
// feuilleDataMatch : data from the game  on which the user has clicked
function GameRecapScreen({route}) {
    const game = route.params.match.game
    const feuilleDataMatch = route.params.match.feuilleDataMatch

  // Get the width and height of the phone used
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  // Return the name of the team that win the game
  const teamWin = () => {
    if(game.score.split('-')[0] > game.score.split('-')[1]){
        return <Text style={styles.winnerText}><EvilIcons name="trophy" color='gold' size={26}/>
        Vainqueur {game.dom}<EvilIcons name="trophy" color='gold' size={26}/></Text>
    }
    else {
        return <Text style={styles.winnerText}><EvilIcons name="trophy" color='gold' size={26}/>
        Vainqueur {game.ext}<EvilIcons name="trophy" color='gold' size={26}/></Text>
    }
  }

    return(
        <View style={{flex:1}}>       
        <Image
          style={{opacity:0.1,  alignSelf:'center' , position:'absolute', top:-100}}
          source={require('../Ressources/ebb-logo.png')}
        />
          <View style={styles.gameDetailsMiddle}>
            <Text style={styles.title}>Stats match</Text>
            <View style={styles.gameDetailsRow1}>
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
            <View style={styles.teamWinContainer}>{teamWin()}</View>
          </View>

          {feuilleDataMatch[0].url_video !='' ? <Text style={styles.title}>Résumé du match</Text> : null}
        <View style={{flex:1 }}>
        <WebView 
        source={{uri: feuilleDataMatch[0].url_video}}
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
    padding:10
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
    borderBottomWidth: 1
  },
  gameDetailsText: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontWeight:'bold',
  },
  gameDetailsLabel: {
    flex: 0.7,
    textAlign: 'center',
    fontWeight:'bold',
    color: 'white',
    fontSize: 14,
    backgroundColor: '#0bb049'
  }
});


export default GameRecapScreen