import { StyleSheet, Button, Text, View, FlatList, TouchableOpacity } from 'react-native';

function TeamsScreen({navigation}) {
    const teams = ['SM1','SM2']
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList style={{ width: '100%' }}
        data={teams}
        renderItem={({item}) => 
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>}
      /> 
        <Button
      title="Go Home"
      onPress={() =>
        navigation.navigate('Accueil', {name: 'Jane'})
      }
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