import React, { Component } from 'react';
import { Image,View, Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';



export default class ProfileScreen extends React.Component
{
    render()
    {
    return (
      <View style={Styles.ProfileBox}>
        <TouchableOpacity // button back
        style={Styles.button}
        onPress={()=> this.props.navigation.navigate("HomeScreen")}>
         <Image
         style={{resizeMode:"contain", width:20,height:20}}
         source={require('./icon/back.png')}/>
        </TouchableOpacity>
        <Text style={{position:"absolute",justifyContent:"flex-start",alignSelf:"center",paddingTop:30}}>
          Level 28
        </Text>
        <View style={Styles.Info}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:"10%",paddingRight:"10%"}}>
            <Text>
              username
            </Text>
            <Text>
              Rank
            </Text>
          </View>
          <View style={Styles.userPhoto}>
            <Image
            style={{resizeMode:"contain", width:50,height:50}}
            source={require('./icon/user.png')}
            />
          </View>
      </View>
      <View style={Styles.InfoBox}>
        <View>
          <Text>
          Archi
          </Text>
        </View>
        <View>
          <Text>
          Exp
          </Text>
        </View>
        <View>
          <Text>
          Stats
          </Text>
        </View>
      </View>
      </View> // ProfileBox end
    )
  }
}


const Styles = StyleSheet.create({
  InfoBox:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  Info:{
    flex:1,
  },
  ProfileBox:{
    flex:1,
  },
  button:{
    position:"absolute",
    paddingTop:30,
    marginLeft:"10%",
    alignSelf:"flex-start"
  },
  userPhoto:{
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    borderRadius:100,
    width:150,
    height:150,
    backgroundColor:"grey"
  },
  UserBox:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }
})
