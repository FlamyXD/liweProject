import React, { Component } from 'react';
import {Image,StatusBar, View, Text,TextInput,StyleSheet, TouchableOpacity,ScrollView, ImageBackground } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerActions} from 'react-navigation';
import {BoxShadow} from 'react-native-shadow'

export default class Rewards extends Component{
    render(){
    return (
      <View style={{flex:1}}>
        <View style={Styles.header}>
          <TouchableOpacity
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("HomeScreen")}>
           <Image
           style={{resizeMode:"contain", width:20,height:20}}
           source={require('./icon/back.png')}/>
          </TouchableOpacity>
          <View style={Styles.button}>
            <Text>
              191232 SLP
            </Text>
          </View>
        </View>
        <ScrollView style={Styles.rewardList}>
            <TouchableOpacity
            style={Styles.rewardPreview}
            onPress={()=> this.props.navigation.navigate("Reward")}>
              <ImageBackground
              source={require('./test.jpg')}
              style={Styles.Image}>
                <View style = {Styles.blankField}>
                  <Text style = {Styles.text}>
                    Task
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
       </View>
  )
  }

}


const Styles = StyleSheet.create({
  button:{
  marginLeft:"5%",
  marginRight:"5%",
  justifyContent:"center",
},
  header:{
    flex:0.1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  rewardPreview:{
    marginTop:5,
    justifyContent: 'space-between',
    alignSelf:'center',
    width: "80%" ,
    height: 220,
    backgroundColor: "#E6E6FA"
  },
  Image:{
    flex:1,
    alignSelf:"center",
    width:"100%",
    height:"100%"
  },
  blankField:{
    minHeight:"10%",
    flex:0.1,
    flexDirection:"row",
    backgroundColor:"white",
    opacity:0.7
  },
  text:{
    flex:1,
    justifyContent:'center',
    alignSelf:'flex-start',
    left:"5%"
  },
  rewardList:{
    flexDirection: "column",
    flex:1,
    paddingHorizontal:10,
    marginHorizontal:10,
  }
})
