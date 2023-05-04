<?php 

$destinatario = "brayanhernandez.proglunes@gmail.com";

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$opinion = $_POST['opinion'];

$header = "Enviado desde HealthyPets";
$mensaje = $opinion . "\nEscrito por: " . $nombre;  

echo json_encode("Se envio");
// mail($destinatario, $asunto, $mensaje, $header);
