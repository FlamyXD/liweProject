import React, { Component } from 'react';
import {Alert} from 'react-native';


const Registration  = (login,password) => {
    fetch("http://192.168.1.128:1433/Registration",{
    method: "POST",
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: login,
      password: password
    }),
  }).then((response) => {
        console.log("Регистрация успешна")
      }).catch((error) => {
        Alert.alert(
          'Регистрация прошла неудачно',
          [{text: 'Повторить попытку?', onPress: () => console.log('Ask me later pressed')},],
          { cancelable: true })
        console.error(error);
      })
  }

  const ConfPassword = (login,password,passwdConf) => {
    if(password == passwdConf){
      Registration(login,password)
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


  export default ConfPassword
