import React, { Component } from 'react';
import {Alert} from 'react-native';
import axios from 'axios';



const sellData = (login,passwd) =>
{
  fetch('https://liwe.000webhostapp.com/response.php', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    login: login,
    password: passwd,
    })
  }

)}


const GetData  = (login,passwd) =>
{
  console.log(login)
  console.log(passwd)
  /*
  fetch('https://liwe.000webhostapp.com/response.php',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    login: login,
    password: password,
    })
  })
  */
  axios({
  method: 'get',
  url: 'https://liwe.000webhostapp.com/response.php',
  data: JSON.stringify({
  login: login,
  password: password})
  })
  .then((response) => {
      var money = response.data.money
      console.log(response)
      console.log(money)
    })
    .catch((error) => {
      console.error(error);
    })
}


  const ConfPassword = (passwd, passwdConf, login) =>{
    /* если проверка совпадает то мы отправляем логин
    если такой логин есть то мы выводим что такой пользватель уже существует*/
    if(passwd == passwdConf){
      console.log(login)
      console.log(passwd)
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
