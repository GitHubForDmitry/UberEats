<?php

if (isset($_POST['sub'])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
}
echo  "<h1>" . $email . ' ' . $name . "</h1>";
