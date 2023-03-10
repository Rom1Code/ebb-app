import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { teamListDD } from '../Datas';
import { Dropdown } from 'react-native-element-dropdown';
import { useState, useEffect } from 'react';
import { dbRef }  from '../GetData'
import { child, get } from "firebase/database";
import GameItem2 from '../GameItem2';

// List all the teams present in the club
function StatsTeamsScreen({navigation}) {
  const [value, setValue] = useState(null);
  // Keep track if the datas are loading
  const [loading, setLoading] = useState(true)
  const [calendarTeam, setCalendarTeam] = useState([])

  const renderItem = item => {
    return (  
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Image style={{width:30, height:30}} source={require('../../Ressources/ebb-logo.png')} />
        )}
      </View>
    );
  };

    // Fetch one time all the data for all game
    useEffect(() => {
      console.log("useeffect", value)
      // get the data from the 'feuille_match' node in the Firebase realtimebase and save it to feuilleListData variable
        get(child(dbRef, 'calendrier/'+value)).then((snapshot) => {
          if (snapshot.exists()) {
            const result = snapshot.val()
            const resultArray = result.filter((item)=>item.lien_stats_match!='')
            console.log(resultArray)
            setCalendarTeam(resultArray);
            setLoading(false)
          } else {
              console.log("No data available");
          }
          }).catch((error) => {
          });
      }, [value]);
  
    return (
      <>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={teamListDD}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selectionnez une équipe"
        searchPlaceholder="Recherche..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <Image style={{width:30, height:30, marginRight: 5}} source={require('../../Ressources/ebb-logo.png')} />
        )}
        renderItem={renderItem}
      />
      { loading  ? 
      <View style={{flex:1, justifyContent: 'center'}}>
        <Text style={styles.text}>Aucune équipe de sélectionné</Text>
      </View>
    :
        <FlatList
          data={calendarTeam}
          keyExtractor={(item,index)=>index}
          ListEmptyComponent={()=> <Text style={styles.text}>Pas de feuille de match</Text>}
          refreshing={false}
          onRefresh={()=> setLoading(true)}
          renderItem={({item}) =>
          <GameItem2 navigation={navigation} game={item} route={'statsScreen'} />}
        />      
        }
      </>
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
    text :{
      textAlign: 'center', 
      fontSize: 16
    },
    dropdown: {
      margin: 16,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    }
  });

  export default StatsTeamsScreen;