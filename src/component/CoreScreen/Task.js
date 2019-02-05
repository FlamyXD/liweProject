import React, { Component } from 'react';
import {ImageBackground,Image,ScrollView,StatusBar, View, Text,TextInput,StyleSheet, TouchableOpacity, MaterialCommunityIcons} from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';
import { Icon} from 'react-native-elements'

const Header = () =>
{
  return(
    <View style={Styles.header}>
    <TouchableOpacity style={{flex:1}}
    onPress={()=>this.props.navigation.navigate("HomeScreen")}>
      <Text style = {Styles.text}>
        Task
        </Text>
    </TouchableOpacity>
  </View>)
}

const ScrollContent =()=>{
  return(
    <View style={{backgroundColor:"white"}}>
      <Text>
      Дарова нахуй ты должен пойти нахуй, если ты согласен то нажми кнопку принят
      </Text>
    </View>
)}


export default class TheTask extends React.Component
{
  static navigationOptions= {header:null}

    render()
    {
    return (
    <View style={Styles.Screen}>
    <Header/>
      <ScrollView style={Styles.scrollView}>
        <Image
          style={Styles.image}
          source={{uri: 'https://pp.userapi.com/c844616/v844616932/18c405/nI-z8BZW3_E.jpg'}}
        />
        <ScrollContent/>
      </ScrollView>

    </View>
    )
  }
}


const Styles = StyleSheet.create({
  scrollView:{
  
  },
  image:{
    marginTop:20,
    marginBottom:20,
    alignSelf:"center",
    width:200,
    height:200,
    justifyContent:"center",
    shadowColor:"#0745F1",
    shadowRadius:30,
    shadowOffset:{width: 50, height:50}
  },
  content:{
    flex:1
  },
  text:{
    color:'#ff7733',
    fontSize: 20,
    alignItems:'flex-start',
    justifyContent:'center',
    top:'50%'
  },
  header:{
    backgroundColor:'#771122',
    height:"10%",
    width:"100%",
    shadowColor:"#000",
    elevation:3,
    shadowOpacity: 10,
    shadowRadius:30,
    shadowOffset:{width: 5, height:5}
  },
  Screen:{
  width:'100%',
  height:'100%',
  backgroundColor:"#8B7979",}
})
