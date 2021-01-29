<?php

if (!isset($_SESSION['id'])) {
    if (!empty($_GET['page'])) {
    include("./view/signIn.php");
}else {
    include("./view/login.php");
}
} else {
$page="mainPage";

if (!empty($_GET['page'])) {
    $page = $_GET['page'];
}
include_once("./view/navbar.php");
include_once('./view/' . $page . '.php');
}
