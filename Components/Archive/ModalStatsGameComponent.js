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
function ModalStatsGameComponent({navigation, visible, game, modalStatsVisibleTrigger, feuilleDataMatch}) {

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
        <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} >
        <View style={{top:height*0.14, left:{width}*0.08, zIndex:2, width:25, height:25}}>       
            <FontAwesome onPress={() => modalStatsVisibleTrigger()} name="close" color='red' size={26}/>
        </View> 
        <Image
          style={{opacity:0.2, position:'absolute', zIndex:1, width:width*0.9, height: height*0.8, alignSelf:'center'}}
          source={require('../../Ressources/ebb-logo.png')}
        />
        <View style={{padding: 10, top:height*0.1, left:width*0.05, width:width*0.9, height: height*0.7, backgroundColor:'white', borderRadius:10, elevation:20}}>
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
          </View>
            {game.url_video !='' ? 
            <View style={styles.gameRecapContainer}> 
                <Text style={styles.title}>Résumé du match</Text> 
                <WebView source={{uri: feuilleDataMatch[0].url_video}}/>        
            </View>
            : null}
                <View style={styles.teamWinContainer}>{teamWin()}</View>
        </View>
        </Modal>
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
    zIndex:1, 
    marginTop: 10, 
    flex:2, 
    justifyContent:'center' 
  },
  teamWinContainer: {
    justifyContent:'center', 
    flex:1
  },
  gameDetailsMiddle: {
    flex:2,
  },
  gameDetailsRow1: {
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  gameDetailsText: {
    flex: 1,
    fontSize: 12,
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
    fontSize: 14,
    backgroundColor: '#00A400'
  }
});


export default ModalStatsGameComponent