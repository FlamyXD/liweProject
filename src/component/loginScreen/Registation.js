import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,Icon,TouchableOpacity } from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';
import Button from 'react-native-button';
import ConfPassword from './Responses'



export default class Log extends Component
{
constructor(props) {
  super(props);
  this.state =
  {
  login: '',
  passwd: '',
  passwdConf: ''
  }
  var login,passwd,passwdConf
}



static navigationOptions = {header:null}
    render()
    {
    return (
      <View style={Styles.inputText}>
      <View style={Styles.header}>
          <Text style = {Styles.text}>
            Registation
          </Text>
      </View>
          <View style={{alignItems:'center',justifyContent:'center',top:'30%'}}>
            <TextInput
              style={Styles.login_input}
              placeholder="  Login"
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff0"
              maxLength={14}
              onChangeText={(login) => this.setState({login})}
            />
            <TextInput
              style={Styles.login_input}
              placeholder="  Password"
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff0"
              maxLength={14}
              onChangeText={(passwd) => this.setState({passwd})}
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end',bottom:'10%' }}>
              <Button
                containerStyle={{padding:10, height:45,width:"auto", overflow:'hidden', borderRadius:30, backgroundColor: 'white'}}
                style={{fontSize: 20, color: 'green'}}
                onPress={() =>
                  {
                  this.props.navigation.navigate("HomeScreen")
                  login   = this.state.login
                  passwd  = this.state.passwd
                  passwdConf  = this.state.passwdConf
                  //ConfPassword(passwd,passwdConf,login)
                  }}>
                Зарегестрироватся
              </Button>
              <TouchableOpacity
               style={Styles.Registation}
               onPress={()=>this.props.navigation.navigate("LoginScreen")}>
                <Text style={{alignSelf:"center"}}>
                  Вход
                </Text>
              </TouchableOpacity>
            </View>
      </View>

    )
  }
}


const Styles = StyleSheet.create({
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
  login_input:{
    backgroundColor: '#dd9977',
    fontSize:18,
    color:'#fff',
    paddingLeft:10,
    marginBottom:16,
    borderRadius:12,
    textDecorationLine:"none",
    shadowColor:"#000",
    elevation:8,
    shadowOpacity: 10,
    shadowRadius:30,
    shadowOffset:{width: 200, height:300},
    height:40,
    width: 240,
  },
  inputText:
  {
  width:'100%',
  height:'100%',
  backgroundColor:"#ddaabb",
  },
  Registation:{
    justifyContent:"flex-end",
    alignItems:"center",
    width:100,
    height:30,
    top:20,
    bottom:5
  }
})
/*
<TouchableOpacity style={Styles.Registation}
onPress={() =>{this.props.navigation.navigate("RegScreen")}>
  <Text style={{alignSelf:"center"}}>
    Регистрация
  </Text>
<TouchableOpacity>
*/
