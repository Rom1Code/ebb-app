import { StyleSheet, FlatList, Text, View, TouchableOpacity, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function GamesScreen({navigation}) {

  const gamesList = require('../Helper/calendrier_SM1.json');
  const gameListPlayed = gamesList.filter((item) => item.Score != "-")

  const feuilleMatch = require('../Helper/feuille_match_SM1.json')

  const statsIcon = (match) => {
    return (
      feuilleMatch.map((item) => item.match == match ? <View><Text style={styles.text}><FontAwesome name="table" color='black'/></Text></View> : <Text></Text>)
    )
  }

  const statsExist = (match) => {
    const exist = feuilleMatch.filter((item) => item.match == match.Match )
    return exist.length
  }

    return (
      <SafeAreaView style={{ width: '100%'}}>
        <FlatList style={{ width: '100%' }}
        data={gameListPlayed}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => statsExist(item) == 1 ? navigation.navigate('Stats Match', {match: {item}}) : null}>
            <View style={styles.gameContainer}>
              <Text style={styles.team}>{item.Dom} vs {item.Ext} :</Text>
              <Text style={styles.score}> {statsIcon(item.Match)} {item.Score}</Text>
            </View>
          </TouchableOpacity>}
        />      
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    gameContainer: {
      flexDirection: 'row',
      flex:1,
      backgroundColor: 'white',
      borderBottomWidth:2,
      borderBottomColor: '#00A400',
      elevation: 24,
      alignItems: 'center', //Centered vertically
      height: 40

    },
    team: {
      padding: 2,
      flex:5,
      fontSize: 11,
    },
    score: {
      flex:1,
      color: 'green',
      textAlign: 'center',

    }  
  });


  export default GamesScreen;