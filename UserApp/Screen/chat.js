import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style = {styles.buttonView}>
          <TouchableOpacity style={[styles.touchable, {backgroundColor : '#FFFAFA'}]}
          onPress = {() => navigation.navigate('HOWTOUSE')}>
            <Text style = {{color : '#ED7117', fontWeight: 'bold'}}>이용방법</Text>
          </TouchableOpacity>
         </View>
      <View style = {styles.buttonView}>
          <TouchableOpacity style={[styles.touchable, {backgroundColor : '#FFFAFA'}]}
          onPress = {() => navigation.navigate('FAQ')}>
            <Text style = {{color : '#ED7117', fontWeight: 'bold'}}>FAQ</Text>
          </TouchableOpacity>
         </View>
      <View style = {styles.buttonView}>
          <TouchableOpacity style={[styles.touchable, {backgroundColor : '#FFFAFA'}]}
          onPress = {() => navigation.navigate('ONEONONE')}>
            <Text style = {{color : '#ED7117', fontWeight: 'bold'}}>1:1 문의</Text>
          </TouchableOpacity>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  buttonView : {
    width:'100%',
    height:'10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: '#FFFAFA',
    // borderRadius: 5,
    justifyContent : 'space-around'
  },
  touchable : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'white'
  }
});


export default ChatScreen;