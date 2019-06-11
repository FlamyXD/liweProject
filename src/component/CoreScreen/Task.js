import React, { Component } from 'react';
import {ImageBackground,Image,ScrollView,StatusBar, View, Text,TextInput,StyleSheet, TouchableOpacity, MaterialCommunityIcons} from 'react-native';
import { createStackNavigator,navigationOptions,createDrawerNavigator, DrawerActions} from 'react-navigation';
import { Icon } from 'react-native-elements'


export default class TheTask extends React.Component
{
  static navigationOptions= {header:null}

    render()
    {
    return (
    <View style={Styles.screen}>
      <View style={Styles.header}>
        <TouchableOpacity // button back
        style={Styles.button}
        onPress={()=> this.props.navigation.navigate("HomeScreen")}>
          <Icon name='left' type="antdesign" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity // button option
        style={Styles.button}
        onPress={()=> this.props.navigation.navigate("Settings")}>
          <Icon name='options-vertical' type="simple-line-icon" size={15}/>
        </TouchableOpacity>
      </View>
      <View style={Styles.imageSlider}>
        <TouchableOpacity style={Styles.buttonsSlider}>
          <Icon name='left' type="antdesign" size={30}/>
        </TouchableOpacity>
        <Image
        style={Styles.ImagePreview}
        source={require('./test.jpg')}/>
        <TouchableOpacity style={Styles.buttonsSlider}>
          <Icon name='right' type="antdesign" size={30}/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex:1, alignSelf:"center", backgroundColor:"#FFFFFF",width:"100%"}}>
        <Text style={Styles.text}>
          TEXT
        </Text>
      </ScrollView>
    </View>


    )
  }
}


const Styles = StyleSheet.create({
  buttonsSlider:{
    flex:1,
    alignSelf:"center",
    alignItems:"center"
  },
  imageSlider:{
    flex:0.5,
    justifyContent:"space-between",
    flexDirection:"row",
    padding: 10,
    margin:10.
  },
  text:{
    justifyContent:"center",
    alignSelf:"center",
    padding:10,
    shadowColor:"black",
    shadowOpacity: 10,
    shadowRadius:30,
    shadowOffset:{width: 50, height:50},
  },
  ImagePreview:{
    resizeMode:"stretch",
    alignSelf:"center",

  },
  screen:{
    flex:1,
    backgroundColor:"#FFFFFF",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  back:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
  },
  options:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
  },
  header:{
      margin:5,
      padding:5,
      flex:0.1,
      flexDirection: "row",
      justifyContent: 'space-between',
      backgroundColor:"white",
  },
  button:{
    marginRight:20,
    marginLeft:20,
    justifyContent:"center",
},
})
