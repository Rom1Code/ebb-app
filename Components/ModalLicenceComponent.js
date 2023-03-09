import ImageZoom from 'react-native-image-pan-zoom';
import { StyleSheet, ScrollView, Image, Dimensions,  Modal, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';

// Modal component used in order to zoom in the photos showed in the homeScreen
// 3 props are passed
// visible : boolean in order to display the modal
// image : the image on which the user has clicked
// modalVisibleTrigger : function used in order to hide the modal
function ModalLicenceComponent({visible, image, modalVisibleTrigger}) {

    // Get the width and height of the phone used
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;


    
    return(
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View style={{ width:width, height:50, backgroundColor:'#0bb049', justifyContent:'center'}}>       
                <Text onPress={() => modalVisibleTrigger()} style={{color:'white', fontSize: 20, textAlign:'center', }}>Retour</Text>
            </View> 

          <WebView 
          style={{alignSelf:'center', width:width, height: height}}
        source={{uri: 'https://drive.google.com/file/d/1MYr9DsEtoO6WIZZXLJFC1PYM-pDTVCRy/view?usp=share_link'}}
        />

        </Modal>
    )
}

export default ModalLicenceComponent