import React, { Component } from 'react';
import {Alert} from 'react-native'
import 'whatwg-fetch';


const sellData = (login,passwd) =>
{
  fetch('http://localhost/work_directory/liwe/reg.php', {
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

/*
const takeData  = (login,passwd) =>
{
  fetch('http://localhost/workd_irectory/liwe/reg.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    login: login,
    password: passwd,
    })
  })}
  */

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


export default ConfPassword
