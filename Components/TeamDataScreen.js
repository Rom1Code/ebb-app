import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, SectionList, FlatList, ScrollView } from 'react-native';
import TeamCalendarComponent from './TeamCalendarComponent'
import TeamClassementComponent from './TeamClassementComponent'


 function TeamDataScreen({route}) {
  const [tabPressed, setTabPressed] = useState(1);


    return (
      <View style={{ flex: 1 }}>
        <View  style={styles.tabContainer}> 
          {tabPressed == 1 ? <TouchableOpacity  style={styles.tabPressed} ><Text style={styles.tabPressedText}>Calendrier</Text></TouchableOpacity>
            : <TouchableOpacity  style={styles.tab1} onPress={()=>setTabPressed(1)} ><Text style={styles.tabText}>Calendrier</Text></TouchableOpacity>
          }
          {tabPressed == 2 ? <TouchableOpacity  style={styles.tabPressed}><Text style={styles.tabPressedText}>Classement</Text></TouchableOpacity>
            : <TouchableOpacity style={styles.tab1} onPress={()=>setTabPressed(2)} ><Text style={styles.tabText}>Classement</Text></TouchableOpacity>
          }
        </View>
        <ScrollView>
        {tabPressed == 1 ? 
          <TeamCalendarComponent/>
        :
          <TeamClassementComponent/>}
        </ScrollView>
      </View>
    );
}


const styles = StyleSheet.create({
  tabContainer: {
    width:'100%', 
    flexDirection: 'row',
    },
  tab1: {
    flex:1,
    backgroundColor: '#00A400',
    justifyContent:'center',
    borderRightWidth: 1,
    borderRightColor:'white'
    },
  tab2: {
    flex:1,
    backgroundColor: '#00A400',
    justifyContent:'center',
    },
  tabPressed: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
    color: '#00A400'
    },
  tabText: {
    fontSize: 20,
    textAlign: 'center',
    height:30,
    color:'white'
  },
  tabPressedText: {
    fontSize: 20,
    textAlign: 'center',
    height:30,
    color: '#00A400'
  },
  head: { 
    flex: 1, 
    backgroundColor: '#00A400',
    textAlign: 'center',
    color: 'white'
  },
  row: {  
    height: 35  }
    ,
  text: { 
    textAlign: 'center',
    fontSize: 10
  },
  textHead: { 
    textAlign: 'center',
    color: 'white'
  }
})

export default TeamDataScreen