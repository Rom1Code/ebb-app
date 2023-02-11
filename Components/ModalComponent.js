import ImageZoom from 'react-native-image-pan-zoom';
import { StyleSheet, ScrollView, Image, Dimensions,  Modal, Pressable } from 'react-native';

function ModalComponent({visible, image, modalVisibleTrigger}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

    return(
        <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} >
          <ScrollView horizontal={true} style={{width:width , height: height}}>
            <ImageZoom cropWidth={width}
                       cropHeight={height}
                       imageWidth={width}
                       imageHeight={height}
                       panToMove='true'
                       enableSwipeDown='true'
                       enableCenterFocus='true'>
                <Pressable onPress={() => modalVisibleTrigger()}>
                  <Image
                    style={{width:width, height: height, resizeMode:'contain'}}
                    source={image.image}
                  />
                </Pressable>
              </ImageZoom>
         </ScrollView>
        </Modal>
    )
}

export default ModalComponent