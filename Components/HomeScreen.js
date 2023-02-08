import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import Carousel from 'react-native-reanimated-carousel';


function HomeScreen({navigation, route}) {
  const width = Dimensions.get('window').width;

  const _renderItem = () => {

    array.map((item)=> <Image source={require('../Ressources/annee_80.jpg')} />   )

}

const array=['require(\'../Ressources/annonce.jpg\')']
    return (
      <>
        <View >
          <Image
          style={styles.icon}
          source={require('../Ressources/ebb-logo.png')}
        />
        <Text style={styles.title}>Actualité du club</Text>
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={array}
                mode='parallax'
                //scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}>
                          <Text>{item}</Text>
                        <Image source={item} />
                    </View>
                )}
            />
        </View>
        </View>


      </>
      
    );
  }

  const styles = StyleSheet.create({
    icon: {
      width: 200,
      height: 200,
      alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  })
  
  export default HomeScreen;