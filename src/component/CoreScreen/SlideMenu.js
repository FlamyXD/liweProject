import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ImageBackground, TouchableOpacity,Image,ScrollView, Text, View,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import {BoxShadow} from 'react-native-shadow'

import { LinearGradient } from 'expo';

export default class SlideMenu extends React.Component {
  render() {
    return (
        <LinearGradient colors={['#00A1C2',"#68DEF3"]}  style={Styles.container}>
          <ImageBackground source={require('./test.jpg')} style={Styles.ImageProfile}/>
          <View style={Styles.optionsBox}>
          <TouchableOpacity
          style={Styles.option}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("Profile")
            }
          }>
            <View style={Styles.icon}>
              <Icon name='user' type="feather" color="white" size={25}/>
            </View>
            <Text style={Styles.text}>
              Username
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={Styles.option}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("CompleteTasks")
            }
          }>
            <View style={Styles.icon}>
              <Icon name='clipboard-check-outline' type="material-community" color="white" size={25}/>
            </View>
            <Text style={Styles.text}>
              Complete Tasks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={Styles.option}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("Rewards")
            }
          }>
            <View style={{
            paddingLeft:5,
            justifyContent:"center",
            alignSelf:"center"}}>
              <Icon name='dollar' type="font-awesome" color="white" size={25}/>
            </View>
            <Text style={Styles.text}>
              Rewards
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={Styles.Settings}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("Settings")
            }
          }>
            <View style={Styles.icon}>
              <Icon name='setting' type="antdesign" color="white"/>
            </View>
            <Text style={Styles.text}>
              Settings
            </Text>
          </TouchableOpacity>
          </View>
    </LinearGradient>
    )
  }
}

const Styles = StyleSheet.create({
  ImageProfile:{
    flex:0.5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:50,
  },
  icon:{
    justifyContent:"center",
    alignSelf:"center"
  },
  text:{
    paddingLeft:20,
    color:"white"
  },
  Settings:{
    marginTop:100,
    marginBottom:10,
    justifyContent:"flex-start",
    flexDirection:"row",
    alignItems:"center",
    flex:0.1,
  },
  option:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"flex-start",
    flex:0.1,
  },
  optionsBox:{
    paddingLeft:10,
    flex:1,
    justifyContent:"space-evenly",
  },
  container: {
    flex:1,
  },
  ProfileImageBox:{
    flex:0.5
  },
  options:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-around"
  },
})
