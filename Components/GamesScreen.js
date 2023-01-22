import { StyleSheet, FlatList, Text, View, TouchableOpacity, Button } from 'react-native';

const list = [{dom:'Eckbo', ext:'SUS', score_dom:'99', score_ext:'55'},{dom:'Eckbo', ext:'SUS', score_dom:'99', score_ext:'55'}]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',

  },
  touch: {


  },
  item: {
    margin: 5,
    fontSize: 18,
    height: 30,
    backgroundColor: '#00A400',
    color: 'white',
    borderRadius:10,
    elevation: 24,
    borderWidth:1,
    borderColor: "grey",
    textAlign: 'center'
  },

});




function GamesScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <FlatList style={{ width: '100%' }}
        data={list}
        renderItem={({item}) => <TouchableOpacity  style={styles.touch} onPress={() => navigation.navigate('Stats Match', {match: {item}})}><Text style={styles.item}>{item.dom} vs {item.ext} : {item.score_dom} - {item.score_ext}</Text></TouchableOpacity>}
      />      
      </View>
    );
  }




  export default GamesScreen;