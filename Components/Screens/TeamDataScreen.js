import { useState } from 'react';
import { StyleSheet, Pressable, Text, View, ScrollView } from 'react-native';
import TeamCalendarComponent from '../TeamCalendarComponent'
import TeamClassementComponent from '../TeamClassementComponent'

// Display calendar and classement component in function of the team the user clicked in teamScreen
// We get the team name with the route props
 function TeamDataScreen({navigation, route}) {
  const [tabPressed, setTabPressed] = useState(1);
  const team = route.params.team.item.team
    return (
      <View style={{ flex: 1, backgroundColor:'white' }}>
        <View  style={styles.tabContainer}> 
          {tabPressed == 1 ? <View style={styles.tab}><Pressable android_ripple={{ color: '#0bb049' }} style={styles.tabPressed}><Text style={styles.tabPressedText}>Classement</Text></Pressable></View>
            : <View style={styles.tab}><Pressable  android_ripple={{ color: '#0bb049' }} style={styles.tabNotPressed} onPress={()=>setTabPressed(1)} ><Text style={styles.tabText}>Classement</Text></Pressable></View>
          }
          {tabPressed == 2 ? <View style={styles.tab}><Pressable  android_ripple={{ color: '#0bb049', borderless: false }} style={styles.tabPressed} ><Text  style={styles.tabPressedText}>Calendrier</Text></Pressable></View>
            : <View style={styles.tab}><Pressable  android_ripple={{ color: '#0bb049' }} style={styles.tabNotPressed} onPress={()=>setTabPressed(2)} ><Text style={styles.tabText}>Calendrier</Text></Pressable></View>
          }
        </View>
        <ScrollView>
        {tabPressed == 1 ? 
        <TeamClassementComponent team={team}/>
        :
        <TeamCalendarComponent navigation={navigation} team={team}/>}
        </ScrollView>
      </View>
    );
}


const styles = StyleSheet.create({
  tabContainer: {
    width:'100%', 
    flexDirection: 'row',
    marginBottom: 5
    },
  tab: {
    flex:1, 
    borderRadius:10, 
    overflow: 'hidden'
  },
  tabNotPressed: {
    justifyContent:'center',
    },
  tabPressed: {
    justifyContent:'center',
    color: '#0bb049',
    },
  tabText: {
    fontSize: 16,
    textAlign: 'center',
    height:30,
    color:'grey'
  },
  tabPressedText: {
    fontSize: 16,
    textAlign: 'center',
    height:30,
    color: '#0bb049',
    borderBottomWidth: 3,
    borderBottomColor:'#0bb049',
    marginHorizontal:50
  },
})

export default TeamDataScreen