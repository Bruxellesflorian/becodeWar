 <?php

    function createUserData($mail, $psw)
    {
        $db = dbConnect();
        $query = $db->prepare("SELECT * FROM `users` WHERE email=? AND password=?");
        $query->execute([$mail, $psw]);
        $logDataUser= $query->fetch();

        $_SESSION['id'] = $logDataUser["id"];
        $_SESSION['fn'] = $logDataUser["first_name"];
        $_SESSION['ln'] = $logDataUser["last_name"];
        $_SESSION['email'] = $logDataUser["email"];
        $_SESSION['country'] = $logDataUser["country"];
    }

 function userExists($email,$psw){
  $db = dbConnect();
  $query = $db->prepare("SELECT * FROM `users` WHERE email=? AND password=?");
  $query->execute([$email,$psw]);
  $results = $query-> fetch();
  if (!empty($results)){
  return true;}
  else {return false;}
  }
  ?>