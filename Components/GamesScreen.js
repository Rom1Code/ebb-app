import { StyleSheet, FlatList, Text, View, TouchableOpacity, Button } from 'react-native';
const list = [{dom:'Eckbo', ext:'SUS', score_dom:'99', score_ext:'55'},{dom:'Eckbo', ext:'SUS', score_dom:'99', score_ext:'55'}]


function GamesScreen({navigation}) {
  const gamesList = require('../Helper/feuille_match.json');
  console.log(gamesList)

    return (
      <View style={{ flex: 1, }}>
        <FlatList style={{ width: '100%' }}
        data={gamesList}
        renderItem={({item}) => 
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Stats Match', {match: {item}})}>
            <Text style={styles.item}>{item.equipe_dom} vs {item.equipe_ext} :  {item.score_dom} - {item.score_ext}</Text>
          </TouchableOpacity>}
      />      
      </View>
    );
  }

  const styles = StyleSheet.create({
    touch: {
      verticalAlign: 'center',
      justifyContent: 'center',
  
    },
    item: {
      fontSize: 18,
      height: 40,
      backgroundColor: 'white',
      color: '#00A400',
      //borderRadius:10,
      elevation: 24,
      borderBottomWidth:2,
      borderBottomColor: '#00A400',
      textAlign: 'center',
    },
  
  });


  export default GamesScreen;