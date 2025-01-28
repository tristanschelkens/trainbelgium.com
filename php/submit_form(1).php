<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Jouw e-mailadres
    $to = "tristanschelkens@gmail.com";

    // Onderwerp van de e-mail
    $reason = "New Contactform";

    // Berichtinhoud
    $messageBody = "Name: $name\n\n";
    $messageBody .= "E-mail: $email\n\n";
    $messageBody .= "Subject: $subject\n\n";
    $messageBody .= "Message: $message\n\n";

    // Aangepaste headers om de afzender in te stellen
    $headers = "From: info@trainbelgium.com";

    // Verstuur de e-mail
    mail($to, $reason, $messageBody, $headers);

    // Voor demonstratiedoeleinden sturen we de gebruiker door naar een bedankpagina
    header("Location: ../html/Success.html");
    exit();
} else {
    // Stuur de gebruiker terug naar het formulier als deze pagina direct wordt benaderd
    header("Location: ../html/Contact.html");
    exit();
}
?>