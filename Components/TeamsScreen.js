import { StyleSheet, Button, Text, View, FlatList, TouchableOpacity } from 'react-native';

function TeamsScreen({navigation}) {
    const teams = ['SM1','SM2','SM3','SF1','SF2','SF3','MU17_phase1','MU17_phase2','MU17_2_phase1','MU17_2_phase2','FU18_phase1','FU18_phase2','MU15_phase1',
    'MU15_phase2','MU15_2_phase1','MU15_2_phase2','MU15_3_phase1','FU15_phase1','FU15_phase2','FU15_2_phase1','FU15_2_phase2','MU13_phase1','MU13_phase2',
    'MU13_2_phase1','MU13_2_phase2','FU13_phase1','FU13_phase2','FU11_phase1','FU11_phase12']

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList style={{ width: '100%' }}
        data={teams}
        renderItem={({item}) => 
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>}
      /> 
      </View>
    );
  }

  const styles = StyleSheet.create({
    touch: {
      justifyContent: 'center',
  
    },
    item: {
      fontSize: 18,
      height: 40,
      backgroundColor: 'white',
      color: '#00A400',
      //borderRadius:10,
      elevation: 24,
      borderBottomWidth:2,
      borderBottomColor: '#00A400',
      textAlign: 'center',
    },
  
  });


  export default TeamsScreen;