import React, { Component } from 'react';
import {Alert} from 'react-native';



const Log_in  = (login,password) => {
    fetch("http://192.168.1.128:1433/login",{
      method: "POST",
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: password
      })
    }
  ).then((response) => {
    console.log("Вход выполнен успешно")
    })
    .catch((error) => {
      Alert.alert(
        'Вход не выполнен',
        [{text: 'Повторить попытку?', onPress: () => console.log('Ask me later pressed')},],
        { cancelable: false })
      console.error(error)
    })
}

export default Log_in
