import React, { Component } from 'react';
import {Image,StatusBar, View, Text,TextInput,StyleSheet, TouchableOpacity,ScrollView, ImageBackground } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerActions} from 'react-navigation';

import { Icon } from 'react-native-elements'

export default class CompleteTasks extends Component{
    render(){
    return (
      <ImageBackground source={{uri:'https://img2.goodfon.ru/original/1920x1080/b/46/siniy-goluboy-tekstury.jpg'}} style={{flex:1}}>
      <View style={Styles.header}>
        <TouchableOpacity
        style={Styles.drawer}
        onPress={()=> this.props.navigation.navigate("HomeScreen")}>
         <Icon name='left' type="antdesign" color="white" size={20}/>
        </TouchableOpacity>
        <View style={{justifyContent:"center",alignSelf:"center"}}>
          <Text style={{color:"white",fontSize:18,fontFamily:"Roboto"}}>
            Complete Tasks
          </Text>
        </View>
        <TouchableOpacity
        style={Styles.drawer}
        onPress={()=> this.props.navigation.navigate("Settings")}>
         <Icon name='options-vertical' type="simple-line-icon" color='white' size={15}/>
        </TouchableOpacity>
      </View>
        <ScrollView style = {Styles.TaskList}>
          <View style={Styles.taskPreview}>
            <ImageBackground
            source={require('./test.jpg')}
            style={Styles.Image}>
              <View style = {Styles.blankField}>
                <Text style = {Styles.text}>
                  Task
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </ImageBackground>
  )
  }

}


const Styles = StyleSheet.create({
  drawer:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
  },
  header:{
    flex:0.1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  taskPreview:{
  marginTop:5,
  marginRight: 10,
  marginLeft: 10,
  justifyContent: 'space-between',
  alignSelf:'center',
  width: "80%" ,
  height: 220,
  backgroundColor: "#E6E6FA"
  },
  Image:{
    width: "100%" ,
    height: "100%"
  },
  blankField:{
    top:'90%',
    flex:0.1,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:"white",
    opacity:0.7
  },
  text:{
    justifyContent:'center',
    alignSelf:'flex-start',
    left:"5%"
  },
  TaskList:{
    flexDirection: "column",
  }
})
