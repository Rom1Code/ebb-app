import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getWeekEnd } from './getDate';

// Game data bar component used in the GameScreen - get the weekend date with the call of function getWeekEnd
// 3 props are passed
// selectedData : date selected by the user
// dateTrigger : function used in this componenent and declare in GameScreen - set the selectedDate
// nbGame : nb game for the selected date
function GameDateBarItem({selectedDate, dateTrigger, nbGame}) {
    return(<>

        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={true}>
        {getWeekEnd(60).map((item, index)=> item == selectedDate ? 
        <Pressable android_ripple={{ color: '#00A400' }} key={index} style={styles.touch} onPress={() => dateTrigger(item)}>
            <View style={styles.dateContainerSelected}>
                {index % 2 == 0 ? <Text style={styles.textSelected}>sam</Text> : <Text style={styles.textSelected}>dim</Text> }
                <Text style={styles.textSelected}>{item.substring(0,5)}</Text>
                <Text style={styles.textSelected}>{nbGame(item)} match</Text>
            </View>
          </Pressable> 
          :
          <Pressable android_ripple={{ color: '#00A400' }} key={index} style={styles.touch} onPress={() => dateTrigger(item)}>
          <View style={styles.dateContainer}>
              {index % 2 == 0 ? <Text style={styles.text}>sam</Text> : <Text style={styles.text}>dim</Text> }
              <Text style={styles.text}>{item.substring(0,5)}</Text>
              <Text style={styles.text}>{nbGame(item)} match</Text>
          </View>
        </Pressable> 
        )}
        </ScrollView></>
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

  export default GameDateBarItem;