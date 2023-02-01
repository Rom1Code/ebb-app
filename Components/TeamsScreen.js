import { StyleSheet, View, ScrollView } from 'react-native';
import { teamCat, teamCat2 } from './Datas';
import TeamItem from './TeamItem'

function TeamsScreen({navigation}) {
  console.log(teamCat2[0].team[1].title)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{ width: '100%', flex: 1}}>
          {teamCat.map((item) => <TeamItem navigation={navigation} title={item.cat} data={item.team} />)}
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      padding: 5,
      fontWeight: 'bold'
    },
    teamContainer: {
      height: 150,
      width: 150,
      flexDirection: 'row',
      flex: 1,
      margin : 5,
      backgroundColor: 'white',
      elevation: 5,

    },
    teamContainerTop: {
      flex :1,
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
    },
    imageContainer: {
      flex: 1,
      height: 75,
    },
    textContainer: {
      flex: 1,
      height: 75,
      justifyContent: 'center'

    },
    teamContainerBottom: {
      flex :1,
      width: 150

    },
    logo: {
      height:75,
      width: 75,
      
    },
    touch: {
      justifyContent: 'center',
 
    },
    item: {
      fontSize: 18,
      color: '#00A400',
      //borderRadius:10,
      textAlign: 'center',
    },
  
  });


  export default TeamsScreen;