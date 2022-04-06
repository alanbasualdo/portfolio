<?php 
if(isset($_POST['submit'])){
    $to = "alanbasualdo7@outlook.com";
    $from = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $message = $_POST['message'];
    $subject = "De " . $from . " - Nombre: " . $first_name . " - Apellido: " . $last_name;
 
    mail($to, $subject, $message);
    echo'<script type="text/javascript">
    alert("Mensaje enviado, gracias!");
    window.location.href="../index.html";
    </script>';
    }
?>