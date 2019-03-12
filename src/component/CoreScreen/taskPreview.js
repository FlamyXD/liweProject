import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native';


const TaskPreview = () =>
{
  return(
    <TouchableOpacity
    style = {Styles.taskPreview}
    onPress={()=>this.props.navigation.navigate("TaskScreen")}>
      <Image
      style = {Styles.Image}
      source={require('/react-native/img/favicon.png')}/>
        <View style = {Styles.Name}>
          <Text style = {Style.text}>
            Task
          </Text>
        </View>
    </TouchableOpacity>
    )
}


export default TaskPreview

const Styles = StyleSheet.create({
  taskPreview:{
  width: 330 ,
  height: 220
  },
  Image:{
    flex:1
  },
  Name:{
    width:"100%",
    height:"10%"
  },
  text:{
    justifyContent:'center',
    alignSelf:'flex-start',
    left:"5%"
  }

})
