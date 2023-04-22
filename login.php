<?php
$connect = mysqli_connect("localhost", "root", "", "users");
if (isset($_POST['email'], $_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $stmt = "INSERT INTO tbl_contact (`email`,`password`) VALUES ( '$email','$password')";
    mysqli_query($connect, $stmt);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Join Now</title>
    <link rel="stylesheet" href="./style.css" />
</head>

<body class="form">
    <a href="./Index.html" class="formBackbtn">Home</a>
    <div class="logIn">
        <div class="lightbar"></div>
        <div class="toplayer"></div>
        <h2>Welcome!</h2>
    </div>
    <form action="./login.php" method="post">
        <div class="inputBox">
            <input type="email" name="email" required="required" />
            <span>Email</span>
        </div>
        <div class="inputBox">
            <input type="password" name="password" required="required" />
            <span>Password</span>
        </div>
        <input type="submit" name="submit" value="Submit" class="formBtn" />
    </form>
</body>

</html>