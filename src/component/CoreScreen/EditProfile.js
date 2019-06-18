import React, { Component } from 'react';
import {ImageBackground,TextInput,Image, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';

import {BoxShadow} from 'react-native-shadow'

export default class EditProfile extends React.Component
{
    render(){
    return (
    <ImageBackground source={{uri: 'http://www.onkulis.com/wp-content/uploads/2018/08/DSC05088.jpg'}} style={Styles.screen}>
      <View style={Styles.UserSettings}>
        <View style={Styles.ButtonsBox}>
          <TouchableOpacity // button back
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("Settings")}>
           <Text style={{color:"white"}}>
            Done
           </Text>
          </TouchableOpacity>

          <TouchableOpacity // button Log Out
          style={Styles.button}
          onPress={()=> this.props.navigation.navigate("Settings")}>
            <Text style={{color:"white"}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.UserBox}>
          <BoxShadow setting = {{width:150,height:150,color:"#000",border:15,radius:70,opacity:0.08,x:0,y:0,style:{alignItems:"center",justifyContent:"center",alignSelf:"center"}}}>
            <View style={Styles.userPhoto}>
                <Image
                style={{resizeMode:"contain", width:50,height:50}}
                source={require('./icon/addPhoto.png')}/>
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
        </View>
        <ScrollView style={{flex:1,flexDirection:"column"}}>
          <View style={Styles.NameBox}>
            <Text style={{alignSelf:"flex-start",fontSize:18}}>
             Name
            </Text>
            <TextInput
              style={Styles.input}
              placeholder=" First Name"
              underlineColorAndroid="#707070"
              maxLength={14}
              //onChangeText={(login) => this.setState({firstName})}
            />
            <TextInput
              style={Styles.input}
              placeholder=" Last Name"
              underlineColorAndroid="#707070"
              maxLength={14}
              //onChangeText={(login) => this.setState({lastName})}
            />
          </View>
          <View style={Styles.NameBox}>
            <Text style={{alignSelf:"flex-start",fontSize:18}}>
             Email
            </Text>
            <TextInput
              style={Styles.input}
              placeholder=" example@email.com"
              underlineColorAndroid="#707070"
              maxLength={14}
              //onChangeText={(login) => this.setState({firstName})}
              />
          </View>
          <View style={Styles.NameBox}>
            <Text style={{alignSelf:"flex-start",fontSize:18}}>
             Password
            </Text>
            <TextInput
              style={Styles.input}
              placeholder=" Password"
              underlineColorAndroid="#707070"
              secureTextEntry = {true}
              maxLength={14}
              //onChangeText={(login) => this.setState({firstName})}
            />
            <TextInput
              style={Styles.input}
              placeholder=" Confirm password"
              underlineColorAndroid="#707070"
              secureTextEntry = {true}
              maxLength={14}
              //onChangeText={(login) => this.setState({firstName})}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
    )
  }
}


const Styles = StyleSheet.create({
  input:{
    alignSelf:"flex-start",
    fontSize:14,
    color:'black',
    paddingTop:5,
    paddingBottom:5,
    width:"90%"
  },
  NameBox:{
    borderRadius:10,
    backgroundColor:"white",
    paddingLeft:"5%",
    flex:2,
    paddingTop:20,
    marginTop:20,
    paddingBottom:20,
    marginBottom:20,
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"space-between",
  },
  UserBox:{
    maxHeight:"40%",
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
    marginRight:"10%",
    marginLeft:"10%",
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
