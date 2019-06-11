import React, { Component } from 'react';
import {ScrollView, Image,View, Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';
import {BoxShadow} from 'react-native-shadow'
import { Icon } from 'react-native-elements'

export default class ProfileScreen extends React.Component
{
    render()
    {
    return (
      <View style={Styles.ProfileBox}>
        <View style={Styles.header}>
          <TouchableOpacity
           style={Styles.button}
           onPress={()=> this.props.navigation.navigate("HomeScreen")}>
           <Icon name='left' type="antdesign" size={20}/>
          </TouchableOpacity>
        </View>

        <View style={Styles.UserBox}>
            <View style={Styles.textUser}>
              <Text>
                username
              </Text>
            </View>
            <View style={Styles.Photo_Exp_Lvl}>
              <View style={Styles.textUser}>
                <Text>
                  Level 28
                </Text>
              </View>
              <BoxShadow setting = {{width:150,height:150,color:"#000",border:15,radius:70,opacity:0.08,x:0,y:0,style:{alignItems:"center",justifyContent:"center",alignSelf:"center"}}}>
                <View style={Styles.userPhoto}>
                    <Image
                    style={{resizeMode:"contain", width:50,height:50}}
                    source={require('./icon/user.png')}/>
                </View>
              </BoxShadow>
              <View style={Styles.textUser}>
                <Text>
                  Experience
                </Text>
              </View>
            </View>
            <View style={Styles.textUser}>
              <Text>
                Rank
              </Text>
            </View>
        </View>
      <View style={Styles.InfoBox}>
      <View style={Styles.Achievements}>
        <Text>
         Achievement
        </Text>
        <ScrollView style={Styles.ScrollView}>
          <Text>
           TEST
          </Text>
        </ScrollView>
      </View>
      <View style={Styles.Exp}>
        <Text>
         Exp
        </Text>
        <Text>
          Добавить какой то эффект заполнения
        </Text>
      </View>
      <View style={Styles.Stats}>
        <Text>
         Stats
        </Text>
        <ScrollView style={Styles.ScrollView}>
          <Text>
            TEST
          </Text>
        </ScrollView>
      </View>

      </View>
    </View>
  )}
}


const Styles = StyleSheet.create({
  textUser:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  },
  ScrollView:{
    flex:1,
    borderRadius:20,
    backgroundColor:"white",
    padding:"5%"
  },
  InfoBox:{
    backgroundColor:"white",
    flex:2,
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  Achievements:{
    padding:"5%",
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"column"
 },
 Exp:{
    padding:"5%",
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"column"
},
  Stats:{
    padding:"5%",
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"column"
},
  Photo_Exp_Lvl:{
    paddingHorizontal:20,
    marginHorizontal:20,
    flex:1,
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"space-between",
  },
  UserBox:{
    backgroundColor:"white",
    justifyContent:"space-around",
    flexDirection:"row",
    flex:1,
  },
  ProfileBox:{
    backgroundColor:"grey",
    flex:2,
  },
  header:{
    justifyContent:"center",
    backgroundColor:"white",
    flex:0.2,

  },
  button:{
    marginLeft:"5%",
    alignSelf:"flex-start"
  },
  userPhoto:{
    backgroundColor:"white",
    paddingVertical:20,
    marginVertical:30,
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    borderRadius:100,
    width:150,
    height:150,
  },
})
