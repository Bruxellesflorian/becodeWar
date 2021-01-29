 <?php
include_once('db.php');

    function createUserData($pseudo, $psw)
    {
        $db = dbConnect();
        $query = $db->prepare("SELECT * FROM `users` WHERE username=? AND password=?");
        $query->execute([$pseudo, $psw]);
        $logDataUser= $query->fetch();

        $_SESSION['id'] = $logDataUser["id_user"];
        $_SESSION['pseudo'] = $logDataUser["username"];
        $_SESSION['email'] = $logDataUser["email"];
    }

 function userExists($pseudo,$psw){
  $db = dbConnect();
  $query = $db->prepare("SELECT * FROM `users` WHERE username=? AND password=?");
  $query->execute([$pseudo,$psw]);
  $results = $query-> fetch();
  if (!empty($results)){
  return true;}
  else {return false;}
  }

function createNewUser($pseudo, $email, $psw)
    {
        $db = dbConnect();

        $query = $db->prepare("INSERT INTO `users` (`username`, `email`, `password`) VALUES (?,?,?)");
        $query->execute([$pseudo, $email, $psw]);
    }


  ?>