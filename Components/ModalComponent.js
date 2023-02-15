import ImageZoom from 'react-native-image-pan-zoom';
import { StyleSheet, ScrollView, Image, Dimensions,  Modal, Pressable, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ModalComponent({visible, image, modalVisibleTrigger}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} >
            <ImageZoom cropWidth={width}
                       cropHeight={height}
                       imageWidth={width}
                       imageHeight={height}
                       panToMove='true'
                       enableSwipeDown='true'
                       enableCenterFocus='true'>
                <View style={{top:height*0.14, left:width*0.13, zIndex:1, width:25, height:25}}>       
                <FontAwesome onPress={() => modalVisibleTrigger()}  name="close" color='red' size={26}/>
                </View> 
                <View style={{top:height*0.1, left:width*0.1, width:width*0.8, height: height*0.7 , resizeMode:'contain', backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius:10, elevation:20}}>
                  <Image
                    style={{width:width*0.6, height: height *0.6, resizeMode:'contain'}}
                    source={{uri: image}}
                  />
                </View>
            </ImageZoom>
        </Modal>
    )
}

export default ModalComponent