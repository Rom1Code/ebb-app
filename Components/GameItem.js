import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const statsIcon = (match) => {
    return (
      feuilleMatch.map((item) => item.match == match  ? <View><Text style={styles.text}><FontAwesome name="table" color='black'/></Text></View> : <Text></Text>)
    )
  }

const feuilleMatch = require('../Helper/feuille_match_SM1.json')


const statsExist = (match) => {
    const exist = feuilleMatch.filter((item) => item.match == match.match )
    return exist.length
}

function GameItem({navigation, item, nbGame}) {
    return (
        <TouchableOpacity onPress={() => statsExist(item) == 1 ? navigation.navigate('Stats Match', {match: {item}}) : null}>
        <View style={styles.gameContainer}>
            <View style={styles.gameContainerLeft}>
                <View style={styles.teamContainer}><Text style={styles.team}>{item.equipe.substring(0,4)}</Text></View>
                <View style={styles.hourContainer}><Text style={styles.hour}>{item.heure}</Text></View>
            </View>
            <View style={styles.gameContainerMiddle}>
                <Text style={styles.game}>{item.dom}</Text>
                <Text style={styles.vs}>vs</Text>
                <Text style={styles.game}>{item.ext}</Text>
            </View>
            <View style={styles.gameContainerRight}>
                <Text style={styles.score}>{statsIcon(item.match)} {item.score}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    gameContainer: {
      flexDirection: 'row',
      flex:1,
      backgroundColor: 'white',
      elevation: 24,
      height: 50,
      marginTop: 5
    },
    gameContainerLeft: {
      flex:1.5,
      backgroundColor: '#00A400',
    },
    gameContainerMiddle: {
      flex:4,
      paddingLeft: 5
    },
    gameContainerRight: {
      justifyContent: 'center', //Centered horizontally
      flex:1,
      borderLeftWidth: 2,
      borderLeftColor: '#00A400'    
    },
    teamContainer: {
      flex: 1,
      justifyContent: 'center', //Centered horizontally

    },
    hourContainer: {
      justifyContent: 'center', //Centered horizontally
      flex: 1,
      borderTopColor: 'white',
      borderTopWidth: 1,
    },
    team: {
      textAlign: 'center',
      color: 'white',
      fontSize: 12,
    },
    hour: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    },
    game: {
      fontSize: 12,
      textAlign: 'center'
    },
    score: {
      color: 'green',
      fontSize: 13,
      textAlign: 'center'
    },
    vs: {
      textAlign: 'center'
    }

  });


  export default GameItem;