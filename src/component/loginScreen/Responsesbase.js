import React, { Component } from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

const testRequest  = () => {
    fetch("http://192.168.1.128:8080/login", {
    method: "POST",
  }).then((response) => {
      var login = response.body
    })
}

const sellData = (login,passwd) =>
{

  axios({
  method: 'get',
  url: 'https://liwe.000webhostapp.com/response.php',
  data: JSON.stringify({
  login: login,
  password: password})
  })
  .then((response) => {
      var money = response.data.money

    })
    .catch((error) => {
      console.error(error);
    })
}


const GetData  = (login,passwd) =>
{

  axios({
  method: 'get',
  url: 'https://liwe.000webhostapp.com/response.php',
  data: JSON.stringify({
  login: login,
  password: password})
  })
  .then((response) => {
      var money = response.data.money

    })
    .catch((error) => {

    })
}


  const ConfPassword = (passwd, passwdConf, login) =>{
    /* если проверка совпадает то мы отправляем логин
    если такой логин есть то мы выводим что такой пользватель уже существует*/
    if(passwd == passwdConf){

      sellData(login,passwd)
    }
    /* если проверка совпадает не совпадает то мы выводим компонент
     с текстом пароли не совпадают*/
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


export default GetData
