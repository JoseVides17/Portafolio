<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Correo electrónico de destino
    $to = "jose.videsbaron@gmail.com";

    // Asunto del correo electrónico
    $subject = "Mensaje de contacto de $name";

    // Cuerpo del correo electrónico
    $body = "Has recibido un mensaje de contacto de $name ($email):\n\n$message";

    // Cabeceras del correo electrónico
    $headers = "From: $email";

    // Enviar el correo electrónico
    mail($to, $subject, $body, $headers);

    // Redirigir al usuario a alguna página de confirmación
    header("Location: confirmacion.html");
    exit();
}
?>
