<?php
    session_start();
    include_once('./components/functions.php');
    if (isset($_POST['loginSubmit']) && userExists($_POST['loginPseudo'], $_POST['loginPsw'])) {
        createUserData($_POST['loginPseudo'], $_POST['loginPsw']);
    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>BecodeWAR</title>
</head>
<header>
    <!-- Jean -->
    <?php include('./components/router.php'); ?>
    <!-- Jean -->
</header>

<body>

</body>

</html>