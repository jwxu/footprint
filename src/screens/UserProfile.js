import React from 'react';
// import { useState } from 'react';
import { Button, Image, Text, TextInput, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import plt1 from '../../assets/carbon_USA.png';
import plt2 from '../../assets/userplt2.png'; 

const src = 'https://img.icons8.com/ios-glyphs/30/000000/user--v1.png'
// or any pure javascript modules available in npm

// const [text, onChangeText] = useState('');

export default class UserProfile extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={{ uri: src }} style={styles.logo} /> 
          <Text style={styles.username}>
            Username
            </Text>
          <Text style={styles.paragraph}>
            Carbon Footprint
          </Text>
          <View style={{ flex: 1, backgroundColor: 'skyblue'}} />
          <Image source={plt1} style={styles.plt1} resizeMode="cover"/>
          <View style={{ flex: 1, backgroundColor: 'skyblue'}} />
          <Text style={styles.warning}>
               Your carbon footprint exceed average footprint in the USA by <Text style={{color: 'red',fontWeight: 'bold'}}>2.3%</Text>
          </Text>
          <TextInput
              placeholder="Enter Year"
            //   onChangeText={onChangeText}
              style={styles.textInputStyle}
            />
          <View style={{ flex: 2, backgroundColor: 'skyblue'}} />
          <Image source={plt2} style={styles.plt2} resizeMode="cover"/>
          <View style={{ flex: 4, backgroundColor: 'skyblue'}} />
          <Text style={{color: 'red',fontWeight: 'bold'}}>
               Product carbon dioxide emission pie chart
          </Text>
          <View style={{ flex: 2, backgroundColor: 'skyblue'}} />
        </View>
      );
  }
  
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  username:{
    fontSize: 30,
  },
  textInputStyle:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  paragraph:{
    fontWeight:'bold',
    color: '#6fd0a7',
    // textAlignment: 'left',
    fontSize: 20,
  },
  warning:{
    fontWeight:'normal',
    color: 'black',
    // textAlignment: 'left',
  },
    logo: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    padding: 8,
    marginTop:25,
  },
    plt1:{
      width:'90%',
      height: '26%',
      justifyContent: 'center',
      alignItems:'center',
  },
    plt2:{
      width:'60%',
      height: '30%',
      justifyContent: 'center',
      alignItems:'center',
  },

});