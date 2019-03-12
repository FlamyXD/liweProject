
<?php
  $conn = mysqli_connect("localhost","id8157540_flamyxd","admin123","id8157540_liwe");
  if (!$conn) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
  $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
  $login = 'test';
  $passwd = 'test';
  $MoneyQuery = "SELECT money FROM users WHERE login = '$login' and password = '$passwd' ";
  $money = mysqli_query($conn,$MoneyQuery);
  $SQL_Query = "select * from users where login = '$login' and password = '$passwd' ";
  $check = mysqli_fetch_array(mysqli_query($conn,$SQL_Query));

  if(isset($check)){
    $SuccessLoginMsg = 'Data Matched!';
    $result = mysqli_fetch_assoc($money);
    $data = array('login' => $login,'money' => $result, 'enter' => true);
    $SuccessLoginJson = json_encode($data);
    print_r($result);
    echo $SuccessLoginJson ;
  }
  else{
    $InvalidMSG = 'Invalid Username or Password Please Try Again' ;
    $InvalidMSGJSon = json_encode($InvalidMSG);
     echo $InvalidMSGJSon ;
  }
  mysqli_close($conn);
?>
