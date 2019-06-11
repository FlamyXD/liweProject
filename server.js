var express = require('express');
var app = express(); //экземпляр экспереса

var mysql = require('mysql'); //экземпляр конекта к базе данных
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : 'liwe'
});

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var result
var obj


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
  Log_in()
  console.log(result)
  res.send(result)
})

let Log_in  = () => {
  connection.query('SELECT * FROM users as login ', function(err, res) {
    if (err) throw err
    obj = {users:res}
    result = JSON.stringify(obj);
    console.log("Log in complete")
    console.log(result)
  })
}

app.post('/Registation',jsonParser, function (req, res) {
  login = req.data.login //получаем логин и пароль из приложения которые ввел пользователь
  password = req.data.password
  Registation(login,password) //отправляем данные логина и пароля пользователя в функцию
  console.log(result)
  res.send(result)
})

//INSERT INTO users as login VALUES +'login'+'
let Registation  = (login,password) => { //получаем данные пользателя для регистрации
  connection.query('INSERT INTO users as login VALUES login ', function(err, res)
  { //отправляем запрос для добавления данных в бд
    if (err) throw err
    console.log(login)// выводим данные логина и пароля в консоль
    console.log(res)
  })
  connection.query('INSERT INTO users as password VALUES password ', function(err, res)
  { //отправляем запрос для добавления данных в бд
    if (err) throw err
    console.log(password)// выводим данные логина и пароля в консоль
    console.log(res)
  })
  console.log("Log in complete")
}


app.listen(1433, function () {
  console.log('Server complete: http://localhost:1433')
})
