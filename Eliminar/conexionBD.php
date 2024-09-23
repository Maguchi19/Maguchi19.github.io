<?php
$servername = 'sql309.infinityfree.com'; 
$username = "if0_37365318"; 
$password = "Dinorey2002"; 
$dbname = "if0_37365318_inventario"; 

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa"; // Para confirmar que la conexión se estableció
}
?>