import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

  // Screen that display the the stats for the two time
 function GameStatsPDFScreen({route}) { 
    console.log(route)
    // Get the width and height of the phone used
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    // Keep track of the tab the user select
    const uri = route.params.match.game.lien_stats_match
    return(
        <View style={styles.container}>
            <WebView 
            style={{alignSelf:'center', width:width, height: height}}
            source={{uri: uri}}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default GameStatsPDFScreen
