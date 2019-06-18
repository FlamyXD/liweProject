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
    <ImageBackground source={{uri:'https://img2.goodfon.ru/original/1920x1080/b/46/siniy-goluboy-tekstury.jpg'}} style={Styles.screen}>
      <View style={Styles.imageSlider}>
        <TouchableOpacity style={Styles.buttonsSlider}>
          <Icon name='left' type="antdesign" color="white" size={30}/>
        </TouchableOpacity>
        <Image
        style={Styles.ImagePreview}
        source={require('./test.jpg')}/>
        <TouchableOpacity style={Styles.buttonsSlider}>
          <Icon name='right' type="antdesign" color="white" size={30}/>
        </TouchableOpacity>
      </View>
      <ScrollView style={Styles.ScrollBox}>
        <Text style={Styles.text}>
          TEXT
        </Text>
      </ScrollView>
      <View style={Styles.ButtonsBox}>
        <TouchableOpacity style={Styles.Buttons_left}
        onPress={()=> this.props.navigation.navigate("HomeScreen")}>
          <Text>
            Decline
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Buttons_right}
        onPress={()=> this.props.navigation.navigate("CompleteTasks")}>
          <Text>
            Accept
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    )
  }
}


const Styles = StyleSheet.create({
  Buttons_left:{
    margin:5,
    padding:5,
    borderRadius:50,
    flex:0.5,
    alignItems:"center",
    backgroundColor:"red",
    justifyContent:"center",
  },
  Buttons_right:{
    margin:5,
    padding:5,
    borderRadius:50,
    flex:0.5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  },
  ButtonsBox:{
    flex:0.2,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  ScrollBox:{
    flex:1,
    alignSelf:"center",
    color:"white",
    width:"100%"
  },
  buttonsSlider:{
    flex:1,
    alignSelf:"center",
    alignItems:"center"
  },
  imageSlider:{
    flex:0.5,
    justifyContent:"space-between",
    flexDirection:"row",
    paddingTop: 10,
    marginTop:10,
    paddingBottom: 10,
    marginBottom:10.
  },
  text:{
    color:"white",
    justifyContent:"center",
    alignSelf:"center",
    padding:10,
  },
  ImagePreview:{
    resizeMode:"stretch",
    alignSelf:"center",
  },
  screen:{
    flex:1,
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
      marginVertical: 5,
      paddingVertical:5,
      marginHorizontal:5,
      paddingHorizontal:5,
      flex:0.05,
      flexDirection: "row",
      justifyContent: 'space-between',
  },
  button:{
    justifyContent:"center",
},
})
