import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

// Game data bar component used in the GameScreen - get the weekend date with the call of function getWeekEnd
// 3 props are passed
// selectedData : date selected by the user
// dateTrigger : function used in this componenent and declare in GameScreen - set the selectedDate
// nbGame : nb game for the selected date
function GameDateBar({selectedDate, dateTrigger, nbGame, dateArray}) {
  
  // Return the name of the day
  const dateName = (date) => {
    date = date.split('/')[1] + "/" + date.split('/')[0] + "/" + date.split('/')[2];
    const d = new Date(date);
    let day = d.getDay()
    return day == 0 ? "dim" : day == 1 ? "lun" : day == 2 ? "mar" : day == 3 ? "mer" : day == 4 ? "jeu" : day == 5 ? "ven" : day == 6 ? "sam" : null 
  }
  
    return(
        <FlatList style={styles.container} horizontal={true}
          data={dateArray}
          keyExtractor={(index) => index}
          //initialScrollIndex={dateArray.length -1}
          renderItem={({item, index}) =>
            item == selectedDate ? 
            <Pressable android_ripple={{ color: '#0bb049' }} style={styles.touch} onPress={() => dateTrigger(item)}>
              <View style={styles.dateContainerSelected}>
                <Text style={styles.textSelected}>{dateName(item)}</Text> 
                <Text style={styles.textSelected}>{item.substring(0,5)}</Text>
                <Text style={styles.textSelected}>{nbGame(item)} match</Text>
              </View>
            </Pressable>
          : <Pressable android_ripple={{ color: '#0bb049' }} style={styles.touch} onPress={() => dateTrigger(item)}>
              <View style={styles.dateContainer}>
                <Text style={styles.text}>{dateName(item)}</Text>
                <Text style={styles.text}>{item.substring(0,5)}</Text>
                <Text style={styles.text}>{nbGame(item)} match</Text>
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
      backgroundColor: '#0bb049',
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