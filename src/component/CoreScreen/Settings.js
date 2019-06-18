import React, { Component } from 'react';
import {ImageBackground,Image, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';

import { Icon } from 'react-native-elements'

import {BoxShadow} from 'react-native-shadow'


export default class Settings extends React.Component
{
    render(){

    return (
    <ImageBackground imageStyle={{ opacity:0.9}} source={{uri: 'http://beepmunk.com/wp-content/uploads/2018/08/simple-blue-hd-motion-graphics-background-loop-youtube-with-regard-to-simple-blue-backgrounds.jpg'}} style={Styles.screen}>
      <View style={Styles.UserSettings}>
        <View style={Styles.ButtonsBox}>
          <TouchableOpacity // button back
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("HomeScreen")}>
           <Icon name='left' type="antdesign" color="white" size={20}/>
          </TouchableOpacity>

          <TouchableOpacity // button Log Out
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("LoginScreen")}>
            <Text style={{color:"white"}}>
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
            <Text style={{color:"white",fontSize:20}}>
              username
            </Text>
            <Text style={{color:"white",paddingTop:5,fontSize:16}}>
              example@email.com
            </Text>
          </View>
          <TouchableOpacity
          style={{
          flex:1,
          alignItems:"center",
          justifyContent:"flex-start",
        }}
          onPress={()=> this.props.navigation.navigate("EditProfile")}>
            <Text style={{color:"white",paddingTop:5,fontSize:12,textDecorationLine:"underline"}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View  style={Styles.ScrollBox}>
          <View style={{flex:1,flexDirection:"column"}}>
            <ImageBackground imageStyle={{ opacity:0.6,borderRadius: 40}} source={{uri:'http://www.topoboi.com/pic/201307/2560x1440/topoboi.com-1329.jpg'}} style={Styles.namebox}>
              <Text style={Styles.infoText}>
               Name
              </Text>
              <View style={Styles.infoCard}>
                <Text style={{color:"white",paddingVertical:5,marginVertical:5,}}>
                  First Name
                </Text>
                <Text style={{color:"white"}}>
                  Last name
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground imageStyle={{ opacity:0.6,borderRadius: 40}} source={{uri:'http://www.topoboi.com/pic/201307/2560x1440/topoboi.com-1329.jpg'}}  style={Styles.namebox}>
              <Text style={Styles.infoText}>
                Cash
              </Text>
              <View style={Styles.infoCard}>
                <Text style={Styles.text}>
                  19123123 SLP
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </ImageBackground>
    )
  }
}


const Styles = StyleSheet.create({
  infoCard:{
    marginLeft:10,
    paddingLeft:10,
    alignSelf:"flex-start",
  },
  text:{
    color:"white",
    alignSelf:"center",
    paddingVertical:5,
    marginVertical:5
  },
  infoText:{
    color:"white",
    marginLeft:10,
    paddingLeft:10,
    alignSelf:"flex-start",
    fontSize:18
  },
  namebox:{
    maxHeight:150,
    padding:5,
    margin:5,
    borderRadius:100,
    flex:1,
    padding:10,
    margin:10,
    alignItems:"center"
  },
  ScrollBox:{
    flex:1,
    paddingTop:5,
    marginTop:5,
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
    flex:1,
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
    marginRight:"5%",
    marginLeft:"5%",
    justifyContent:"center",
},
  ButtonsBox:{
    flex:1,
    flexDirection: "row",
    justifyContent: 'space-between',
    maxHeight:50,
  },
  UserSettings:{
    flex:1,
  },
  screen:{
    flex:1,
    justifyContent: "space-between",
  }
})
