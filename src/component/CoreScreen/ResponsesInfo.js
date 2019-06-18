import React, { Component } from 'react';
import {Alert} from 'react-native';

var taskName
var taskText
var taskImage

const taskInfo = () => {
    fetch("http://192.168.1.128:1433/taskInfo",{
    method: "POST",
  }).then((response) => {
        taskName = response.body.taskName
        taskText = response.body.taskText
        taskImage = response.body.taskImage
        console.log(response)
      }).catch((error) => {
        console.error(error);
      })
  }

  const taskInfo  = () => {
      fetch("http://192.168.1.128:1433/taskInfo",{
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
        taskName = response.body.taskName
        taskText = response.body.taskText
        taskImage = response.body.taskImage
      })
      .catch((error) => {
        Alert.alert(
          'Вход не выполнен',
          [{text: 'Повторить попытку?', onPress: () => console.log('Ask me later pressed')},],
          { cancelable: false })
        console.error(error)
      })
  }
export default taskInfo
