<?php 

$destinatario = "brayan.hernandes.proglunes@gmail.com";
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$opinion = $_POST['opinion'];

if(empty($nombre)){
    echo `alert("El formulario no se puede enviar")`;
}

echo $nombre . " " . $correo . " " . $asunto . " " . $opinion;