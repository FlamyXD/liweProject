import React, { Component } from 'react';
import { Image, View, Text,TextInput,StyleSheet,Icon,TouchableOpacity, ImageBackground } from 'react-native';
import { createStackNavigator,navigationOptions,DrawerActions } from 'react-navigation';
import { LinearGradient } from 'expo';

import ConfPassword from './ResponsesRegistration'


export default class Log extends Component
{
constructor(props) {
  super(props);
  this.state =
  {
  login: '',
  password: '',
  passwdConf: ''
  }
  var login,password,passwdConf
}



static navigationOptions = {header:null}
    render()
    {
    return (
      <ImageBackground source={require('./Background.png')} style={Styles.background}>
            <Image
            style={Styles.logo}
            source={require('./Logo.png')}
            />

          <View style={Styles.input}>
            <TextInput
              style={Styles.login_input}
              placeholder=" Login"
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff0"
              maxLength={14}
              onChangeText={(login) => this.setState({login})}
            />
            <TextInput
              style={Styles.login_input}
              placeholder=" Password"
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff0"
              maxLength={14}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInput
              style={Styles.login_input}
              placeholder="Confirm Password"
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff0"
              maxLength={14}
              onChangeText={(passwdConf) => this.setState({passwdConf})}
            />
          </View>
          <View style={Styles.Buttons}>
            <TouchableOpacity
              style={Styles.Button_Registation}
              onPress={() =>{
                login   = this.state.login
                password  = this.state.password
                passwdConf  = this.state.passwdConf
                ConfPassword(login,password,passwdConf)
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }}>
              <View style={Styles.text}>
                <Text style={{fontSize:20,fontFamily:"Roboto",textShadowRadius:30,color:"#FFFFFF",textShadowOffset: {width:1,height:1}}}>
                  Registation
                </Text>
              </View>
              <LinearGradient colors={['#DB0066', '#D5D5D5']} style={Styles.linearGradient}/>
            </TouchableOpacity>
            <TouchableOpacity
             style={Styles.Button_Login}
             onPress={()=>this.props.navigation.navigate("LoginScreen")}>
             <View style={Styles.text}>
               <Text style={{ fontSize:20,fontFamily:"Roboto",textShadowRadius:30,color:"#FFFFFF",textShadowOffset: {width:1,height:1}}}>
                 Log in
               </Text>
             </View>
            </TouchableOpacity>
          </View>
    </ImageBackground>

    )
  }
}


const Styles = StyleSheet.create({
  text:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignSelf:"center",
  },
  linearGradient: {
    position:"absolute",
    borderRadius:30,
    opacity:0.4,
    width: 200,
    height: 50
  },
  Buttons:{
    position:"absolute",
    height:"20%",
    width:"100%",
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom:'5%',
  },
  Button_Registation:{
    borderRadius:30,
    width: 200,
    height: 50,
  },
  Button_Login:{
    overflow:"visible",
    borderRadius:30,
    borderStyle: "solid",
    borderWidth:1,
    borderColor:"#FFFFFF",

    width:200,
    height:50,
    alignItems:"center",
    top:20,
    bottom:5
  },
  input:{
    position:"absolute",
    alignSelf:'center',
    paddingTop:"70%",
    marginTop:"70%",
    paddingBottom:"20%",
    marginBottom:"20%"
  },
  logo:{
    position:"absolute",
    paddingLeft:5,
    paddingRight:5,
    paddingBottom:"30%",
    marginBottom:"30%",
    justifyContent:'flex-start',
    alignSelf:"center",
    resizeMode: "contain",
    width:"100%",
    height:"100%",
  },
  background:{
    width:"100%",
    height:"100%"
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
  login_input:{
    backgroundColor:'#090909',
    opacity:0.2,
    fontSize:20,
    color:'#FFFFFF',
    borderRadius:32,
    margin:5,
    padding:5,
    textDecorationLine:"none",
    shadowColor:"#000",
    elevation:8,
    shadowOpacity: 10,
    shadowRadius:32,
    shadowOffset:{width: 200, height:300},
    height:40,
    width: 240,
  },

})
/*
<TouchableOpacity style={Styles.Registation}
onPress={() =>{this.props.navigation.navigate("RegScreen")}>
  <Text style={{alignSelf:"center"}}>
    Регистрация
  </Text>
<TouchableOpacity>
*/
