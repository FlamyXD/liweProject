import React,{Component} from 'react';
import {StyleSheet,ImageBackground,View,Text,TouchableOpacity} from 'react-native';




export default class Preload extends Component
  {
    static navigationOptions = {
      header: null
      }

    render()
    {
    return(
        <ImageBackground source={require('./RreLoad.png')} style={Styles.image}>
          <View style={Styles.image}>
            <View style={Styles.vievStyle}>
            <TouchableOpacity
             style={Styles.text}
             onPress={()=>this.props.navigation.navigate("LoginScreen")}>
                <Text>Приветствую тебя</Text>
                <Text style={{opacity:0.3,top:10}} >(Для регистрации нажмите)</Text>
            </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }




const Styles = StyleSheet.create({
  image:{
    width: '100%',
    height: '100%'
  },
  center: {
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  vievStyle:{
    opacity:0.9,
    borderRadius:30,
    top:"40%",
    backgroundColor:"#BABABA",
    alignSelf:'center',
    height:100,
    width:200,
    shadowColor:"#000",
    elevation:8,
    shadowOpacity: 10,
    shadowRadius:30,
    shadowOffset:{width: 200, height:300}

  }
});
