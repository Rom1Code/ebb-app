import { StyleSheet, FlatList, Text, View, TouchableOpacity, SectionList } from 'react-native';
import { and } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SM1_calendrier, SM2_calendrier, SM3_calendrier, SF1_calendrier, SF2_calendrier, SF3_calendrier, MU17_phase1_calendrier, MU17_phase2_calendrier, 
  MU17_2_phase1_calendrier, MU17_2_phase2_calendrier, FU18_phase1_calendrier, FU18_phase2_calendrier, MU15_phase1_calendrier, MU15_phase2_calendrier, 
  MU15_2_phase1_calendrier, MU15_2_phase2_calendrier, MU15_3_phase1_calendrier , FU15_phase1_calendrier, FU15_phase2_calendrier, FU15_2_phase1_calendrier, 
  FU15_2_phase2_calendrier, MU13_phase1_calendrier, MU13_phase2_calendrier, MU13_2_phase1_calendrier, MU13_2_phase2_calendrier, FU13_phase1_calendrier, 
  FU13_phase2_calendrier, FU11_phase1_calendrier } from './Datas'



function GamesScreen({navigation}) {

  const calendarAll = [SM1_calendrier, SM2_calendrier, SM3_calendrier, SF1_calendrier, SF2_calendrier, SF3_calendrier, MU17_phase1_calendrier, MU17_phase2_calendrier, 
    MU17_2_phase1_calendrier, MU17_2_phase2_calendrier, FU18_phase1_calendrier, FU18_phase2_calendrier, MU15_phase1_calendrier, MU15_phase2_calendrier, 
    MU15_2_phase1_calendrier, MU15_2_phase2_calendrier, MU15_3_phase1_calendrier , FU15_phase1_calendrier, FU15_phase2_calendrier, FU15_2_phase1_calendrier, 
    FU15_2_phase2_calendrier, MU13_phase1_calendrier, MU13_phase2_calendrier, MU13_2_phase1_calendrier, MU13_2_phase2_calendrier, FU13_phase1_calendrier, 
    FU13_phase2_calendrier, FU11_phase1_calendrier]
  const finalCalendrier = []
  calendarAll.map((item)=> item.map((item2) => finalCalendrier.push(item2)))
  console.log(finalCalendrier)
  const gameListPlayed = finalCalendrier.filter((item) => item.score != "-")
  const feuilleMatch = require('../Helper/feuille_match_SM1.json')

  const statsIcon = (match) => {
    return (
      feuilleMatch.map((item) => item.match == match  ? <View><Text style={styles.text}><FontAwesome name="table" color='black'/></Text></View> : <Text></Text>)
    )
  }

  const statsExist = (match) => {
    const exist = feuilleMatch.filter((item) => item.match == match.match )
    return exist.length
  }

    return (
      <SafeAreaView style={{ width: '100%'}}>
        <FlatList style={{ width: '100%' }}
        data={gameListPlayed}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => statsExist(item) == 1 ? navigation.navigate('Stats Match', {match: {item}}) : null}>
            <View style={styles.gameContainer}>
              <Text style={styles.team}>{item.equipe}</Text>
              <Text style={styles.game}>{item.dom} vs {item.ext} :</Text>
              <Text style={styles.score}> {statsIcon(item.match)} {item.score}</Text>
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
      flex:1,
      textAlign: 'center',
      backgroundColor: '#00A400',
      color: 'white',
      marginRight: 5
    },
    game: {
      padding: 2,
      flex:5,
      fontSize: 11,
    },
    score: {
      flex:1,
      color: 'green',
      textAlign: 'center',
      fontSize: 11,
    }  
  });


  export default GamesScreen;