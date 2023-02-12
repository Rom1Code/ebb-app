import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { dateArray } from './getDate';

// Game data bar component used in the GameScreen
// 3 props are passed
// selectedData : date selected by the user
// dateTrigger : function used in this componenent and declare in GameScreen - set the selectedDate
// nbGame : nb game for the selected date
function GameDateBar({selectedDate, dateTrigger, nbGame}) {
    return(
        <ScrollView horizontal={true}>
        {dateArray.map((item, index)=> item == selectedDate ? 
        <TouchableOpacity key={index} style={styles.touch} onPress={() => dateTrigger(item)}>
            <View style={styles.dateContainerSelected}>
                <Text style={styles.textSelected}>{item.substring(0,5)}</Text>
                <Text style={styles.textSelected}>{nbGame(item)} match</Text>
            </View>
          </TouchableOpacity> 
          :
          <TouchableOpacity key={index} style={styles.touch} onPress={() => dateTrigger(item)}>
          <View style={styles.dateContainer}>
              <Text style={styles.text}>{item.substring(0,5)}</Text>
              <Text style={styles.text}>{nbGame(item)} match</Text>
          </View>
        </TouchableOpacity> 
        )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    dateContainer: {
      padding: 2,
      borderWidth: 0.5,
      height:50,
      width: 60,
      justifyContent: 'center'
    },
    text: {
      color: 'black',
      fontSize: 12,
      textAlign: 'center'
    },
    dateContainerSelected: {
      padding: 2,
      borderWidth: 0.5,
      height:50,
      width: 60,
      backgroundColor: '#00A400',
      justifyContent: 'center',
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10
    },
    textSelected: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    }
  });

  export default GameDateBar;