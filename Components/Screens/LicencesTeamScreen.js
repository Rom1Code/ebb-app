import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

  // Screen that display the the stats for the two time
 function LicencesTeamScreencreen({}) { 
    // Get the width and height of the phone used
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    // Keep track of the tab the user select
    return(
        <View style={styles.container}>
            <WebView 
            style={{alignSelf:'center', width:width, height: height}}
            source={{uri: 'https://drive.google.com/file/d/1MYr9DsEtoO6WIZZXLJFC1PYM-pDTVCRy/view?usp=share_link'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default LicencesTeamScreencreen
