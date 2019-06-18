var express = require('express');
var app = express(); //экземпляр экспереса

var mysql = require('mysql'); //экземпляр конекта к базе данных
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : 'liwe'
});

const promise = require('promise');


var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var login
var password
var errorMessage



app.post('/AboutUser',jsonParser, function (req, res) {
  let obj
  let test
  let login = req.body.login
  AsynFunction()
  console.log(test)
  res.send(test)
})

let AsynFunction = async() =>
{
  await AboutUser(login)
}


let AboutUser = (login) => {
   connection.query('SELECT `SLP`,`FirstName`,`LastName`,`email`,`userPhoto` FROM `users` WHERE `login`= "'+ login + '"', function(err, res) {
    if(err) {
      console.log("error: ", err);
    }
    else{
      obj = {user:res}
      test = JSON.stringify(obj)
      return test
    }
  })
}


app.post('/taskInfo',jsonParser, function (req, res) {
  taskInfo()
  console.log(result)
  res.send(result)
});

let taskInfo = () => {
  connection.query('SELECT * FROM task', function(err, res) {
    if (err) throw err
    obj = {tasks:res}
    result = JSON.stringify(obj);
    console.log("Take complete")
    console.log(result)
  })
}

app.post('/login',jsonParser, function (req, res) {
  console.log(req.body)
  login = req.body.login
  password = req.body.password
  Log_in(login,password)
})

let Log_in  = (login,password) => {
  connection.query('select * from users where login = "'+ login + '" and password = "'+ password + '"', function(err, res) {
    if (err) throw err
    console.log(res)
  })
}

app.post('/Registration',jsonParser, function (req, res) {
  console.log(req.body)
  let login = req.body.login
  let password = req.body.password
  console.log(req.body.login)
  console.log(req.body.password)
  Registration(login,password) //отправляем данные логина и пароля пользователя в функцию
})


let Registration  = (login,password) => { //получаем данные пользателя для регистрации
  connection.query('INSERT INTO users(login,password)  VALUES ("'+ login + '","' + password +'")', function(err, res)
  { //отправляем запрос для добавления данных в бд
    if (err) throw err
    console.log(login)
    console.log(password)
  })
  console.log("Registration complete")
}


app.listen(1433, function () {
  console.log('Server complete: http://localhost:1433')
})
