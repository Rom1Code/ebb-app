import { StyleSheet, View, FlatList } from 'react-native';
import { teamCat } from './Datas';
import TeamItem from './TeamItem'

// List all the teams present in the club
function TeamsScreen({navigation}) {

    return (
      <FlatList style={styles.dataContainer}
        data={teamCat}
        keyExtractor={(item, index)=> index}
        renderItem={(item)=>
          <TeamItem navigation={navigation} title={item.item.cat} data={item.item.teamList} />
      } />
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