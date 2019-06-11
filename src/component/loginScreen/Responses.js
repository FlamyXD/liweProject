import React, { Component } from 'react';
import {Alert} from 'react-native';


const Log_in  = () => {
    fetch("http://192.168.1.128:1433/login",{
      method: "POST",
      data: JSON.stringify
      ({
      login: login,
      password: password
      })
    }
  )
    .then((response) => {
    console.log("Вход выполнен успешно")
    console.log(response)
    }).catch((error) => {
      Alert.alert(
        'Вход не выполнен',
        [{text: 'Повторить попытку?', onPress: () => console.log('Ask me later pressed')},],
        { cancelable: true })
      console.error(error)
    })
}

const Registation  = (login,password) => {
    fetch("http://192.168.1.128:1433/Registation",{
    method: "POST",
    data: JSON.stringify
    ({
    login: login,
    password: password
    })
  })
}.then((response) => {
      console.log("Регистрация успешна")
    }).catch((error) => {
      Alert.alert(
        'Регистрация прошла неудачно',
        [{text: 'Повторить попытку?', onPress: () => console.log('Ask me later pressed')},],
        { cancelable: true })
      console.error(error);
    })
}


var taskName
var taskText
var taskImage

const taskInfo = () => {
    fetch("http://192.168.1.128:1433/taskInfo",{
    method: "POST",
  })
}.then((response) => {
      taskName = response.body.taskName
      taskText = response.body.taskText
      taskImage = response.body.taskImage
      console.log(response)
    }).catch((error) => {
      console.error(error);
    })
}


  const ConfPassword = (password, passwdConf, login) =>{
    if(password == passwdConf){
      Registation(login,password)
    }
    else
    {
      Alert.alert
      (
        'Пароль не совпадает',
        'Повторите попытку ввода пароля',
        [
          {text: 'Повторить', onPress: () => console.log('Ask me later pressed')},
        ],
        { cancelable: false }
      )
    }
  }


export default {Log_in,Registation,taskInfo,ConfPassword}
