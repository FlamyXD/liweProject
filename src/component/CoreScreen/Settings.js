import React, { Component } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';
import ColorPalette from 'react-native-color-palette'

import {BoxShadow} from 'react-native-shadow'

const UncontrolledColorPicker = () => (
  <ColorPalette
    defaultColor={'#C0392B'}
    colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
    title={""}
  />
)


export default class Settings extends React.Component
{
    render(){
      console.log(this.props.navigation);
    return (
    <View style={Styles.screen}>
      <View style={Styles.UserSettings}>
        <View style={Styles.ButtonsBox}>
          <TouchableOpacity // button back
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("HomeScreen")}>
           <Image
           style={{resizeMode:"contain", width:20,height:20}}
           source={require('./icon/back.png')}/>
          </TouchableOpacity>

          <TouchableOpacity // button Log Out
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("LoginScreen")}>
            <Text>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.UserBox}>
            <BoxShadow setting = {{width:150,height:150,color:"#000",border:15,radius:70,opacity:0.08,x:0,y:0,style:{alignItems:"center",justifyContent:"center",alignSelf:"center"}}}>
              <View style={Styles.userPhoto}>
                  <Image
                  style={{resizeMode:"contain", width:50,height:50}}
                  source={require('./icon/user.png')}/>
              </View>
            </BoxShadow>
          <View style={{flex:1,paddingTop:10,alignSelf:"center",alignItems:"center"}}>
            <Text style={{fontSize:20}}>
              username
            </Text>
            <Text style={{paddingTop:5,fontSize:16}}>
              example@email.com
            </Text>
          </View>
          <TouchableOpacity
          style={{
          flex:0.5,
          alignItems:"center",
          justifyContent:"center",
          shadowColor:"#000",
          elevation:8,
          shadowOpacity: 10,
          shadowRadius:30,
          shadowOffset:{width: 200, height:300}
        }}
          onPress={()=> this.props.navigation.navigate("EditProfile")}>
            <Text style={{paddingTop:5,fontSize:12,textDecorationLine:"underline"}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.CashBox}>
          <Text style={{fontSize:20,paddingBottom:10}}>
            Cash
          </Text>
          <Text style={{fontSize:16}}>
            19123123 SLP
          </Text>
        </View>
        <View style={Styles.ScrollBox}>
          <Text style={{alignSelf:"center",fontSize:20,marginBottom:10}}>
            Change Background color
          </Text>
          <ScrollView style={{flex:1,alignSelf:"center"}}>
            <UncontrolledColorPicker/>
          </ScrollView>
        </View>
      </View>
    </View>
    )
  }
}


const Styles = StyleSheet.create({
  ScrollBox:{
    flex:1,
    paddingTop:20,
    marginTop:20,
    paddingBottom:20,
    marginBottom:20,
    alignItems:"center",
    backgroundColor:"white",
  },
  CashBox:{
    backgroundColor:"white",
    flex:0.5,
    paddingTop:20,
    marginTop:20,
    paddingBottom:20,
    marginBottom:20,
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"space-around",
  },
  UserBox:{
    paddingTop:20,
    backgroundColor:"white",
    flex:2,
  },
  userPhoto:{
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    borderRadius:100,
    width:150,
    height:150,
    backgroundColor:"white"
  },
  button:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
},
  ButtonsBox:{
    flex:1,
    flexDirection: "row",
    justifyContent: 'space-between',
    maxHeight:50,
    backgroundColor:"white",
  },
  UserSettings:{
    flex:1,
    backgroundColor:"#BBBBBB"
  },
  screen:{
    flex:1,
    justifyContent: "space-between",
  }
})
