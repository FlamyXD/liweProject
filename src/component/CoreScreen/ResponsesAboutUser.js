import React, { Component } from 'react';
import {Alert} from 'react-native';

const AboutUser  = (login) => {
    fetch("http://192.168.1.128:1433/AboutUser",{
      method: "POST",
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
      })
    }
  ).then((response) => {
    console.log(response.body)
    // firstName = response.body.user.firstName
    // lastName = response.body.user.lastName
    // cash = response.body.user.SLP
    // email = response.body.user.email
    })
    .catch((error) => {
      console.error(error)
    })
}

export default AboutUser
