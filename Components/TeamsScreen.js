import { StyleSheet, View, ScrollView } from 'react-native';
import { teamCat } from './Datas';
import TeamItem from './TeamItem'

// List all the teams present in the club
function TeamsScreen({navigation}) {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.dataContainer}>
        {teamCat.map((item, index) => <TeamItem key={index} navigation={navigation} title={item.cat} data={item.teamList} />)}
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1    
    },
    dataContainer: {
      width: '100%', 
      flex: 1
    }, 
  });

  export default TeamsScreen;