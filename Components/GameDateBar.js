import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { getWeekEnd } from './getDate';

// Game data bar component used in the GameScreen - get the weekend date with the call of function getWeekEnd
// 3 props are passed
// selectedData : date selected by the user
// dateTrigger : function used in this componenent and declare in GameScreen - set the selectedDate
// nbGame : nb game for the selected date
function GameDateBar({selectedDate, dateTrigger, nbGame}) {
    return(
        <FlatList style={styles.container} horizontal={true}
          data={getWeekEnd(60)}
          keyExtractor={(index) => index}
          initialScrollIndex={getWeekEnd(60).length -1}
          renderItem={(item, index) =>
            item.item == selectedDate ? 
            <Pressable android_ripple={{ color: '#00A400' }} style={styles.touch} onPress={() => dateTrigger(item.item)}>
              <View style={styles.dateContainerSelected}>
                {item.index % 2 == 0 ? 
                <Text style={styles.textSelected}>sam</Text> : <Text style={styles.textSelected}>dim</Text> 
                }
                <Text style={styles.textSelected}>{item.item.substring(0,5)}</Text>
                <Text style={styles.textSelected}>{nbGame(item.item)} match</Text>
              </View>
            </Pressable>
          : <Pressable android_ripple={{ color: '#00A400' }} style={styles.touch} onPress={() => dateTrigger(item.item)}>
              <View style={styles.dateContainer}>
                {item.index % 2 == 0 ? 
                <Text style={styles.text}>sam</Text> : <Text style={styles.text}>dim</Text> 
                }
                <Text style={styles.text}>{item.item.substring(0,5)}</Text>
                <Text style={styles.text}>{nbGame(item.item)} match</Text>
              </View>
           </Pressable> 
          }
        />      
    )
}

const styles = StyleSheet.create({
  container: {
    height:65,
  },
    dateContainer: {
      padding: 2,
      borderWidth: 0.5,
      width: 65,
      height:65,
      justifyContent: 'center'
    },
    text: {
      color: 'black',
      fontSize: 12,
      textAlign: 'center',
    },
    dateContainerSelected: {
      padding: 2,
      height:65,
      width: 65,
      backgroundColor: '#00A400',
      justifyContent: 'center',
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
    textSelected: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    }
  });

  export default GameDateBar;