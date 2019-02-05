import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator,createDrawerNavigator, DrawerActions} from 'react-navigation';


export default class ConfirmTask extends Component{
  render() {
    return(
      <Text>
      test
      </Text>
    )}
}

const Styles = StyleSheet.create({
  info:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
},
  vievStyle:{
    opacity:1,
    borderRadius:30,
    alignItems:"center",
    justifyContent:'center',
    height:100,
    width:200,
    shadowColor:"#000",
    elevation:3,
    shadowOpacity: 10,
    shadowRadius:30,
    shadowOffset:{width: 5, height:5}

  },
  inputText:
  {
  width:'100%',
  height:'100%',
  backgroundColor:"#8B7979",
},
  text:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})
