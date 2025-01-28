<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    // Voor demonstratiedoeleinden sturen we de gebruiker door naar een bedankpagina
    header("Location: ../html/Success.html");
    exit();
} 