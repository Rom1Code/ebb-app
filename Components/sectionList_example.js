const dataSection = gamesList.map((item) => ({title:item.Date, data: [item.Dom +" " + item.Ext + " : " + item.Score]}))
console.log(dataSection)  
      
      <SafeAreaView style={{ flex: 1, }}>
          <SectionList
            sections={dataSection}
            inverted= {true}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <TouchableOpacity  onPress={() => navigation.navigate('Stats Match', {match: {item}})}>
                <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>      )}
            renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
 
      </SafeAreaView>