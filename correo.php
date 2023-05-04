<?php 

$destinatario = "brayan.hernandes.proglunes@gmail.com";
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$opinion = $_POST['opinion'];



 echo json_encode($nombre . " " . $correo . " " . $asunto . " " . $opinion);