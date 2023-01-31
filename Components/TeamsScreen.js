import { StyleSheet, Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { seniorMasculin, seniorFeminin, U17Masculin, U18Feminin, U15Masculin, U15Feminin, U13Masculin, U13Feminin, U11Feminin} from './Data'

function TeamsScreen({navigation}) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView>
          <Text>Senior Masculin</Text>
          <ScrollView horizontal='true'>
            {seniorMasculin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>Senior Féminine</Text>
          <ScrollView horizontal='true'>
            {seniorFeminin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>U17 Masculin</Text>
          <ScrollView horizontal='true'>
            {U17Masculin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>U18 Feminin</Text>
          <ScrollView horizontal='true'>
            {U18Feminin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>U15 Masculin</Text>
          <ScrollView horizontal='true'>
            {U15Masculin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>U15 Feminin</Text>
          <ScrollView horizontal='true'>
            {U15Feminin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>U13 Masculin</Text>
          <ScrollView horizontal='true'>
            {U13Masculin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>U13 Feminin</Text>
          <ScrollView horizontal='true'>
            {U13Feminin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>U11 Feminin</Text>
          <ScrollView horizontal='true'>
            {U11Feminin.map((item) => {
            return (
              <View style={styles.teamContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
                  <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
              </View>)})}
          </ScrollView>

          <Text>Senior Féminine</Text>
          <FlatList style={{ width: '100%' }}
          data={seniorFeminin}
          renderItem={({item}) => 
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Infos equipes', {equipe: {item}})}>
              <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>}
          /> 

          </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    teamContainer: {
      height: 50,
      width: 50
    },
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