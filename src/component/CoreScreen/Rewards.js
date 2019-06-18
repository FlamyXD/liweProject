import React, { Component } from 'react';
import {ImageBackground,Image,StatusBar, View, Text,TextInput,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerActions} from 'react-navigation';
import {BoxShadow} from 'react-native-shadow'
import { Icon } from 'react-native-elements'

export default class Rewards extends Component{
    render(){
    return (
      <ImageBackground source={{uri:'https://img2.goodfon.ru/original/1920x1080/b/46/siniy-goluboy-tekstury.jpg'}} style={{flex:1}}>
        <View style={Styles.header}>
          <TouchableOpacity
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("HomeScreen")}>
           <Icon name='left' type="antdesign" color="white" size={20}/>
          </TouchableOpacity>
          <View style={Styles.button}>
            <Text style={{color:'white'}}>
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
                    Reward
                  </Text>
                  <Text style = {Styles.text}>
                    1000 SLP
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
       </ImageBackground>
  )
  }

}


const Styles = StyleSheet.create({
  button:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
},
  header:{
    marginBottom:1,
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
    justifyContent:"flex-end",
    flex:1,
    alignSelf:"center",
    width:"100%",
    height:"100%"
  },
  blankField:{
    minHeight:"10%",
    flex:0.1,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"white",
    opacity:0.7
  },
  text:{
    marginHorizontal:10,
    paddingHorizontal:10
  },
  rewardList:{
    flexDirection: "column",
    flex:1,
    paddingHorizontal:10,
    marginHorizontal:10,
  }
})
