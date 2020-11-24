import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style= {styles.top}>
        <Image source = {require('../../assets/userImage.png')}
        style = {styles.image}
        />
        <Text style = {styles.id}>csmoon1010</Text>
      </View>
      <FlatList
      // contract와 연결되어 조회되도록, 새 창 만들거나 modal로 상세조회
        data={[
          {key: '이용내역', value : '내역1'},
          {key: '결제내역', value : '내역1'},
          {key: '신고내역', value : '내역1'},
        ]}
        renderItem={({item}) => {
          return(
            <TouchableOpacity style={styles.chatView} 
            onPress = {() => navigation.navigate('payHistory')}>
              <View>
                <Text style={styles.keyStyle}>{item.key}</Text>
                <Text style = {styles.valueStyle}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    margin : 10
  },
  top : {
    alignItems: 'center',
    borderBottomWidth : 2
  },
  image : {
    width: 100, 
    height: 100, 
    borderRadius: 100/2,
    backgroundColor : 'blue',
    alignContent : 'center'
  },
  id : {
    marginTop : 10,
    marginBottom : 20,
    fontWeight : 'bold',
    fontSize : 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  chatView: {
    borderBottomWidth: 2,
    padding:8
  },
  keyStyle : {
    fontWeight : 'bold',
    fontSize : 20,
    marginBottom : 10,
    color : 'black'
  },
  valueStyle : {
    marginBottom : 20
  }
});


export default HistoryScreen;